import React, {Component} from 'react';

export default class Task extends Component {

	render(){
		return (
			<div >
			{this.props.task}
			</div>
		)
	}
}