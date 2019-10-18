import React from 'react';

const ApiContext = React.createContext({
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
});

export default ApiContext;

export class ApiContextProvider extends React.Component {
  state = {
    sessionsList: [],
    session: [],
    error: null,
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

  // updateSessionContext = sessionId => {
  //   this.setState({
  //     sessionsList: 
  //   })
  // }

  setSession = session => {
    this.setState({currentSession: session})
  }

  clearSession = () => {
    this.setState({currentSession: []})
  }

  render() {
    const value = {
      sessionsList: this.state.sessionsList,
      currentSession: this.state.currentSession,
      setSessionsList: this.setSessionsList,
      setSession: this.setSession,
      clearSession: this.clearSession,
      addSessionContext: this.addSessionContext,
      deleteSessionContext: this.deleteSessionContext,
      error: this.error,
      setError: this.setError,
      clearError: this.clearError,
    }

    return (
      <ApiContext.Provider value={value}>
        {this.props.children}
      </ApiContext.Provider>
    )
  }
}