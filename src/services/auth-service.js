import TokenService from './token-service'
import config from '../config'

const AuthService = {
    newUser(user) {
      return fetch(`${config.API_ENDPOINT}/user`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    postLogin(credentials) {
      return fetch(`${config.API_ENDPOINT}/auth/token`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(err => Promise.reject(err))
            : res.json()
        )
    },
    refreshToken() {
      return fetch(`${config.API_ENDPOINT}/auth/token`, {
        method: 'PUT',
        headers: {
          'authorization': `Bearer ${TokenService.getAuthToken()}`,
        },
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
}

export default AuthService;