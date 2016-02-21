import React from 'react';
import ReactDom from 'react-dom';
import promise from 'es6-promise';
import fetch from 'whatwg-fetch';
import fetchMock from 'fetch-mock';
import Chart from './chart';

fetchMock.mock('http://helloworld.com.au/api/line-chart', 'POST', {
	general: {
		type: 'weather'
	}, 
	items: [
		{
			y: 14,
			x: '2016-03-01'
		},
		{
			y: 18,
			x: '2016-04-01'
		},
		{
			y: 20,
			x: '2016-05-01'
		},
		{
			y: 17,
			x: '2016-06-01'
		},
		{
			y: 21,
			x: '2016-07-01'
		},
		{
			y: 27,
			x: '2016-08-01'
		},		
	]
});

class HwrldChartWidget {
	constructor(element, options) {
		this.element = element;
		this.options = options;
		this.getData();
	}

	getData() {
		let self = this;
		window.fetch('http://helloworld.com.au/api/line-chart', {
			method: 'POST',
			data: this.options.content
		}).then(function(response) {
    		return response.json();
  		}).then(function(json) {
    		self.chart = json;
    		self.renderElm();
  		}).catch(function(err) {
    		console.log('parsing failed', err);
  		});
	}

	renderElm() {
		ReactDom.render(<Chart chart={this.chart} />, document.querySelector(this.element));
	}
}

window.HwrldChartWidget = HwrldChartWidget;