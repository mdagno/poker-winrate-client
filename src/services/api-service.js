import config from '../config';
import TokenService from '../services/token-service';

const ApiService = {
  getSessions() {
  return fetch(`${config.API_ENDPOINT}/sessions`, {
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${TokenService.getAuthToken()}`,
    },
  })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
},
  getSessionById(sessionId){
  return fetch(`${config.API_ENDPOINT}/sessions/${sessionId}`, {
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${TokenService.getAuthToken()}`,
    },
  })
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
    
  },
  addSession(newSession) {
    return fetch(`${config.API_ENDPOINT}/sessions`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
      body: newSession
    })
    .then(res => {
			if (!res.ok)
				return res.json().then(e => Promise.reject(e))
      return res.json()
		})

		.catch(error => {
			alert(error.message)
		})
  },
  deleteSession(sessionId) {
    return fetch((`${config.API_ENDPOINT}/sessions/${sessionId}`),
    {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    }
    )
    // .then(res => {
    //   if (!res.ok)
    //     return res.json().then(e => Promise.reject(e))
    //   return res.json()
    // })
    // .catch(error => {
		// 	alert(error.message)
		// })
  },
  updateSession(sessionId, newSessionValues) {
    return fetch((`${config.API_ENDPOINT}/sessions/${sessionId}`),
    {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
      body: newSessionValues
    })
    .then(res => {
			if (!res.ok)
				return res.json().then(e => Promise.reject(e))
			return res.json()
		})
  }
}

export default ApiService