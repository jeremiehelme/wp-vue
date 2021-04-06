import Vuex from 'vuex'
import * as user from '@/store/modules/user.js'
import * as pages from '@/store/modules/pages.js'
import * as notifications from '@/store/modules/notifications.js'

export default new Vuex.Store({
  state: {
  },
  modules: {
    user,
    pages,
    notifications
  }
})
