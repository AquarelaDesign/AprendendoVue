
export default {
  props: {
    idCliente: {
      type: Number,
      default: 1,
    }, 
    dsLogin: {
      required: true,
      type: String,
    }, 
    hshIdentificacao: {
      type: String,
    }, 
    nmUsuario: {
      type: String,
    }, 
    dtNascimento: {
      type: Date,
    }, 
    nrTelefone: {
      type: String,
    }, 
    urlImgFoto: {
      type: String,
    }, 
    idPermissaoUsuario: {
      type: Number,
    }, 
    idModulo: {
      type: Number,
    }, 
    bnSenha: {
      type: String,
    }, 
    idSuspensaoAtual: {
      type: Number,
    }, 
    flAtivo: {
      type: Boolean,
      default: false,
    }, 
    flBloqueado: {
      type: Boolean,
      default: false,
    }, 
    flAdministrador: {
      type: Boolean,
      default: false,
    }, 
    flRefazCadastro: {
      type: Boolean,
      default: false,
    }, 
    flRefazSenha: {
      type: Boolean,
      default: false,
    }, 
    flUsuarioInterno: {
      type: Boolean,
      default: false,
    }
  }
}

export function Usuario (
  idCliente, 
  dsLogin, 
  hshIdentificacao, 
  nmUsuario, 
  dtNascimento, 
  nrTelefone, 
  urlImgFoto, 
  idPermissaoUsuario, 
  idModulo, 
  bnSenha, 
  idSuspensaoAtual, 
  flAtivo, 
  flBloqueado, 
  flAdministrador, 
  flRefazCadastro, 
  flRefazSenha, 
  flUsuarioInterno ) {
  this.idCliente = idCliente
  this.dsLogin = dsLogin
  this.hshIdentificacao = hshIdentificacao
  this.nmUsuario = nmUsuario
  this.dtNascimento = dtNascimento
  this.nrTelefone = nrTelefone
  this.urlImgFoto = urlImgFoto
  this.idPermissaoUsuario = idPermissaoUsuario
  this.idModulo = idModulo
  this.bnSenha = bnSenha
  this.idSuspensaoAtual = idSuspensaoAtual
  this.flAtivo = flAtivo
  this.flBloqueado = flBloqueado
  this.flAdministrador = flAdministrador
  this.flRefazCadastro = flRefazCadastro
  this.flRefazSenha = flRefazSenha
  this.flUsuarioInterno = flUsuarioInterno
}