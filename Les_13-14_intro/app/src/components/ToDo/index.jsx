import React from 'react'

export default function ToDo({ id, title , done}) {
   //console.log(props)

   const style = {
      width: '350px',
      padding: '10px',
      margin: '15px',
      border: '3px solid green',
      borderRadius: '7px',
      backgroundColor: 'orange',
      boxShadow: '3px 3px 3px gray'
   };
   const doneStyle = {
      color: 'red',
      textDecoration: 'line-through'
   }

   return (
      <div style={style}>
         <p style={done ? doneStyle : {}}>{title}</p>
      </div>
   )
}
