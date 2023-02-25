import React from 'react'
import s from './style.module.css'

export default function BasketItem({id, image, title, price, count, incr, decr, deleteFromBasket }) {
   
   return (
      <div className={s.item}>
         <img src={image} alt="{title}" />
         <p>Title: {title}</p>
         <p>Prise: {price} $</p>
         <p>Count:{count}</p>
         
         <div className={s.btns}>
            <button onClick={()=>incr(id)}>+</button>
            <button onClick={() => decr(id)}>-</button>
            <button onClick={() => deleteFromBasket(id)}>X</button>
         </div>
         

      </div>
   )
}

