import React from 'react';
import TokenService from './services/token-service';
import AuthService from './services/auth-service';

const ApiContext = React.createContext({
  user: {},
  sessionsList: [],
  currentSession: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setSessionsList: () => {},
  setSession: () => {},
  clearSession: () => {},
  addSessionContext: () => {},
  deleteSessionContext: () => {},
  updateSessionContext: () => {},
  setUser: () => {},
  processLogin: () => {},
  processLogout: () => {},
});

export default ApiContext;

export class ApiContextProvider extends React.Component {
  constructor(props) {
    super(props)
    const state = { user: {}, sessionsList: [], session: [], error: null }

    const jwtPayload = TokenService.parseAuthToken()

    if (jwtPayload)
      state.user = {
        id: jwtPayload.user_id,
        name: jwtPayload.name,
        username: jwtPayload.sub,
      }

    this.state = state;
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setSessionsList = (updatedList) => {
    this.setState({ sessionsList: updatedList })
  }

  addSessionContext = session => {
    this.setState({
      sessionsList: [...this.state.sessionsList, session]
    })
  }

  deleteSessionContext = sessionId => {
    this.setState({
      sessionsList: this.state.sessionsList.filter(session => session.id !== sessionId)
    })
  }

  updateSessionContext = (updatedSession) => {
    this.setState({
      sessionsList: this.state.sessionsList.map(session => 
        (session.id !== updatedSession.id) ? session: updatedSession
     )
    })
  }

  setSession = session => {
    this.setState({currentSession: session})
  }

  clearSession = () => {
    this.setState({currentSession: []})
  }

  setUser = user => {
    this.setState({ user })
  }

  processLogin = authToken => {
    TokenService.saveAuthToken(authToken)
    const jwtPayload = TokenService.parseAuthToken()
    this.setUser({
      id: jwtPayload.user_id,
      username: jwtPayload.sub,
    })
  }

  processLogout = () => {
    TokenService.clearAuthToken()
    this.setUser({})
  }

  render() {
    const value = {
      user: this.state.user,
      sessionsList: this.state.sessionsList,
      currentSession: this.state.currentSession,
      setSessionsList: this.setSessionsList,
      setSession: this.setSession,
      clearSession: this.clearSession,
      addSessionContext: this.addSessionContext,
      deleteSessionContext: this.deleteSessionContext,
      updateSessionContext: this.updateSessionContext,
      error: this.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout,
    }

    return (
      <ApiContext.Provider value={value}>
        {this.props.children}
      </ApiContext.Provider>
    )
  }
}