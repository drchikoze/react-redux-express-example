import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Col, FormGroup, ControlLabel, FormControl, Checkbox, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import * as todoActions from '../../actions/todoActions';

export default class TodoInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      text: ''
    }
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { dispatch } = this.props;
    dispatch(todoActions.addTodo(this.state.text))
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <Form inline style={{marginBottom: '10px'}} onSubmit={this.handleSubmit}>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Todo</ControlLabel>
          {' '}
          <FormControl type="text" placeholder="exaple todo" onChange={this.handleChange} value={this.state.text}/>
        </FormGroup>
        {' '}
        <Button type="submit" onClick={this.handleSubmit}>
          Add todo
        </Button>
      </Form>
    )
  }
}

// TodoItem.propTypes = {
//   id: React.PropTypes.number.isRequired,
//   text: React.PropTypes.string.isRequired,
//   isComplated: React.PropTypes.bool.isRequired,
// }
