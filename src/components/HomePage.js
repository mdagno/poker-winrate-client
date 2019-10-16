import React from 'react';
import ApiContext from '../ApiContext';
import './HomePage.css';

export default class HomePage extends React.Component{
  static contextType = ApiContext;

  calculateTotalEarnings = () => {
    let totalEarnings = 0;
    this.context.sessionsList.forEach(session => {
      let sessionEarnings = session.cashed_out - session.buy_in;
      totalEarnings = totalEarnings + sessionEarnings;
      console.log(totalEarnings);
    })
    return totalEarnings;
  }

  computeTotalSessions = () => {
    return this.context.sessionsList.length;
  }
  
  
  render(){

    console.log(this.calculateTotalEarnings())
  return(
    <div className='homePage'>
      <h3>Net Earnings: ${this.calculateTotalEarnings()}</h3>
      <h3>Most Played Stake: $5/$10</h3>
      <h3>Total Sessions: {this.computeTotalSessions()}</h3>
    </div>
  )
  }
}