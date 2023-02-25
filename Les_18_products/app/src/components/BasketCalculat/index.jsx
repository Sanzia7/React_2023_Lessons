import React from 'react'
import s from './style.module.css'

export default function BasketCalculat({ basket, clearBasket }) {
   
   const totalSum = basket.reduce((acc, { count, price }) => acc + count * price, 0);

   const totalCount = basket.reduce((acc, { count}) => acc + count, 0);


   return (
      <div className={s.count}>
         <p>Total Sum: {totalSum}</p>
         <p>Total Count: {totalCount}</p>
         <button onClick={clearBasket}>Empty Basket</button>
      </div>
   )
}
