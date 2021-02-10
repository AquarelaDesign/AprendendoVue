import Vue from 'vue';
import Vuex from 'vuex';

import { global } from './global.module';
import { alert } from './alert.module';
import { account } from './account.module';
import { users } from './users.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    global,
    alert,
    account,
    users
  }
});
