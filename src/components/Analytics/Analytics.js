import React from 'react'
import './Analytics.css'
import { VictoryLine } from 'victory';
import { VictoryChart } from 'victory';
import { VictoryLabel } from 'victory';
import {VictoryTheme} from 'victory';
import ApiContext from '../../ApiContext';

export default class Analytics extends React.Component {
state = {
  filter: 'Profits',
}
static contextType = ApiContext;

  generateData = () => {
    const sessionsList = this.context.sessionsList;
    let filter = this.state.filter;
    let renderedData = [];
    let accTotal = 0;

    if (filter === 'Profits'){
      sessionsList.forEach((session, index) => {
        let sessionProfit = session.cashed_out - session.buy_in;
        accTotal = accTotal + sessionProfit;
        renderedData.push(accTotal);
      })
      return renderedData;
    }

    else if(filter === 'Online Profits'){
      let filteredData = sessionsList.filter(session => session.game_type_one === 'Online')
      filteredData.forEach((session, index) => {
        let sessionProfit = session.cashed_out - session.buy_in;
        accTotal = accTotal + sessionProfit;
        renderedData.push(accTotal);
      })
      return renderedData
    }

    else if(filter === 'Live Profits'){
      let filteredData = sessionsList.filter(session => session.game_type_one === 'Live')
      filteredData.map((session, index) => {
        let sessionProfit = session.cashed_out - session.buy_in;
        accTotal = accTotal + sessionProfit;
        renderedData.push(accTotal);
      })
      return renderedData;
    }

    else if(filter === 'BB/hour'){
      let totalWinRate = 0;
      sessionsList.forEach((session, index) => {
        let sessionWinRate = (session.cashed_out - session.buy_in) / session.big_blind / session.session_length;
        totalWinRate = (totalWinRate + sessionWinRate) / (index + 1);
        renderedData.push(totalWinRate);
      })
      return renderedData;
    }
  }

  handleFilterChange = filterValue => {
    this.setState({
      filter: filterValue,
    })
  }

  render(){
    return(
      <div className="analysis">
        <select className="filterAnalytics" onChange={e => this.handleFilterChange(e.target.value)}>
          <option value="Profits">Total Profits</option>
          <option value="Online Profits">Online Profits</option>
          <option value="Live Profits">Live Profits</option>
          <option value="BB/hour">BB/hour</option>
        </select>
        <VictoryChart  
          height={500} 
          width={450} 
          padding={70}
          animate={
              {
                duration: 1000,
                onLoad: { duration: 1500 }
              }
            } 
          theme={VictoryTheme.material}>
          <VictoryLine 
            interpolation='linear'
            data={this.generateData()} 
            style={
              {
                data: {
                  stroke: '#009BB0', 
                  strokeWidth: 3
                },
                parent: {border: "1px solid #ccc"},
            }}
          />
          <VictoryLabel 
          text='Sessions'
          x={200}
          y={470}
          />
          <VictoryLabel 
          text={this.state.filter}
          x={25}
          y={30}
          />
        </VictoryChart>
      </div>
    )
  }
}