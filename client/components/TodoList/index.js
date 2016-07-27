import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Col, FormGroup, ControlLabel, FormControl, Checkbox, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import * as authActions from '../../actions/authActions';
import TodoInput from '../TodoInput';
import TodoListGroup from '../TodoListGroup';

export default class TodoList extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

  }


  render() {
    require('./TodoList.scss');
    return (
      <div>
        <div className ='todo_header'>This is todoList</div>
        <TodoInput dispatch = {this.props.dispatch}/>
        <TodoListGroup dispatch = {this.props.dispatch} todos = {this.props.todos}/>
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
}
