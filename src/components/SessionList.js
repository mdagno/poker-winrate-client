import React from 'react';
import './SessionList.css';
import ApiContext from '../ApiContext'
import ApiService from '../services/api-service'
import { Link } from 'react-router-dom';

export default class SessionList extends React.Component {
  static contextType = ApiContext;

  renderSessions = () => {
    const {sessionsList = [] } = this.context;
    return sessionsList.map((session, index) => {
      return (
        <li key={index}>
          <Link to={`/sessions/${session.id}`}>
          <h3>{session.date_played}</h3>
          </Link>
          <p>Big Blind: ${session.big_blind}</p>
          <p>Buy-in: ${session.buy_in}</p>
          <p>Cashed out: ${session.cashed_out}</p>
        </li>
      )
    })
  }

  render(){
    return(
      <div className='sessionList'>
      <h2>Sessions</h2>
      <select>
        <option value=''>Filter</option>
      </select>
      <ul className='sessionList-list'>
        {this.renderSessions()}
      </ul>
      </div>
    )
  }
}