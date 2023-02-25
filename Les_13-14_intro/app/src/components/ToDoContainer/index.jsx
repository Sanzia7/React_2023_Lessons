import React from 'react'
import ToDo from "../ToDo";

export default function ToDoContainer() {

   const todos = [
      { id: 1, title: 'run', done: true },
      { id: 2, title: 'eat', done: false},
      { id: 3, title: 'sleep', done: true },
      { id: 4, title: 'read', done:  true},
      { id: 5, title: 'draw', done:  false},
      { id: 6, title: 'walk', done: false },
      { id: 7, title: 'work',done: true}
   ]

   return (
      <div>
         {
            todos.map(todo => <ToDo key={todo.id} {...todo} />)
         }
      </div>
   )
}

