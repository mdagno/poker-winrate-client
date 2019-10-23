import React from 'react'
import './Analytics.css'
import { VictoryLine } from 'victory';
import { VictoryChart } from 'victory';
import { VictoryLabel } from 'victory';
import {VictoryTheme} from 'victory';
import ApiContext from '../ApiContext';

export default class Analytics extends React.Component {
state = {
  filter: 'Profits',
}
static contextType = ApiContext;

  generateData = () => {
    const sessionsList = this.context.sessionsList;
    let filter = this.state.filter;
    let renderedData;
    if (filter === 'Profits'){
      renderedData = sessionsList.map((session, index) => {
        return {x: index + 1, y: session.cashed_out - session.buy_in}
      })
    }
    else if(filter === 'Online'){
      let filteredData = sessionsList.filter(session => session.game_type_one === 'Online')
      renderedData = filteredData.map((session, index) => {
        return {x: index + 1, y: session.cashed_out - session.buy_in}
      })
    }
    else if(filter === 'Live'){
      let filteredData = sessionsList.filter(session => session.game_type_one === 'Live')
      renderedData = filteredData.map((session, index) => {
        return {x: index + 1, y: session.cashed_out - session.buy_in}
      })
    }
    console.log()
    
    return renderedData;
  }

  calculateDomain = () => {
    let sessionProfits = this.generateData().map(session => Math.abs(session.y))
    let yDomain = Math.max(...sessionProfits)
    return yDomain;
  }

  handleFilterChange = filterValue => {
    this.setState({
      filter: filterValue,
    })
  }

  render(){
    console.log(this.generateData())
    console.log(this.calculateDomain())
    console.log(this.state)
    return(
      <div className="analysis">
        <select className="filterAnalytics" onChange={e => this.handleFilterChange(e.target.value)}>
          <option value="Profits">Total Profits</option>
          <option value="Online">Online Profits</option>
          <option value="Live">Live Profits</option>
        </select>
        <VictoryChart  height={500} width={450} padding={70} animate={100} theme={VictoryTheme.material}>
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
          text='Profit'
          x={25}
          y={30}
          />
        </VictoryChart>
      </div>
    )
  }
}