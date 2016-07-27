import React, {Component} from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Row, Col, Grid, Clearfix } from 'react-bootstrap';
require('./MainView.scss');

export default class MainView extends Component {
  constructor() {
    super()
    this.handleLogOut = this.handleLogOut.bind(this);
  }
  componentDidMount() {
    if(sessionStorage.getItem('token')) {
      let userId = sessionStorage.getItem('token');
      const { dispatch } = this.props;
      dispatch(authActions.loginViaToken(userId))
    }
  }

  handleLogOut(event) {
    const { dispatch } = this.props;
    dispatch(authActions.logOut())
  }

  render() {
    return (
      <div className='MainApp'>
        <Navbar fixedTop={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/"> Example.com </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={2}>
              <Link to="/profile"> Profile </Link>
            </NavItem>

            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            {
              this.props.isLoginedIn ?
                <NavItem eventKey={1}>
                  {
                    this.props.user.photo ?
                      <img src={this.props.user.photo} style={{borderRadius: '50%'}}/>
                    :
                      <img src='//www.microchip.com/forums/app_themes/Mobile/image/noavatar.gif' style={{borderRadius: '50%', height: '35px'}}/>
                  }
                  <span style = {{marginLeft: '10px'}} onClick={this.handleLogOut} >
                    LogOut
                  </span>
                </NavItem>
              :
                <NavItem eventKey={1}>
                  <span>
                    <Link to="/login"> Login </Link> /
                    <Link to="/signup"> SingUp </Link>
                  </span>
                </NavItem>

            }
          </Nav>
        </Navbar>
        <Grid fluid={false}>
          <Row className='test-item'>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div className ='content'>
                {this.props.children}
              </div>
            </Col>
          </Row>
        </Grid>
        <Clearfix visibleXsBlock>test Clearfix</Clearfix>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return state.auth
}

export default connect(mapStateToProps)(MainView)
