import React from 'react'
import User from "../User";

export default function UserContainer() {

   const users = [
      { id: 1, name: 'Ivan', lastname: 'Ushanov', age: 30 },
      { id: 2, name: 'Olga', lastname: 'Stepanova', age: 32 },
      { id: 3, name: 'Semen', lastname: 'Ivanov', age: 33 },
      { id: 4, name: 'Stepan', lastname: 'Petrov', age: 28 },
      { id: 5, name: 'Katja', lastname: 'Igoreva', age: 29 },
      { id: 6, name: 'Anatoly', lastname: 'Sidorov', age: 37 },
   ]



   return (
      <div>
         {
            users.map(user => <User key={user.id} {...user} />)
         }
      </div>
   )
}


// {/* <User name={'Anatoly'} lastname={'Ushanov'} age={30} /> */ }

// {/* {
//       users.map(user => <User name={user.name} lastname={user.lastname} age={user.age} />)
//       } */}
