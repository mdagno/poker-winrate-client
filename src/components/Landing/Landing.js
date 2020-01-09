import React from 'react';
import './Landing.css';
import UserContext from '../../ApiContext';
import imageOne from '../../app-screenshots/poker-winrate-one.PNG';
import imageTwo from '../../app-screenshots/poker-winrate-two.PNG';
import imageThree from '../../app-screenshots/poker-winrate-three.PNG';
import imageFour from '../../app-screenshots/poker-winrate-four.PNG';

export default class Landing extends React.Component {
  static contextType = UserContext; 
  
  render(){
    return(
      <div className='landing'>
      <h2 className='landingTitle'>Welcome to Poker WinRate!</h2>
      <p>Poker WinRate is a useful tool to determine your long term win rate in your poker games.  To improve your win rate overtime, it is critical to track your sessions over time to analyze your pattern of play over a long period of time to determine if your edge against other players is improving.</p>
      <p>
        1. Begin by creating an account and logging in.
      </p>
      <p>2. Add a completed sessions by clicking the "Add a Session" tab to access a for and fill in the required information.</p>
      <img src={imageOne} alt="Form to input session details" className="square-image"/>
      <p>3. Once added, past sessions can be accessed by clicking the "Your Sessions" tab.  A filter is available to sort though sessions by different game types.</p>
      <img src={imageThree} alt="All sessions rendered as indivual session cards" className="rec-image"/>
      <p>4. A detailed view of past sessions is available by clicking on one of the session cards.  In this view, a past session can be updated by clicking Edit.</p>
      <img src={imageFour} alt="Detailed view of a past session" className="rec-image"/>
      <p>5. A data visualization of all past sessions can be viewed by clicking the "Analytics" tab.</p>
      <img src={imageTwo} alt="Example graph of compiled session data" className="rec-image"/>
      </div>
    )
  }
}