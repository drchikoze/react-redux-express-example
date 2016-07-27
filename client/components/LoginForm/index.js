import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Col, FormGroup, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
import * as authActions from '../../actions/authActions';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
      error:null,
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.props);

    // if (this.state.username.length < 1) {}
    // if (this.state.username.length > 0 && this.state.password.length < 1) {}
    // if (this.state.username.length > 0 && this.state.password.length > 0) {}

    const { dispatch } = this.props;
    let userObj = {
      email: this.state.email,
      password: this.state.password
    }
    dispatch(authActions.login(userObj))
  }

  handleChange(event) {
    console.log(event.target.type);
    if ( event.target.type == 'email' ) {
      this.setState({
        email: event.target.value,
      });
    }
    if ( event.target.type == 'password' ) {
      this.setState({
        password: event.target.value,
      });
    }
  };

  render() {
    require('./LoginForm.scss');
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" onChange={this.handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" onChange={this.handleChange}/>
          </Col>
        </FormGroup>
        {
          this.props.errorMsg ?
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <small>{this.props.errorMsg}</small>
            </Col>
          </FormGroup>
          : null
        }

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" onClick={this.handleSubmit}>
              Login
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}
function mapStateToProps(state) {
  return state.auth
}

export default connect(mapStateToProps)(LoginForm)
