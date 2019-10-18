import React from 'react';
import ApiContext from '../ApiContext'
import ApiService from '../services/api-service';
import EditSession from './EditSession'
import './Session.css'


export default class Session extends React.Component {
  static contextType = ApiContext;

  state = {
    isEditing: false,
  }
  static defaultProps = {
    match: { params: {} }
  }

  componentDidMount() {
    ApiService.getSessionById(this.props.match.params.session_id)
    .then(session => this.context.setSession(session))
  }

  componentWillUnmount(){
    this.context.clearSession();
  }

  handleDeleteSession = (sessionId) => {
    ApiService.deleteSession(sessionId)
    this.context.deleteSessionContext(sessionId);
    this.props.history.push('/sessions')
  }

  handleEditSession = () => {
    this.setState({
      isEditing: !this.state.isEditing 
    })
  }

  handleSubmitChanges = (e, sessionId, newSessionValues) => {
    e.preventDefault();
    ApiService.updateSession(sessionId, newSessionValues)
  }

  renderSessionView = () => {
    let sessionView = ''
    let session = this.context.currentSession;
   
    if (!session) {
      sessionView = <p>Loading...</p>
    }

    else if (this.state.isEditing === false){
      sessionView = (
        <div className='sessionDetails'>
        <h3>{session.date_played}</h3>
        <ul className='gameTypes'>
          <li>{session.game_type_one}</li>
          <li>{session.game_type_two}</li>
        </ul>
        <p>${session.small_blind} / ${session.big_blind}</p>
        <p>Time played: {session.session_length} hours</p>
        <ul className='cashMoney'>
          <li>Buy in: ${session.buy_in}</li>
          <li>Cashed out: ${session.cashed_out}</li>
        </ul>
        <p id='notes'>{session.notes}</p>
        <button onClick={() => this.handleEditSession()}>Edit</button>
        <button onClick={() => this.handleDeleteSession(session.id)}>Delete</button>
        </div>
      )
    }
    else if(this.state.isEditing === true) {
      sessionView = (
        <EditSession params={this.props.match.params} />
      )
    }
      return sessionView
    }
  
  render() {
    return(
      <div className='detailedView'>
        {this.renderSessionView()}
      </div>
    )
  }
}