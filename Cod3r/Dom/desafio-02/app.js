new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        mostraAlerta() {
            alert('Botao clicado!')
        },
        salvarDados(event) {
            this.valor = event.target.value
            console.log(this.valor)
        }
    }
})