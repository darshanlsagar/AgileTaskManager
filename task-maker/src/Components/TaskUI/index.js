import React, {Component} from 'react';
import Task from '../Task'
import TaskDetails from '../TaskDetails/TaskDetails.js'

export default class TaskUI extends Component {    
  state = {        
    tasksL: this.props.tasks,
    currentTask:this.props.tasks[0]
  }

  showTaskDetails = (e, task) => {
    this.setState({
      currentTask : task       
    });
  }

  onDragOver = e => {
  	e.preventDefault();
  }

  onDragStart = (ev, id) => {
  	console.log("dragStart "+id);
  	ev.dataTransfer.setData("id",id);
  }
  onDrop = (ev, cat) => {       
    let id = ev.dataTransfer.getData("id");
    let tasks = this.state.tasksL.filter((task) => {
      if (task.title == id) {
        task.category = cat;           
      }
      return task;
    });        
    this.setState({
      tasksL : tasks       
    });    
  }

  saveTaskDetails = (e, taskObj) => {
    let tasks = this.state.tasksL.filter((task) => {
      if (task.title == taskObj.key) {
        task = taskObj;           
      }
      return task;
    });        
    this.setState({
      tasksL : tasks       
    });  
  }

  render () {
  	var tasks = { 
      scheduled: [], 
      complete: [],
      new: []
    }
  this.state.tasksL.forEach ((t) => {
    tasks[t.category].push(
      <div key={t.key}                     
      onDragStart={(e)=>this.onDragStart(e, t.title)}  
      onClick={(e)=>this.showTaskDetails(e, t)}
      draggable                    
      className="draggable"                    
      style={{backgroundColor: t.bgcolor}}>                       
      {t.title}                
      </div>);        
    });
    return (
    <div className="container-drag">
		  <h2 className="header">Task Manager</h2>
		  <div className="scheduled"
  		onDragOver={(e)=>this.onDragOver(e)}
  		onDrop={(e)=>{this.onDrop(e, "scheduled")}}>
    		<span className="task-header">Scheduled</span>
        <button onClick={this.props.createTask}>Create Task</button>
    		<Task task={tasks.scheduled}/>
  		</div>
      <div className="currentTask">
        <TaskDetails task={this.state.currentTask} saveTaskDetails={this.saveTaskDetails}/>
      </div>
  		<div className="droppable"
  		onDragOver={(e)=>this.onDragOver(e)}
  		onDrop={(e)=>this.onDrop(e, "complete")}>
    		<span className="task-header">COMPLETED</span>
    		<Task task={tasks.complete}/>
  		</div>
  	</div>);
  }
}