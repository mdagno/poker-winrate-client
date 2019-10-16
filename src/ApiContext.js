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
  addSession: () => {},
  deleteSession: () => {}
});

export default ApiContext;

export class ApiContextProvider extends React.Component {
  state = {
    sessionsList: [],
    thing: [],
    error: null,
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setSessionsList = (updatedList) => {
    this.setState({ sessionsList: updatedList })
  }

  addSession = session => {
    this.setState({
      sessionsList: [...this.state.sessionsList, session]
    })
  }

  setSession = session => {
    this.setState({currentSession: session})
  }

  clearSession = () => {
    this.setState({currentSession: [],})
  }

  render() {
    const value = {
      sessionsList: this.state.sessionsList,
      currentSession: this.state.currentSession,
      setSessionsList: this.setSessionsList,
      setSession: this.setSession,
      clearSession: this.clearSession,
      addSession: this.addSession,
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