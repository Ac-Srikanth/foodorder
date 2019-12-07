import React, { Component } from 'react';

class Food extends Component {
	render() {
		return (
			<li onClick={this.props.onClick}>
				<div>{this.props.data.name}</div>
				<span>{this.props.data.price}</span>
			</li>
		);
	}
}
export default Food;
