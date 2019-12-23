import React from 'react';
import './Landing.css';
import Login from '../Login/Login';
import UserContext from '../../ApiContext';

export default class Landing extends React.Component {
  static contextType = UserContext; 
  
  render(){
    return(
      <div>
      <h2 className='landingTitle'>Welcome to Poker WinRate!</h2>
      <Login />
      </div>
    )
  }
}