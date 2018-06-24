import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/TaskManager/App';
import registerServiceWorker from './registerServiceWorker';

const onCompletion = () => {
	alert("Completed"+new Date())
}
const getTimer = () => {
	let time = new Date().toString();
	setTimeout(function(){
		time = new Date().toString();
		return time;
	},1000)
	return time;
}
const NewElm = () => {
 return <h1>Hi JSX { getTimer()}</h1>;
}
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
