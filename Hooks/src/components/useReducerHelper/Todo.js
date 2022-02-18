import React from 'react'
import {ACTIONS } from '../UseReducer'

export default function Todo ({todo, dispatch}) {
  return (
	<div>
		<button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button>||
		  <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
		  <span style={{ color: todo.complete ? '#AAA' : '#000' }}>
			   ---{todo.name}
		  </span>
	</div>
  )
}
