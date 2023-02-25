import React from 'react'
import { useEffect, useState } from "react";
import UserItem from "../UserItem";
import s from './style.module.css'

export default function UserContainer() {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      (async () => {
         const resp = await fetch('https://reqres.in/api/users');
         const data = await resp.json();
         setUsers(data.data);
      })()
   }, [])

   const deleteUser = delId => setUsers(users.filter(({ id }) => id !== delId));

   return (
      <div>
         <div className={s.container}>
            {
               users.map(user =>
                  <UserItem
                     key={user.id}
                     {...user}
                     deleteUser={deleteUser}
                  />)
            }
         </div>
         <p className={s.amount}>Amount of Users: {users.length}</p>
      </div>
   )
}

// {/* <UserItem
//   first_name={'Lena'}
//   last_name={'Svetlova'}
//   email={'lena_s@gmail.com'}
// /> */}