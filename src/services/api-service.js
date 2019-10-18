import config from '../config';

const ApiService = {
  getSessions() {
  return fetch(`${config.API_ENDPOINT}/sessions`, {
    headers: {
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
      headers: { 'content-type': 'application/json' },
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
      headers: { 'content-type': 'application/json' },
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
      headers: { 'content-type': 'application/json' },
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