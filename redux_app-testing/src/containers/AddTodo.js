import React from 'react'
import { addTodo } from '../actions'
import { connect } from 'react-redux'

const AddTodo = (props) => {
    const {onAddTodo} = props
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        onAddTodo(input.value)
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTodo: (data) => {
            dispatch(addTodo(data))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)