import axios from 'axios'
import DefaultValues from '@/constants/index.js'

const api = axios.create({
  baseURL: DefaultValues.HOST_URL,
  headers: {
    Accept: 'application/json'
  }
})

export default {
  logUser(credentials) {
    return api.post('/admin/wp-json/jwt-auth/v1/token', credentials)
  },
  checkUser(user) {
    return api.get('/admin/wp-json/guideachat/get_infos', {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${user.token}`
      }
    })
  },
  getUser() {
    return api.get('/admin/wp-json/guideachat/get_infos')
  },
  async sendActions(actions) {
    let user = JSON.parse(localStorage.getItem('user'))
    let headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${user.token}`,
    }
    return api.post('/admin/wp-json/guideachat/action_tracking/', {
      data: actions
    }, { headers })
  },
  async acceptCGU() {
    let user = JSON.parse(localStorage.getItem('user'))
    let headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${user.token}`,
    }
    return api.post('/admin/wp-json/guideachat/update_cgu_status/', {
      data: {}
    }, { headers })
  },
  forgotPassword(username) {
    
    var bodyFormData = new FormData();
    bodyFormData.append('user_login', username);
    bodyFormData.append('redirect_to', '');
    bodyFormData.append('wp-submit', 'Générer un mot de passe.');

    return axios({
      method: "post",
      url: DefaultValues.HOST_URL + "/admin/wp-login.php?action=lostpassword",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
  },
  updatePassword(new_password, old_password) {
    let user = JSON.parse(localStorage.getItem('user'))
    let headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${user.token}`,
    }
    return api.post('/admin/wp-json/guideachat/update_user_password', {
      new_password: new_password,
      old_password: old_password
    }, { headers })

  }
}
