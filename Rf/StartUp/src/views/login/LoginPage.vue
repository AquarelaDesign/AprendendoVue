<template>
  <div class="boxLoginE">
    <span class="txtLogin"
      >Com o objetivo de facilitar o transporte do seu veículo, o aplicativo
      RETORNO FÁCIL traz para você todas as rotas disponíveis e, rapidamente
      indica os melhor valor e prazo para o seu frete.
    </span>

    <div class="boxRodape">
      <span class="lblContato">Contato:</span>
      <span class="txtContato"
        >contato@arenatransautos.com.br<br />+55 (41) 3284-5252</span
      >
      <span class="lblInfo">Informações:</span>
      <span class="txtInfo"
        >Software para gestão de transporte de veículos, para transportistas
        e transportadoras</span
      >
    </div>

    <div class="boxLogin">
      <img class="imglogo" :src="logo" alt="">

      <form class="boxForm" @submit.prevent="handleSubmit">
        
        <span class="txtTitulo">Olá, Seja bem vindo!</span>

        <div class="form-group">
          <label class="lblEmail" for="username">Email</label>
          <input
            type="text"
            v-model="username"
            name="username"
            class="form-control inpEmail"
            :class="{ 'is-invalid': submitted && !username }"
            placeholder="exemplo@email.com.br"
          />
          <div v-show="submitted && !username" class="invalid-feedback">
            Nome de usuário é requerido
          </div>
        </div>
        <div class="form-group">
          <label class="lblSenha" htmlFor="password">Senha</label>
          <input
            type="password"
            v-model="password"
            name="password"
            class="form-control inpSenha"
            :class="{ 'is-invalid': submitted && !password }"
            placeholder="*********"
          />
          <div v-show="submitted && !password" class="invalid-feedback">
            Senha requerida
          </div>
        </div>
        
        <span class="txtEsqueci">
          <router-link to="/register" class="btn btn-link">
            Esqueci minha senha.
          </router-link>          
        </span>
        
        <div class="form-group boxEntrar">
          <button class="btn btn-light btnEntrar" :disabled="status.loggingIn">
            Entrar
          </button>
          <img
            v-show="status.loggingIn"
            src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
          />
          
          <span class="lblNaoPossui">Não possui uma conta? 
            <router-link to="/register" class="btn btn-link">
              Crie uma agora!
            </router-link>
          </span>
        </div>
      </form>

    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import nmLogo from '../../assets/logo_splash.png';

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
      logo: nmLogo,
    };
  },
  computed: {
    ...mapState("account", ["status"]),
  },
  created() {
    // redefinir status de login
    this.logout();
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),  
    handleSubmit(e) {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        this.login({ username, password });
      }
    },
  },
};
</script>

<style scoped>
.boxLoginE {
  width: 100%;
  height: 100%;
  background: url("../../assets/bg_login.png");
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 75% 100%;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  display: flex;
}

.txtLogin {
  color: rgba(38, 64, 91, 1);
  margin-top: 4%;
  margin-left: 5%;
  opacity: 1;
  text-align: left;
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.2vw;
  text-align: left;
  display: block;
  width: 40%;
}

.boxRodape {
  width: 65%;
  height: 15%;
  background: rgba(38, 64, 90, 0.5);
  opacity: 1;
  position: absolute;
  bottom: 0px;
  left: 0px;
  overflow: hidden;
}

.lblContato {
  width: 30vw;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  bottom: 9vh;
  left: 1vw;
  font-family: Arial;
  font-weight: Bold;
  font-size: 2.5vh;
  opacity: 1;
  text-align: left;
}

.txtContato {
  width: 30vw;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  bottom: 2.8vh;
  left: 1vw;
  font-family: Arial;
  font-weight: Bold;
  font-size: 1.8vh;
  opacity: 1;
  text-align: left;
}

.lblInfo {
  width: 20vw;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  bottom: 9vh;
  right: 1vw;
  font-family: Arial;
  font-weight: Bold;
  font-size: 2.5vh;
  opacity: 1;
  text-align: right;
}

.txtInfo {
  width: 20vw;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  bottom: 2.8vh;
  right: 1vw;
  font-family: Arial;
  font-weight: Bold;
  font-size: 1.8vh;
  opacity: 1;
  text-align: right;
}

.boxLogin {
  width: 35%;
  height: 100%;
  background: linear-gradient(rgba(61, 82, 106, 1), rgba(28, 57, 84, 1));
  opacity: 1;
  position: absolute;
  top: 0px;
  right: 0px;
  box-shadow: -3px 0px 10px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.imglogo {
  top: 5vw;
  position: absolute;
  width: 40%;
  display: block;
  z-index: 999;
}

.boxForm {
  width: 85%;
  height: 33vw;
  position: absolute;
  top: 15vw;
}

.txtTitulo {
  color: rgba(255, 255, 255, 1);
  font-family: Arial;
  font-size: 1.5vw;
  text-align: left;
  display: block;
  width: 100%;
}

.lblEmail {
  margin-top: 20px;
  color: rgba(255, 255, 255, 1);
  font-family: Roboto;
  font-weight: Bold;
  font-size: 0.9vw;
}

.inpEmail {
  background: rgba(255, 255, 255, 1);
  font-size: 1.1vw;
  border: 2px solid rgba(127, 141, 154, 1);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  z-index: 999;
}

.lblSenha {
  color: rgba(255, 255, 255, 1);
  font-family: Roboto;
  font-weight: Bold;
  font-size: 0.9vw;
}

.inpSenha {
  background: rgba(255, 255, 255, 1);
  font-size: 1.1vw;
  border: 2px solid rgba(127, 141, 154, 1);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  overflow: hidden;
  z-index: 999;
}

.txtEsqueci {
  color: rgba(255, 255, 255, 1);
  font-family: Roboto;
  font-size: 0.75vw;
  text-align: left;
}

.boxEntrar {
  width: 100%;
  text-align: right;
  z-index: 998;
}

.btnEntrar {
  width: 150px;
  z-index: 999;
}

.lblNaoPossui {
  color: rgba(255, 255, 255, 1);
  font-family: Roboto;
  font-weight: Bold;
  font-size: 0.9vw;
  text-align: left;
  display: block;
  width: 100%;
  bottom: 1vh;
  /* left: 0.3vw; */
  position: relative;
}
</style>
