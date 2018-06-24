import React, { Component } from 'react';
import Tasks from '../TaskUI'
import './App.css';
import {getFileContent} from '../../Containers/Actions/FileOperations.js'
import tasks from '../../sampleTasks.json'

var taskList = tasks;
getFileContent("../src/sampleTasks.json",data => alert(data));
class App extends Component {
	state = {
		taskList : taskList
	}
	createTaskAction = () => {
		let task = {
			"complexity":"Easy",
			"status":"WIP",
			"startDate":"24-Jun-2018",
			"endDate":"24-Jul-2018",
			"key":Math.random(),
			"title":"Title",
			"subTitle":"ST1",
			"KeyPoints":"New Task",
			"category":"scheduled"
		}
		this.setState({
			...this.state,
			taskList : taskList.push(task)
		})
	}
	render() {
		return (
		  <div className="App">
		    <Tasks tasks={this.state.taskList}
		    createTask={this.createTaskAction}
		    />
		  </div>
		);
	}
}

export default App;
