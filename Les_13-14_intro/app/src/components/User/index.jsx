import React from 'react'
import s from './style.module.css'

export default function User({name, lastname, age}) {

   //console.log(props)
   console.log(s);

   // const style = {
   //    border: '2px solid blue',
   //    padding: '10px',
   //    margin: '15px',
   //    backgroundColor: '#059669',
   //    borderRadius: '10px'
   // };


   return (
      <div className={s.card}>
         <p>{name}</p>
         <p>{lastname}</p>
         <p>{age}</p>
         <div className={s.test}></div>
      </div>
   )
}
