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
    console.log('Filter executing...')
  }

  componentDidMount() {
    ApiService.getSessions()
    .then(this.context.setSessionsList)
  }

  renderSessions = () => {
    const {sessionsList = [] } = this.context;
    let renderedSessions = sessionsList;
    let sortBy = this.state.sortBy;
    
    if(sortBy === 'Online') {
      renderedSessions = renderedSessions.filter(session => session.game_type_one === 'Online')
    }
    else if(sortBy === 'Live') {
      renderedSessions = renderedSessions.filter(session => session.game_type_one === 'Live')
    }
    else if(sortBy === 'Stake'){
      renderedSessions = renderedSessions.sort((a,b) => b.big_blind - a.big_blind)
    }
    else if(sortBy === 'Date'){
      renderedSessions = renderedSessions.sort((a,b) =>  b.date_played - a.date_played)
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
            <li>BB: ${session.big_blind}</li>
            {
              (session.cashed_out > session.buy_in) ? <li className='winning'>+${session.cashed_out-session.buy_in}</li> : <li className='losing'>-${Math.abs(session.cashed_out-session.buy_in)}</li>
            }
            <li>Buy-in: ${session.buy_in}</li>
          </ul>
          </Link>
        </li>
      )
    })
  }

  render(){
    console.log(this.state.sortBy)
    return(
      <div className='sessionList'>
      <h2>Your Sessions</h2>
      <label htmlFor='filterSessions'>Filter By: </label>
      <select onChange={e => this.handleFilterChange(e.target.value)}>
        <option value='Date'>Most Recent</option>
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