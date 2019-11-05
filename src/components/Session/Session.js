import React from 'react';
import ApiContext from '../../ApiContext';
import ApiService from '../../services/api-service';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Session.css';


export default class Session extends React.Component {
  static contextType = ApiContext;
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
    .then(() => {
      this.context.deleteSessionContext(sessionId)
      this.props.history.push('/sessions')
    });
    
  }

  handleSubmitChanges = (e, sessionId, newSessionValues) => {
    e.preventDefault();
    ApiService.updateSession(sessionId, newSessionValues)
  }

  renderSessionView = () => {
    let sessionView = '';
    let session = this.context.currentSession;
    if (!session) {
      sessionView = <p>Loading...</p>
    }

    else {
      sessionView = (
        <div className='sessionDetails'>
        <h3>{moment(session.date_played).format('MMMM Do YYYY, h:mm:ss a')}</h3>
        <ul className='gameTypes'>
        <li>{session.game_type_one}</li>
        <li>{session.game_type_two}</li>
        </ul>
        <p>${session.small_blind} / ${session.big_blind}</p>
        <p>Time played: {session.session_length} hours</p>
        <ul className='cashMoney'>
          <li>Buy in: ${session.buy_in}</li>
          {
            (session.cashed_out - session.buy_in > 0) ? 
            <li className='winning'>+${session.cashed_out-session.buy_in}</li> : 
            <li className='losing'>-${Math.abs(session.cashed_out-session.buy_in)}</li>
          }
          <li>Cashed out: ${session.cashed_out}</li>
        </ul>
        <p id='notes'>{session.notes}</p>
        <Link to={`/sessions/${this.props.match.params.session_id}/edit`}>
        <button>Edit</button>
        </Link>
        <button onClick={() => this.handleDeleteSession(session.id)}>Delete</button>
        </div>
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