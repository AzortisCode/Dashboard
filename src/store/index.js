import Vue from 'vue'
import Vuex from '@/store/index'
import account from 'modules/account'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        account
    }
})



