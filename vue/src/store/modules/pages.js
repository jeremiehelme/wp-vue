import PageService from '@/services/PageService.js'

export const namespaced = true

export const state = {
  pages: [],
}


export const mutations = {
  ADD(state, page) {
    state.pages.push(page)
  }
}

export const actions = {
  async getPage({ commit }, id) {
    
    return PageService.getPage(id)
      .then((response) => {
        if (response.status == 200) {
          commit('ADD', response.data)
          return response.data
        }
        else {
          const notification = {
            type: 'error',
            message: 'Error getting page'
          }
          this.dispatch('notifications/add', notification, { root: true })
          return
        }
      })
      .catch((error) => {
        const notification = {
          type: 'error',
          message: 'Getting page failed ' + error.message
        }
        this.dispatch('notifications/add', notification, { root: true })
        return
      })
  }
}