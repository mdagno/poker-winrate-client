import React from 'react'
import './Analytics.css'
import { VictoryAxis } from 'victory';
import { VictoryLine } from 'victory';
import { VictoryTheme } from 'victory';
import { VictoryChart } from 'victory';

export default class Analytics extends React.Component {



  generateData = () => {

  }
 basicData = [{x: 0, y: 2}, {x: 1, y: 2.5}, {x: 2, y: 4}, {x: 3, y: 5}, {x: 4, y: 3}, {x: 5, y: 1}, {x: 6, y: 3}]
  render(){
    return(
      <div className="analysis">
        <label for="filterAnalytics">See Data: </label>
        <select className="filterAnalytics">
          <option>Session Profits</option>
          <option>Big Blind Winrate</option>
        </select>
        <VictoryChart data={this.basicData} height={250}>
          <VictoryLine 
            interpolation='linear'
            data={this.basicData} 
            style={
              {
                data: {
                  stroke: '#09d3ac', 
                  strokeWidth: 1
                },
                parent: {border: "1px solid #ccc"}
            }}
          />
        </VictoryChart>
      </div>
    )
  }
}