import React, { Component } from 'react';
import FoodList from './FoodList';

import './App.css';

class App extends Component {
	static defaultProps = {
		foodItems: [
			{
				name: 'Pizza',
				cost: 5.99,
				price: `$5.99`,
				id: 1
			},
			{
				name: 'Burger',
				cost: 2.99,
				price: '$2.99',
				id: 2
			},
			{
				name: 'Chicken Pasta',
				cost: 4.99,
				price: '$4.99',
				id: 3
			},
			{
				name: 'Grilled Sandwich',
				cost: 1.99,
				price: '$1.99',
				id: 4
			}
		]
	};
	constructor(props) {
		super(props);
		this.state = {
			list: this.props.foodItems.map((item) => item.id),
			order: [],
			toadditem: [],
			todeleteitem: []
		};
		this.handleEvent = this.handleEvent.bind(this);
		this.add = this.add.bind(this);
		this.delete = this.delete.bind(this);
	}
	handleEvent(itemid, id) {
		if (id === 1) {
			this.setState({ toadditem: itemid });
		}
		else {
			this.setState({ todeleteitem: itemid });
		}
	}
	add() {
		const isInBoxOne = this.state.list.includes(this.state.toadditem);

		this.setState({
			list:
				isInBoxOne ? this.state.list.filter((i) => i !== this.state.toadditem) :
				[ ...this.state.list, this.state.toadditem ],
			order:
				isInBoxOne ? [ ...this.state.order, this.state.toadditem ] :
				this.state.order.filter((i) => i !== this.state.toadditem),
			toadditem: []
		});
	}
	delete() {
		const isInBoxtwo = this.state.order.includes(this.state.todeleteitem);
		console.log(isInBoxtwo);
		this.setState({
			order:
				isInBoxtwo ? this.state.order.filter((i) => i !== this.state.todeleteitem) :
				[ ...this.state.order, this.state.todeleteitem ],
			list:
				isInBoxtwo ? [ ...this.state.list, this.state.todeleteitem ] :
				this.state.list.filter((i) => i !== this.state.todeleteitem),
			todeleteitem: []
		});
	}
	render() {
		return (
			<div>
				<h1>foodItems</h1>
				<div className='foodlist'>
					<FoodList
						handleEvent={this.handleEvent}
						items={this.state.list}
						allItems={this.props.foodItems}
						id={1}
					/>
				</div>
				<button onClick={this.add}>ADD</button>
				<button onClick={this.delete}>Delete</button>
				<h2>OrderList</h2>
				<div className='orderlist'>
					<FoodList
						handleEvent={this.handleEvent}
						items={this.state.order}
						allItems={this.props.foodItems}
						id={2}
					/>
				</div>
			</div>
		);
	}
}

export default App;
