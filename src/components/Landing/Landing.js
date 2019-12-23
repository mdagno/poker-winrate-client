import React from 'react';
import './Landing.css';
import Login from '../Login/Login';
import UserContext from '../../ApiContext';

export default class Landing extends React.Component {
  static contextType = UserContext; 
  
  render(){
    return(
      <div className='landing'>
      <h2 className='landingTitle'>Welcome to Poker WinRate!</h2>
      <p>Poker WinRate is a useful tool to determine your long term win rate in your poker games.  To improve your win rate overtime, it is critical to track your sessions over time to analyze your pattern of play over a long period of time to determine if your edge against other players is improving.</p>
      </div>
    )
  }
}