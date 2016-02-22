import React from 'react';
import ReactDom from 'react-dom';
import promise from 'es6-promise';
import fetch from 'whatwg-fetch';
import fetchMock from 'fetch-mock';
import Chart from './chart';

fetchMock.mock('http://helloworld.com.au/api/line-chart', 'POST', function(url, data) {
		if (data.data === 'popularity') {
			return {
				general: {
					type: 'popularity'
				}, 
				items: [
					{
						x: '2016-08-01',
						y: 8.2			
					},
					{
						x: '2016-08-15',
						y: 6		
					},
					{
						x: '2016-09-01',
						y: 7		
					},
					{			
						x: '2016-09-15',
						y: 3
					},
					{
						x: '2016-10-01',
						y: 7
					},
					{
						x: '2016-10-15',
						y: 6.5		
					},
					{
						x: '2016-11-01',
						y: 2.9		
					},
					{
						x: '2016-11-15',
						y: 5.5		
					},
					{
						x: '2016-12-01',
						y: 4.6		
					},
					{			
						x: '2016-12-15',
						y: 6.8
					},
					{
						x: '2017-01-01',
						y: 7
					},
					{
						x: '2017-01-15',
						y: 10			
					}
							
				]
			}
		}
		else if (data.data === 'price') {
			return {
				general: {
					type: 'price'
				}, 
				items: [
					{
						x: '2016-08-01',
						y: 1200.97			
					},
					{
						x: '2016-08-15',
						y: 1100.00		
					},
					{
						x: '2016-09-01',
						y: 1567.20		
					},
					{			
						x: '2016-09-15',
						y: 1209.03
					},
					{
						x: '2016-10-01',
						y: 1348.67,
					},
					{
						x: '2016-10-15',
						y: 1854.00			
					},
					{
						x: '2016-11-01',
						y: 1286.45			
					},
					{
						x: '2016-11-15',
						y: 1693.04			
					},
					{
						x: '2016-12-01',
						y: 1376.00			
					},
					{			
						x: '2016-12-15',
						y: 956.98
					},
					{
						x: '2017-01-01',
						y: 865.99,
					},
					{
						x: '2017-01-15',
						y: 568.00			
					}
							
				]
			}
		}
		else if (data.data === 'weather') {
			return {
				general: {
					type: 'weather'
				}, 
				items: [
					{
						x: '2016-08-01',
						y: 24			
					},
					{
						x: '2016-08-15',
						y: 23			
					},
					{
						x: '2016-09-01',
						y: 24			
					},
					{			
						x: '2016-09-15',
						y: 25
					},
					{
						x: '2016-10-01',
						y: 27,
					},
					{
						x: '2016-10-15',
						y: 27			
					},
					{
						x: '2016-11-01',
						y: 28			
					},
					{
						x: '2016-11-15',
						y: 28			
					},
					{
						x: '2016-12-01',
						y: 29			
					},
					{			
						x: '2016-12-15',
						y: 30
					},
					{
						x: '2017-01-01',
						y: 29,
					},
					{
						x: '2017-01-15',
						y: 28			
					}
							
				]
			}
		}
	}
	
);

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

	process(json) {
		let firstObj = json.items[0],
			lastObj = json.items[json.items.length - 1],
			minY = Math.min(...json.items.map((val) => val.y));
	    
		json.items.unshift({x: firstObj.x, y: minY - 2});
		json.items.push({x: lastObj.x, y: minY -2});

		return json;
	}

	renderElm() {
		ReactDom.render(<Chart chart={this.chart} options={this.options} />, document.querySelector(this.element));
	}
}

window.HwrldChartWidget = HwrldChartWidget;