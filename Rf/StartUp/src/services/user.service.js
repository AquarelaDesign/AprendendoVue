import config from 'config';
import { authHeader } from '../helpers';
import axios from 'axios';
import VueCookies from 'vue-cookies'

export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete
};

function login(username, password) {
  return axios.post(
    `${config.apiUrl}/token`, 
    `grant_type=password&username=${username}&password=${password}`, 
    {
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
    }
  )
  .then(handleResponse)
  .then(res => {
    const { access_token, expires_in } = res;
    // console.log('access_token', access_token);

    var minutes = Math.floor(expires_in / 60);
    var seconds = ((expires_in % 60000) / 1000).toFixed(0);
    console.log('expires_in', expires_in,  minutes + ":" + (seconds < 10 ? '0' : '') + seconds);
  
    
    if (access_token) {
      localStorage.setItem('@rf/token', access_token);
      localStorage.setItem('@rf/user', username);
      localStorage.setItem('@rf/expires_in', expires_in);
      this.getAll();
    }
  })
  .catch(err => {
    // console.log('erro:', err);
    const error = 'Houve uma falha na autenticação do usuário, por favor verifique se o login e a senha estão corretos!';
    Promise.reject(error)
  })
}

function logout() {
  // remova o usuário do armazenamento local para desconectar o usuário
  localStorage.removeItem('@rf/user');
  localStorage.removeItem('@rf/token');
  localStorage.removeItem('@rf/expires_in');
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
}

function getAll() {
  let user = localStorage.getItem('@rf/user');

  return axios.get(
    `${config.apiUrl}/api/usuario/listarUsuarios?dsLogin=${user}`, 
    {}, 
    authHeader()
  )
  .then(handleResponse)
  .then(res => {
    console.log('user.service.getAll.res:', typeof res, res.length, res);
    VueCookies.set('AppRetornoFacil_UserData', res.length > 1 ? res[0] : res);
    // AppRetornoFacil_UserData=RetornoFacil.idClienteAcesso=3&RetornoFacil.flClienteAcessoAtivo=True&RetornoFacil.isSupervisor=True&RetornoFacil.dtVigenciaContrato=29/12/2021 00:00:00&RetornoFacil.idCliente=1&RetornoFacil.urlImgLogo=&RetornoFacil.flRefazSenha=False&RetornoFacil.dtVigenciaSenha=&RetornoFacil.qtdUsuarios=10&RetornoFacil.usuarioId=jose@arenatransautos.com.br&RetornoFacil.dsLogin=jose@arenatransautos.com.br&RetornoFacil.nmUsuario=Jose Augusto Freire&RetornoFacil.idPlano=1&RetornoFacil.cdPlano=1&RetornoFacil.urlImgFoto=&RetornoFacil.isAdmin=True; Path=/;


  })
  .catch(err => {
    console.log('erro:', err);
    const error = 'Houve uma falha na autenticação do usuário, por favor verifique se o login e a senha estão corretos!';
    Promise.reject(error)
  })
}


function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function update(user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
}

// nome da função prefixado com sublinhado porque delete é uma palavra reservada em javascript
function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {

  console.log('handleResponse.response', response);
  const { data } = response;

  if ( response.status === 200 ) {
    return data;
  } else {
    // console.log('response.status !== 200', response);
    
    
    // if (response.status === 401) {
    //   // logout automático se a resposta 401 for retornada da api
    //   logout();
    //   location.reload(true);
    // }
    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  };

}