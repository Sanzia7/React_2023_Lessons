import React from 'react'
import s from './style.module.css'

export default function Counting({ basket }) {

   const totalSum = basket.reduce((acc, { count, price }) => acc + count * price, 0);

   const totalCount = basket.reduce((acc, { count }) => acc + count, 0);


   return (
      <div className={s.card}>
         <p>
            Общая сумма: {totalSum}
         </p>
         <p>
            Общее количество: {totalCount}
         </p>

      </div>
   )
}
