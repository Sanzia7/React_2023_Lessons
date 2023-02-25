import React from 'react'
import s from './style.module.css'

export default function UserItem({ id, first_name, last_name, email, deleteUser }) {
   return (
      <div className={s.card}>
         <p>{first_name}</p>
         <p>{last_name}</p>
         <p>{email}</p>
         <button onClick={() => deleteUser(id)}>Delete</button>
      </div>
   )
}
// avatar
// :
// "https://reqres.in/img/faces/1-image.jpg"
// email
// :
// "george.bluth@reqres.in"
// first_name
// :
// "George"
// id
// :
// 1
// last_name
// :
// "Bluth"