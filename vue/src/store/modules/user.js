import UserService from '@/services/UserService.js'
import DefaultValues from '@/constants/index.js'


export const namespaced = true

export const state = {
  user: null,
  actions: DefaultValues.TRACKING_ACTIONS
}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
    localStorage.setItem('user', JSON.stringify(state.user))
  },
  UNSET_USER() {
    localStorage.removeItem('user')
    state.user = null
  },
  SET_ACTION(state, action) {
    state.actions.hasActions = true
    state.actions[action.action].push(action.supplier_id)
  },
  CLEAR_ACTIONS(state) {
    state.actions = {
      site: [],
      phone: [],
      mail: [],
      view: [],
      file: [],
      hasActions: false
    }
  },
  SET_CGU(state, accepted) {
    localStorage.setItem('cgu', accepted)
  },
}

export const actions = {
  async logUser({ commit, dispatch }, credentials) {

    let userResponse = await UserService.logUser(credentials).catch((error) => {
      const notification = {
        type: 'error',
        message: error.message
      }
      dispatch('notifications/add', notification, { root: true })
      return false
    })

    if (!userResponse.data.success) {
      const notification = {
        type: 'error',
        message: userResponse.data.message
      }
      dispatch('notifications/add', notification, { root: true })
      return false

    }


    let checkResponse = await UserService.checkUser(userResponse.data.data).catch((error) => {
      const notification = {
        type: 'error',
        message: error.message
      }
      dispatch('notifications/add', notification, { root: true })
      return false
    })

    if (checkResponse.data.user.roles.includes(DefaultValues.EXCLUDED_ROLES)) {

      const notification = {
        type: 'error',
        message: 'Erreur de login : vous n\'êtes pas autorisé à accéder à la recherche'
      }
      dispatch('notifications/add', notification, { root: true })
      commit('UNSET_USER')
      location.reload()
      return false
    }

    userResponse.data.data.acceptation_cgu = checkResponse.data.acceptation_cgu == 1
    commit('SET_USER', userResponse.data.data)
    const notification = {
      type: 'success',
      message: 'Login réussi'
    }
    dispatch('notifications/add', notification, { root: true })

    return true


  },
  async autoLogUser({ commit, dispatch }, user) {
    let response = await UserService.checkUser(user).catch((error) => {
      console.log('error :', error)
      commit('UNSET_USER')
      return false
    })

    if (response.status != 200) {
      console.log('error : status ', response.status)
      commit('UNSET_USER')
      location.reload()
    }

    if (response.data.success == false && response.data.statusCode == 403) {
      commit('UNSET_USER')
      location.reload()
      return false
    }

    if (response.data.user.roles.includes(DefaultValues.EXCLUDED_ROLES)) {

      const notification = {
        type: 'error',
        message: 'Erreur de login : vous n\'êtes pas autorisé à accéder à la recherche'
      }
      dispatch('notifications/add', notification, { root: true })
      commit('UNSET_USER')
      location.reload()
      return false
    }

    user.acceptation_cgu = response.data.acceptation_cgu == 1
    commit('SET_USER', user)
    return true
  },
  async forgotPassword({ dispatch }, username) {

    if (username == '') {
      const notification = {
        type: 'error',
        message: "Veuillez indiquer un identifiant ou une adresse email",
      }
      dispatch('notifications/add', notification, { root: true })
      return
    }


    let response = await UserService.forgotPassword(username).catch((error) => {
      const notification = {
        type: 'error',
        message: error.message
      }
      dispatch('notifications/add', notification, { root: true })
      return false
    })


    if (response.status != 200) {
      const notification = {
        type: 'error',
        message: response.statusText
      }
      dispatch('notifications/add', notification, { root: true })
      return false

    }

    const notification = {
      type: 'success',
      message: 'Réinitialisation réussie'
    }
    dispatch('notifications/add', notification, { root: true })

    return true
  },
  logoutUser({ commit }) {
    commit('UNSET_USER')
    location.reload()
    return
  },
}

export const getters = {
  token: user => {
    return user.user.token
  }
}

