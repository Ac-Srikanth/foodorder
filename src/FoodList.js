import React, { Component } from 'react';
import Food from './Food';

class FoodList extends Component {
	render() {
		let itemArr = this.props.allItems;
		let myItems = this.props.items;
		let handleEvent = this.props.handleEvent;
		let id = this.props.id;

		let listItems = itemArr.map((itemObj) => {
			if (!myItems.includes(itemObj.id)) return null;

			return <Food key={itemObj.id} data={itemObj} onClick={() => handleEvent(itemObj.id, id)} />;
		});

		return <ul>{listItems}</ul>;
	}
}

export default FoodList;
