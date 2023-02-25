import React from 'react'
import s from './style.module.css'

export default function Product({ id, title, price, deleteProduct, changePrice }) {
   return (
      <div className={[s.card, price > 500 ? s.expensive : ''].join(' ')}>

         <p className={price === 0 ? s.free : ''}>{title}</p>

         <p>{price || 'For Free'}</p>

         <button onClick={() => deleteProduct(id)}>Delete</button>

         <button onClick={() => changePrice(id, +100)}>+100</button>

         {
            price !== 0
               ? <button onClick={()=> changePrice(id, -100)}>-100</button>
               : ''
         }
      </div>
   )
}
