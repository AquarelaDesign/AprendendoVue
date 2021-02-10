import config from 'config';
import axios from 'axios';
// import { authHeader } from '../_helpers';
import { global } from "../_store/global.module";

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
  const requestOptions = {
    method: 'POST',
    url: `${global.state.urlApi}/token`,
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded' 
    },
    body: JSON.stringify({ 
      grant_type: 'password', 
      username, 
      password 
    })
  };

  console.log('requestOptions', requestOptions);
  
  return axios(requestOptions)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('@rf/token', token);
      console.log('res.data', res.data);
      
      if (token) {
        // armazene os detalhes do usuário e o token jwt no 
        // armazenamento local para manter o usuário conectado 
        // entre as atualizações da página
        localStorage.setItem('user', JSON.stringify(user));
    }

    return null;


    })
  
  /*
  return fetch(`https://www.retornofacil.com.br:3333/authenticate`, { 
      username, 
      password 
    },{
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    // .then(handleResponse)
    .then(res => {
        // login bem-sucedido se houver um token jwt na resposta
        console.log('res', res);
        if (token) {
          localStorage.setItem('@rf/token', token);
          // armazene os detalhes do usuário e o token jwt no armazenamento local para manter o usuário conectado entre as atualizações da página
            localStorage.setItem('user', JSON.stringify(user));
        }

        return null;
    })
    .catch((error) => {
      if (error.response) {
        const { data } = error.response
        try {
          data.map(mensagem => {
            console.log('**** Login.error', mensagem.message)
          })
        }
        catch (e) {
          console.log('**** Login.error.data', data)
        }
      } else if (error.request) {
        console.log('**** Login.error', error)
      } else {
      }
    });
  */
  /*
  return fetch(`${global.state.urlApi}/token`, requestOptions)
    // .then(handleResponse)
    .then(res => {
        // login bem-sucedido se houver um token jwt na resposta
        console.log('res', res);
        if (token) {
          localStorage.setItem('@rf/token', token);
          // armazene os detalhes do usuário e o token jwt no armazenamento local para manter o usuário conectado entre as atualizações da página
            localStorage.setItem('user', JSON.stringify(user));
        }

        return user;
    })
    .catch((error) => {
      if (error.response) {
        const { data } = error.response
        try {
          data.map(mensagem => {
            console.log('**** Login.error', mensagem.message)
          })
        }
        catch (e) {
          console.log('**** Login.error.data', data)
        }
      } else if (error.request) {
        console.log('**** Login.error', error)
      } else {
      }
    });
  */
  /*
  return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
      .then(handleResponse)
      .then(user => {
          // login successful if there's a jwt token in the response
          if (user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('user', JSON.stringify(user));
          }

          return user;
      });
  */
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
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
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
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

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}