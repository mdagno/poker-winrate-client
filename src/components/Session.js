import React from 'react';
import ApiContext from '../ApiContext'
import ApiService from '../services/api-service';
import './Session.css'


export default class Session extends React.Component {
  
  static defaultProps = {
    match: { params: {} }
  }

  static contextType = ApiContext;

  componentDidMount() {
    ApiService.getSessionById(this.props.match.params.sessionid)
    .then(session => this.context.setSession(session))
  }

  componentWillUnmount(){
    this.context.clearSession();
  }

  renderSessionView = session => {
      return (
        <div className='sessionDetails'>
        <h3>{session.date_played}</h3>
        <ul className='gameTypes'>
          <li>{session.game_type_one}</li>
          <li>{session.game_type_two}</li>
        </ul>
        <p>Big Blind: ${session.big_blind}</p>
        <p>Time played: {session.session_length} hours</p>
        <ul className='cashMoney'>
          <li>Buy in: ${session.buy_in}</li>
          <li>Cashed out: ${session.cashed_out}</li>
        </ul>
        <p id='notes'>{session.notes}</p>
        </div>
      )
    }
  
  render() {
    let currentSession = this.context.currentSession;
    let sessionView;
    if (!currentSession) {
      sessionView = <p>Loading...</p>
    }
    else {
      sessionView = this.renderSessionView(currentSession)
    }

    return(
      <div className='detailedView'>
        {sessionView}
      </div>
    )
  }
}