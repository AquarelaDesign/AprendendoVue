<template>
  <div>
    <h1>Oi {{ account.user.firstName }}!</h1>
    <p>Você está conectado com Vue + Vuex & JWT !!</p>
    <h3>Usuários do endpoint seguro da API:</h3>
    <em v-if="users.loading">Carregando usuários...</em>
    <span v-if="users.error" class="text-danger">ERRO: {{ users.error }}</span>
    <ul v-if="users.items">
      <li v-for="user in users.items" :key="user.id">
        {{ user.firstName + " " + user.lastName }}
        <span v-if="user.deleting"><em> - Excluindo...</em></span>
        <span v-else-if="user.deleteError" class="text-danger">
          - ERRO: {{ user.deleteError }}</span
        >
        <span v-else>
          -
          <a @click="deleteUser(user.id)" class="text-danger">Excluir</a></span
        >
      </li>
    </ul>
    <p>
      <router-link to="/login">Logout</router-link>
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      account: (state) => state.account,
      users: (state) => state.users.all,
    }),
  },
  created() {
    this.getAllUsers();
  },
  methods: {
    ...mapActions("users", {
      getAllUsers: "getAll",
      deleteUser: "delete",
    }),
  },
};
</script>