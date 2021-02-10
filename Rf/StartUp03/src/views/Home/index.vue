<template>
  <div id="container">
    <h1>Home Page</h1>
    <p>{{ server }}</p>
    <p>{{ teste() }}</p>
  </div>
</template>

<script>

const watchExampleVM = Vue.createApp({
  data() {
    return {
      teste: "Teste"
    }
  },
  computed: {
    // um getter computado
    teste : {
      get() {
        return this.teste != "" ? 'Yes' : 'No'
      }
    }
  }
}).mount('#container')  

</script>