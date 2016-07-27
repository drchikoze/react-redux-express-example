import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Col, FormGroup, ControlLabel, FormControl, Checkbox, Button, ListGroup, ListGroupItem, Table } from 'react-bootstrap';
import * as authActions from '../../actions/authActions';
import TodoItem from '../TodoItem'

export default class TodoListGroup extends Component {

  render() {
    return (
      <Table responsive>
        <tbody>
          {
            this.props.todos.map((todo) => {
              return <TodoItem id={todo.id} text={todo.text} isComplated={todo.isComplated} dispatch = {this.props.dispatch}/>
            })
          }
        </tbody>
      </Table>
    )
  }
}

// TodoItem.propTypes = {
//   id: React.PropTypes.number.isRequired,
//   text: React.PropTypes.string.isRequired,
//   isComplated: React.PropTypes.bool.isRequired,
// }
