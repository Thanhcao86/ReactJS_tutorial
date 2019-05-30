import React from 'react'
import AddTodo from './containers/AddTodo'
import { connect } from 'react-redux'
import todos from './reducers/todos'

const App = (props) => {
  const data = props.todos
  console.log(data)
  return(
  <div>
    <AddTodo />
    <h4>after you add more</h4>
    {data&&data.map(function(item, i){
      return(
        <b key={item.id}>{item.text}<br/></b>
      )
    })}
  </div>
  )
}


const mapStateToProps = state => ({
  todos: todos(state.todos, "TODO")
})

export default connect(mapStateToProps)(App)