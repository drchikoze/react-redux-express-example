const initialState = {
  auth: {

  }
}
function getId(todos) {
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let authReducer = function(todos = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        {
          id: getId(todos),
          text: action.text,
          isCompleted: false
        }, ...todos
      ]
    case 'COMPLETE_TODO':
      return todos.map((todo) => {
        return todo.id === action.id ? Object.assign({}, todo, {isCompleted: !todo.isCompleted}) : todo
      })
    case 'DELETE_TODO':
    return todos.filter((todo) => {
      return todo.id !== action.id
    })
    default:
      return todos
  }
}
export default authReducer
