import React from 'react';
import ApiContext from '../../ApiContext';
import './HomePage.css';

export default class HomePage extends React.Component{
  static contextType = ApiContext;

  calculateCashGameProfits = () => {
    let totalEarnings = 0;
    let cashWinnings = this.context.sessionsList.filter(session => session.game_type_two === 'Cash')
    cashWinnings.forEach(session => {
      let sessionEarnings = session.cashed_out - session.buy_in;
      totalEarnings = totalEarnings + sessionEarnings;
    })

    return totalEarnings;
  }

  calculateTournamentProfits = () => {
    let totalEarnings = 0;
    let tournamentWinnings = this.context.sessionsList.filter(session => session.game_type_two === 'Tournament')
    tournamentWinnings.forEach(session => {
      let sessionEarnings = session.cashed_out - session.buy_in;
      totalEarnings = totalEarnings + sessionEarnings;
    })

    return totalEarnings;
  }

  calculateWinRate = () => {
    let cashGames = this.context.sessionsList.filter(session => session.game_type_two === 'Cash')
    let sessionWinRates = cashGames.map(session => {
      return (session.cashed_out - session.buy_in) / session.session_length / session.big_blind
    })
    let sessionWinRatesSum = sessionWinRates.reduce((a, b) => (a + b), 0)
    return (sessionWinRatesSum / sessionWinRates.length).toFixed(2)
  }

  calculateMode = (arr) => {
    let mf = 1;
    let count = 0;
    let mode;

    for (let i = 0; i < arr.length; i++) {
      for (var j = i; j < arr.length; j++){
        if (arr[i] == arr[j]){
          count++;
          if(mf < count){
            mf = count;
            mode = arr[i]
          }
        }
      }
      count = 0;
    }
    return mode;
  }

  // constructBlindValueKey = (session) => {
  //   return `${session.small_blind}  ${session.big_blind}`;
  // }

  // deconstructBlindValueKey = (string) => {
  //   return string.split(' ');
  // }

  // calculateMostPlayedStake = () => {
  //   let trackerObj = {};
  //   let maxKey;
  //   let maxCount;
    
  //   this.context.sessionsList.forEach(session => {
  //      const key = this.constructBlindValueKey(session)
  //      let count = 1;
  //      if(!trackerObj[key]){
  //       trackerObj[key] = count;
  //       maxKey = key;
  //       maxCount = count;
  //      }
  //      else{
  //        trackerObj[key]++;
  //        count = trackerObj[key];
  //        if(count > maxKey[key]){
  //         maxKey = key;
  //         maxCount = count;
  //        }
  //      }
  //   })



  //   return maxKey;
  // }


 

  // calculateMostPlayedStake = () => {
  //   let sessionsList = this.context.sessionsList;
  //   let sbValues = sessionsList.map(session => {
  //     return session.small_blind
  //   })
  //   let bbValues = sessionsList.map(session => {
  //     return session.big_blind
  //   })
    
  //   return [this.calculateMode(sbValues), this.calculateMode(bbValues)]
  // }
  
  render(){
    return(
      <div className='homePage'>
        <h2>Your Summary</h2>
        <h3>${this.calculateCashGameProfits() + this.calculateTournamentProfits()} Total Profit</h3>
        <h3>${this.calculateCashGameProfits()} Cash Game Winnings</h3>
        <h3>${this.calculateTournamentProfits()} Tournament Winnings</h3>
        {/* <h3>Most Played Stake: ${this.calculateMostPlayedStake()[0]} / ${this.calculateMostPlayedStake()[1]}</h3> */}
        <h3>{this.context.sessionsList.length} Sessions Played</h3>
        <h3>{this.calculateWinRate()} BB/hr</h3>
      </div>
  )
  }
}