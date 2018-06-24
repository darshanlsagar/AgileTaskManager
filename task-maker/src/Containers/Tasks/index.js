import React from 'react';

export default class Tasks extends Component {    
  state = {        
    tasks: [{name:"Learn Angular",
             category:"wip", 
             bgcolor: "yellow"},  
          
            {name:"React", 
             category:"wip", 
             bgcolor:"pink"},  
          
            {name:"Vue", 
             category:"complete", 
             bgcolor:"skyblue"}          
      ]}

      onDragOver = e => {
      	e.preventDefault();
      }

      onDrop = (ev, cat) => {       
  let id = ev.dataTransfer.getData("id");
  let tasks = this.state.tasks.filter((task) => {
      if (task.name == id) {
               task.category = cat;           
      }              
       return task;       
   });        
   this.setState({           
      ...this.state,           
      tasks       
   });    
}

  render () {
    return (<div className="container-drag">
		<h2 className="header">DRAG & DROP DEMO</h2>                  
		<div className="wip" 
		onDragOver={(e)=>this.onDragOver(e)}                    
		onDrop={(e)=>{this.onDrop(e, "wip")}}>                    
		<span className="task-header">WIP</span>                    
		{tasks.wip}                
		</div>                
		<div className="droppable"
		onDragOver={(e)=>this.onDragOver(e)}                    
		onDrop={(e)=>this.onDrop(e, "complete")}>                     
		<span className="task-header">COMPLETED</span>                     
		{tasks.complete}                
		</div>              
	</div>);
  }
}