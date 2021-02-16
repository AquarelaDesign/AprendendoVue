<template>
  <div>
    <b-card no-body>
      <b-tabs v-model="tabIndex" card>
        <b-tab title="Tab 1" :title-link-class="linkClass(0)">
          <div>
            <h1>Oi {{ user.nmUsuario !== null ? user.nmUsuario : "" }}!</h1>
            <pre>{{ user }}</pre>
            <p>Você está conectado!</p>
            <p>
              <router-link to="/login">Sair</router-link>
            </p>
          </div>
        </b-tab>
        <b-tab title="Tab 2" :title-link-class="linkClass(1)">Tab contents 2</b-tab>
        <b-tab title="Tab 3" :title-link-class="linkClass(2)">Tab contents 3</b-tab>
      </b-tabs>
    </b-card>
  </div>
  
  
</template>

<script>
// import { mapState, mapActions } from "vuex";
// import cookies from 'vue-cookies'

// console.log("data", $cookies.get("AppRetornoFacil_UserData"));

export default {
  data() {
    return {
      user: this.$cookies.get("AppRetornoFacil_UserData") !== null ? this.$cookies.get("AppRetornoFacil_UserData") : {} ,
      // user: {},
      tabIndex: 0,
      submitted: false,
    };
  },
  computed: {
    // user: $cookies.get("AppRetornoFacil_UserData"),
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
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ['bg-primary', 'text-light']
      } else {
        return ['bg-light', 'text-info']
      }
    }
  },
};
</script>