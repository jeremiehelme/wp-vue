import axios from 'axios'
import DefaultValues from '@/constants/index.js'

const api = axios.create({
  baseURL: DefaultValues.BASE_URL+'/wp/v2/pages',
  headers: {
    Accept: 'application/json'
  }
})

export default {
  getPage(id) {
    let headers = {
      Accept: 'application/json',
    }
    
    return api.get('/'+id, {}, { headers })
  }
}
