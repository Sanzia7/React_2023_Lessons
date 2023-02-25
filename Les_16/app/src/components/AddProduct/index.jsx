import React from 'react'
import s from './style.module.css'

export default function AddProduct({ createProduct }) {
   const onSubmit = event => {
      event.preventDefault();
      const { title, price } = event.target;
      createProduct(title.value, +price.value);
      title.value = '';
      price.value = '';
   }

   return (
      <div className={s.form}>
         <form onSubmit={onSubmit} >
            <input type="text" name='title' placeholder='title'/>
            <input type="number" name='price' placeholder='price'/>
            <button> Add Product</button>
         </form>
      </div>
   )
}
