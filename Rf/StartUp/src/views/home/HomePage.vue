<template>
  <div>
    <h1>Oi {{ user.nmUsuario }}!</h1>
    <pre>{{ user }}</pre>
    <p>Você está conectado!</p>
    <p>
      <router-link to="/login">Sair</router-link>
    </p>
  </div>
</template>

<script>
// import { mapState, mapActions } from "vuex";
// import cookies from

console.log("data", $cookies.get("AppRetornoFacil_UserData"));

export default {
  data() {
    return {
      user: $cookies.get("AppRetornoFacil_UserData"),
      submitted: false,
    };
  },
  computed: {
    // ...mapState({
    //   account: (state) => state.account,
    //   users: (state) => state.users.all,
    // }),
  },
  created() {
    // this.getAllUsers();
  },
  methods: {
    // ...mapActions("users", {
    //   getAllUsers: "getAll",
    //   deleteUser: "delete",
    // }),
  },
};
</script>