<template>
  <div class="boxLoginE">

    <span class="txtLogin">Com o objetivo de facilitar o
      transporte do seu veículo, o aplicativo RETORNO FÁCIL traz para você todas as rotas disponíveis e, rapidamente
      indica os melhor valor e prazo para o seu frete.
    </span>

    <div class="boxRodape">
      <span class="lblContato">Contato:</span>
      <span class="txtContato">contato@arenatransautos.com.br<br>+55 (41) 3284-5252</span>
      <span class="lblInfo">Informações:</span>
      <span class="txtInfo">Software para gestão de transporte de veículos, para transportistas e</span>
    </div>

    <div class="boxLogin">
      <img class="imglogo" src="../../assets/logo_splash.png" alt="">
      <div class="boxForm">
        <span class="txtTitulo">Olá, Seja bem vindo!</span>

        <label for="dsLogin" class="lblEmail">Email</label>
        <input type="text" class="inpEmail" placeholder="exemplo@email.com.br"
          :keyup="username = this.$event.target.value">

        <label class="lblSenha" for="">Senha</label>
        <input class="inpSenha" type="password" placeholder="*********">

        <span class="txtEsqueci">Esqueci minha senha.</span>

        <div class="boxEntrar">
          <button type="button" class="btn btn-light btnEntrar">Entrar</button>
        </div>

      </div>

      <span class="lblNaoPossui">Não possui uma conta? Crie uma agora!</span>
    </div>

    <!-- <div class="v79_356">
      <div class="v79_357"></div>
      <span class="v79_358">entrar</span>
    </div> -->

    <!-- <span class="v79_354">Não possui uma conta? Crie uma agora!</span> -->

  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  }
}
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
  color: rgba(38,64,91,1);
  margin-top: 4%;
  margin-left: 5%;
  opacity: 1;
  text-align: left;
  font-size: 1.2vw;
  text-align: left;
  display: block;
  width: 40%;
}

.boxRodape {
  width: 65%;
  height: 15%;
  background: rgba(38,64,90,0.5);
  opacity: 1;
  position: absolute;
  bottom: 0px;
  left: 0px;
  overflow: hidden;
}

.lblContato {
  width: 30vw;
  color: rgba(255,255,255,1);
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
  color: rgba(255,255,255,1);
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
  color: rgba(255,255,255,1);
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
  color: rgba(255,255,255,1);
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
  background: linear-gradient(rgba(61,82,106,1), rgba(28,57,84,1));
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
}

.boxForm {
  width: 85%;
  height: 33vw;
  position: absolute;
  top: 15vw;
}

.txtTitulo {
  color: rgba(255,255,255,1);
  font-family: Arial;
  font-size: 1.5vw;
  text-align: left;
  display: block;
  width: 100%;
}

.lblEmail {
  color: rgba(255,255,255,1);
  font-family: Roboto;
  font-weight: Bold;
  font-size: 0.9vw;
  text-align: left;
  display: block;
  width: 100%;
  top: 4vh;
  left: 0.3vw;
  position: relative;
}

.inpEmail {
  width: 100%;
  height: 6vh;
  background: rgba(255,255,255,1);
  position: relative;
  top: 4.5vh;
  font-size: 1.1vw;
  border: 2px solid rgba(127,141,154,1);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  z-index: 999;
}

.lblSenha {
  color: rgba(255,255,255,1);
  font-family: Roboto;
  font-weight: Bold;
  font-size: 0.9vw;
  text-align: left;
  display: block;
  width: 100%;
  top: 6vh;
  left: 0.3vw;
  position: relative;
}

.inpSenha {
  width: 100%;
  height: 6vh;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: relative;
  top: 6.5vh;
  font-size: 1.1vw;
  border: 2px solid rgba(127,141,154,1);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  overflow: hidden;
  z-index: 999;
}

.txtEsqueci {
  color: rgba(255,255,255,1);
  font-family: Roboto;
  font-size: 0.75vw;
  text-align: left;
  display: block;
  width: 100%;
  top: 7vh;
  left: 0.3vw;
  position: relative;
}

.boxEntrar {
  width: 100%;
  position: relative;
  top: 9vh;
  right: 0.3vw;
  text-align: right;
  z-index: 998;
}

.btnEntrar {
  width: 150px;
  z-index: 999;
}

.lblNaoPossui {
  color: rgba(255,255,255,1);
  font-family: Roboto;
  font-weight: Bold;
  font-size: 0.9vw;
  text-align: left;
  display: block;
  width: 100%;
  bottom: 1vh;
  left: 0.3vw;
  position: relative;
}

</style>
