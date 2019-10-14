import React from 'react';
import './SessionList.css'

export default class SessionList extends React.Component {

  sessions = this.props.Store.map((session, index) => {
    return (
      <li key={index}>
        <p>Big Blind: {session.stake}</p>
        <p>Buy-in: {session['Buy-in']}</p>
        <p>Cashed out: {session['Cashed-out']}</p>
      </li>
    )
  })

  render(){
    return(
      <div className='sessionList'>
      <h2>Sessions</h2>
      <select>
        <option value=''>Filter</option>
      </select>
      <ul className='sessionList-list'>
        {this.sessions}
      </ul>
      </div>
    )
  }
}