import _ from 'lodash';
import React from 'react';
import TodoListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodoList extends React.Component{
	renderItems(){
		const props = _.omit(this.props, 'todos');
		return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props}/>);
	}

	render(){
		console.log(this.props.todos);

		return(
			<table>
				<TodoListHeader />
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
			);
	}
}