import React, {Component} from 'react'
import ListItem from './list-item'

export default class GroceryList extends Component {
	render() {
		return (
			<ul>
				<ListItem quantity="1" name="Bread" />
				<ListItem quantity="6" name="Eggs" />
				<ListItem quantity="2" name="Milk" />
			</ul>
		);
	}
}





