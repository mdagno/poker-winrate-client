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
  }
}

export default ApiService