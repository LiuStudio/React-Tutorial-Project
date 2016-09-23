import React from 'react';

export default class CreateTodo extends React.Component{


	render(){
		return(
			<form onSubmit={this.handleCreate.bind(this)}>
			 <input type="text" placeholder="what do i need to do" ref="createInput"/>
			 <button>Create</button>
			 {this.renderError()}
			</form>
			);
	}

	renderError(){
		return(
			<div> {this.props.error}
			</div>
			)
	}

	handleCreate(event){
		event.preventDefault();
		const createInput = this.refs.createInput;
		const task = createInput.value;
		const validateInput = this.validateInput(task);
		if (this.props.error == null){
		this.props.createTask(task);
		this.refs.createInput.value='';
		}
		console.log(this.refs.createInput.value);
		console.log(this.props.createTask);

	}

	validateInput(task){
		if (!task){
			this.props.setError(' Please enter a task');
		} else if (_.find(this.props.todos, todo=> todo.task === task)){
			this.props.setError(' Task already exists');
		}else {
			this.props.setError(null);
		}

	}
}