import React, {Component} from 'react';

export default class TaskDetails extends Component {

	taskObj = this.props.task;
	updateInputVal = (e,task) => {
		this.taskObj[e.target.getAttribute("custom-key")] = e.target.value;
		this.props.saveTaskDetails(e, this.taskObj);
	}
	render(){
		return (
			<div>
			<ul >
			<li>Title</li>
			<li>
			<input custom-key="title"
			value={this.props.task.title}
			onChange= { e => this.updateInputVal(e,this)}/>
			</li>
			</ul>

			<ul >
			<li>Status</li>
			<li>
			<select custom-key="status"
			value={this.props.task.status}
			onChange= { e => this.updateInputVal(e,this)}>
				<option value="new">New</option>
				<option value="completed">Completed</option>
				<option value="hold">On Hold</option>
				<option value="wip">Work In Progress</option>
			</select>
			</li>
			</ul>

			<ul >
			<li>Complexity</li>
			<li>
			<select custom-key="complexity"
			value={this.props.task.complexity}
			onChange= { e => this.updateInputVal(e,this)}>
				<option value="difficult">Difficult</option>
				<option value="easy">Easy</option>
				<option value="medium">Medium</option>
			</select>
			</li>
			</ul>
			</div>
		)
	}
}