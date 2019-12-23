import React from 'react';
import './SessionList.css';
import ApiContext from '../../ApiContext'
import ApiService from '../../services/api-service'
import { Link } from 'react-router-dom';
import moment from 'moment';

export default class SessionList extends React.Component {
  state = {
    sortBy: 'Date'
  }
  static contextType = ApiContext;

  handleFilterChange = value => {
    this.setState({
      sortBy: value
    })
  }

  componentDidMount() {
    ApiService.getSessions()
    .then(res => {
      console.log(res)
      this.context.setSessionsList(res)
    })
  }

  renderSessions = () => {
    const {sessionsList = [] } = this.context;
    let renderedSessions = sessionsList;
    let sortBy = this.state.sortBy;
    
    if(sortBy === 'Cash') {
      renderedSessions = renderedSessions.filter(session => session.game_type_two === 'Cash')
    }
    else if(sortBy === 'Tournament') {
      renderedSessions = renderedSessions.filter(session => session.game_type_two === 'Tournament')
    }
    else if(sortBy === 'Online') {
      renderedSessions = renderedSessions.filter(session => session.game_type_one === 'Online')
    }
    else if(sortBy === 'Live') {
      renderedSessions = renderedSessions.filter(session => session.game_type_one === 'Live')
    }
    else if(sortBy === 'Stake'){
      renderedSessions = renderedSessions.sort((a,b) => b.big_blind - a.big_blind)
    }
    else if(sortBy === 'Date'){
      renderedSessions = renderedSessions.sort((a,b) =>  a.date_played - b.date_played)
    }
    else if(sortBy === 'Time Played'){
      renderedSessions = renderedSessions.sort((a,b) => b.session_length - a.session_length)
    }

    return renderedSessions.map((session, index) => {
      return (
        <li key={index}>
          <Link to={`/sessions/${session.id}`}>
          <h3>{moment(session.date_played).format('MMMM Do YYYY, h:mm:ss a')}</h3>
          <ul className='sessionInfo'>
            {
              (session.game_type_two === 'Cash') ? <li id='bigBlind'>BB: ${session.big_blind}</li> : <li id='tournament'>Tournament</li>
            }
            {
              (session.cashed_out - session.buy_in > 0) ? <li className='winning'>+${session.cashed_out-session.buy_in}</li> : <li className='losing'>-${Math.abs(session.cashed_out-session.buy_in)}</li>
            }
            <li id='buyIn'>Buy-in: ${session.buy_in}</li>
          </ul>
          </Link>
        </li>
      )
    })
  }

  render(){
    console.log(this.context.sessionsList)
    return(
      <div className='sessionList'>
      <h2>Your Sessions</h2>
      <label htmlFor='filterSessions'>Filter By: </label>
      <select onChange={e => this.handleFilterChange(e.target.value)}>
        <option value='Date'>Most Recent</option>
        <option value='Cash'>Cash Games</option>
        <option value='Tournament'>Tournament</option>
        <option value='Live'>Live</option>
        <option value='Online'>Online</option>
        <option value='Stake'>Stake</option>
        <option value='Time played'>Time played</option>
      </select>
      <ul className='sessionList-list'>
        {this.renderSessions()}
      </ul>
      </div>
    )
  }
}