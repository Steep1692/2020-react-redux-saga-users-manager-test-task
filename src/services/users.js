import {createApi} from './api'

const api = createApi('https://randomuser.me/')

const users = {
  /**
   * Gets users from api
   * @param{number} page
   * @param{number} count
   * @param{string} seed
   * @return {Promise<T>}
   */
  get: (page, count, seed) => {
    if (seed) {
      seed = `&seed=${seed}`
    }

    return api.get(`api/?page=${page}&results=${count}&inc=id,name,email,picture,gender,email,dob,phone,location${seed}`)
  },
}

export default users