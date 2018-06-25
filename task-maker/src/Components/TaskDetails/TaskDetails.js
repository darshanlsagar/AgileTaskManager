import React, {Component} from 'react';

export default class TaskDetails extends Component {

	state = {
		task : this.props.task
	}
	updateInputVal = (e,task) => {
		let newTask = {...task};
		newTask[e.target.getAttribute("custom-key")] = e.target.value
		this.setState({ 
			...task,
			task:newTask
			//task[e.target.getAttribute("custom-key")] = e.target.value
		})
		this.props.saveTaskDetails(e, newTask);
	}
	componentWillReceiveProps(nextProps) {
	  this.setState({ task: nextProps.task });  
	}
	render(){
		return (
			<div>
			<ul >
			<li>Title</li>
			<li>
			<input custom-key="title"
			value={this.state.task.title}
			onChange= { e => this.updateInputVal(e,this.state.task)}/>
			</li>
			</ul>

			<ul >
			<li>Status</li>
			<li>
			<select custom-key="status"
			value={this.state.task.status}
			onChange= { e => this.updateInputVal(e,this.state.task)}>
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
			value={this.state.task.complexity}
			onChange= { e => this.updateInputVal(e,this.state.task)}>
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