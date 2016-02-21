import React, {Component} from 'react';
import { VictoryChart } from 'victory';
import { VictoryAxis } from 'victory';
import { VictoryLine } from 'victory';   
import styleable from 'react-styleable';
import coreStyles from '../css/core-widget.scss';
import css from '../css/chart.scss';

@styleable(css)
export default class Chart extends Component {

	render() {
		
		return (
			<VictoryChart
  height={450}
  scale={{
    x: "time"
  }}>
  <VictoryAxis
    label="Decades"
    tickValues={[
      new Date(1980, 1, 1),
      new Date(2000, 1, 1),
      new Date(2020, 1, 1),
    ]}
    tickFormat={(x) => x.getFullYear()}/>
  <VictoryLine
    data={[
      {x: new Date(1982, 1, 1), y: 125},
      {x: new Date(1987, 1, 1), y: 257},
      {x: new Date(1993, 1, 1), y: 345},
      {x: new Date(1997, 1, 1), y: 515},
      {x: new Date(2001, 1, 1), y: 132},
      {x: new Date(2005, 1, 1), y: 305},
      {x: new Date(2011, 1, 1), y: 270},
      {x: new Date(2015, 1, 1), y: 470},
      {x: new Date(2015, 1, 1), y: 125}
    ]}/>
</VictoryChart>
			
		);
	}
}