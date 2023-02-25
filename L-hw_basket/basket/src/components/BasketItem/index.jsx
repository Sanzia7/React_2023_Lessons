import React from 'react'
import s from './style.module.css'

export default function BasketItem({ id, title, price, count, incr, decr }) {
   return (
      <div className={s.card}>

         <p>Выбранный товар: {title}</p>
         <p>Цена товра: {price}</p>
         <p>Количество товара: {count}</p>
         <div>
            <button onClick={() => incr(id)}>+</button>
            <button onClick={() => decr(id)}>-</button>
         </div>
      </div>
   )
}
