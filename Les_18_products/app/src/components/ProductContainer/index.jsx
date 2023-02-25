import React, { useState } from 'react'
import { useEffect } from "react";
import BasketContainer from '../BasketContainer';
import Product from "../Product";
import s from './style.module.css';

export default function ProductContainer() {

   const [products, setProducts] = useState([]);
   const [basket, setBasket] = useState([]);

   useEffect(() => {
      (async () => {
         const resp = await fetch("https://dummyjson.com/products");
         const data = await resp.json();
         const result = data.products.map(({ id, title, price, description, images }) =>
            ({ id, title, price, description, image: images[0] }));
         setProducts(result);
      })()
   }, []);

   useEffect(() => {
      const prodIds = products.map(({ id }) => id);
      setBasket(basket.filter(({id}) => prodIds.includes(id)))
   }, [products]);

   const deleteProduct = delId => setProducts(products.filter(({ id }) => id !== delId));

   const addToBasket = value => {
      const productBasket = basket.find(({ id }) => id === value);
      if (productBasket) {
         productBasket.count++;
         setBasket([...basket]);
      } else {
         const productElem = products.find(({ id }) => id === value);
         setBasket([...basket, { ...productElem, count: 1 }]);
      }
      const productElem = products.find(({ id }) => id === value);
      setBasket([...basket, { ...productElem, count: 1 }]);
   };

   const incr = value => {
      const basketElem = basket.find(({ id }) => id === value);
      basketElem.count++;
      setBasket([...basket]);
   }

   const decr = value => {
      const basketElem = basket.find(({ id }) => id === value);
      basketElem.count--;
      if (basketElem.count === 0) {
         setBasket(basket.filter(elem => elem !== basketElem))
      } else {
         setBasket([...basket]);
      }
   };

   const deleteFromBasket = value => {
      setBasket(basket.filter(({ id }) => id !== value));
   }

   const clearBasket = () => setBasket([]);


   return (
      <div>

         <BasketContainer
            basket={basket}
            incr={incr}
            decr={decr}
            clearBasket={clearBasket}
            deleteFromBasket={deleteFromBasket}
         />

         <div className={s.container}>
            {
               products.map(product =>
                  <Product
                     key={product.id}
                     {...product}
                     deleteProduct={deleteProduct}
                     addToBasket={addToBasket}

                  />)
            }
         </div>
      </div>
   )
}


// const addToBasket = value => {
//    const elem = products.find(({ id }) => id === value);
//    // elem.count = 1;
//    // setBasket([...basket, elem]);
//    // const new_elem = {...elem, count:1}
//    // setBasket([...basket, new_elem]);
//    setBasket([...basket, { ...elem, count: 1 }]);
// };