Vue.createApp({
  data() {
    return {
      teste: "Teste"
    }
  },
  computed: {
    // um getter computado
    publishedBooksMessage() {
      // `this` aponta para a instância vm
      return this.teste != "" ? 'Yes' : 'No'
    }
  }
}).mount('#container')