import React, {Component} from 'react'
import { connect } from 'react-redux'
import TodoList from '../../components/TodoList'

export default class Profile extends Component {
  render() {
    console.log(this.props);
    let todos = [
      {
        id: 1,
        text: 'testTodo',
        isComplated: false
      },
      {
        id: 2,
        text: 'testTodo2',
        isComplated: true
      }
    ];
    return (
      <div>
        <h2>Profile page</h2>
        <p>
          Only authenticated users can access to profile page.
        </p>
        <TodoList dispatch = {this.props.dispatch} todos = {this.props.todos}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Profile)
