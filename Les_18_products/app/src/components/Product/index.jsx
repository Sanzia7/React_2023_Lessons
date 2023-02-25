import React from 'react'
import s from './style.module.css'

export default function Product({id, title, description, price, image, deleteProduct,addToBasket}) {
   return (
      <div className={s.card}>
         <img src={image} alt={title} />
         <p>Title: {title}</p>
         <p>Description: {description}</p>
         <p>Price: {price}</p>
         <button onClick={() => deleteProduct(id)}>Delete</button>
         <button onClick={()=> addToBasket(id)}>Add to Basket</button>
      </div>
   )
}
