import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Col, FormGroup, ControlLabel, FormControl, Checkbox, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import * as todoActions from '../../actions/todoActions';

export default class TodoItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleCompleted = this.handleCompleted.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleCompleted(event) {
    const { dispatch } = this.props;
    dispatch(todoActions.completeTodo(this.props.id));
  }

  handleDelete(event) {
    const { dispatch } = this.props;
    dispatch(todoActions.deleteTodo(this.props.id));
  }

  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.text}</td>
        <td>
          <Checkbox checked={this.props.isComplated} readOnly={false} style={{marginTop: '0px'}} onChange={this.handleCompleted}>
            Complated
          </Checkbox>
        </td>
        <td>
          <Button  bsSize="xsmall" style={{marginTop: '0px'}} onClick={this.handleDelete}>delete todo</Button>
        </td>
      </tr>
    )
  }
}

TodoItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
  isComplated: React.PropTypes.bool.isRequired,
}
