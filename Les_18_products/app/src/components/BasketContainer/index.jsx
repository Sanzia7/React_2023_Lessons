import React from 'react'
import BasketCalculat from '../BasketCalculat'
import BasketItem from '../BasketItem'
import s from './style.module.css'

export default function BasketContainer({ basket, incr, decr, clearBasket, deleteFromBasket }) {
   

   return (
      <div>
         <div className={s.basket}>
            {
               basket.map(item =>
                  <BasketItem
                     key={item.id}
                     {...item}
                     incr={incr}
                     decr={decr}
                     deleteFromBasket={deleteFromBasket}
                  />)
            }
         </div>
         <div>
            <BasketCalculat
               basket={basket}
               clearBasket={clearBasket}   
            />
         </div>
      </div>
   )
}
