import { createStore } from 'vuex';

import { global } from './global.module';
import { alert } from './alert.module';

const store = createStore({
  modules: {
    global,
    alert,
  }
});

export default store;