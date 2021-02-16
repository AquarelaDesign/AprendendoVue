import axios from 'axios'

const API_URL = 'http://localhost:95'

class AuthService {
  login(
    username: string, 
    password: string
  ) {
    return axios.post(
      API_URL + 'token', 
      `grant_type=password&username=${username}&password=${password}`, 
      {
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded' 
        }
      }
    )
    .then(response => {
      if (response.data.access_token) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    })
  }

  logout() {
    localStorage.removeItem('user')
  }

  register(
    idPessoa: number,
    nmUsuario: string,
    dtNascimento: Date,
    nrTelefone: string,
    urlImgFoto: string,
    idPermissaoUsuario: number,
    username: string, 
    email: string, 
    password: string
  ) {
    return axios.post(API_URL + '/api/usuario/atualizarUsuario', 
    {
      idPessoa,
      nmUsuario,
      dtNascimento,
      nrTelefone,
      urlImgFoto,
      idPermissaoUsuario,
      username,
      email,
      password
    });
  }
}

export default new AuthService()
