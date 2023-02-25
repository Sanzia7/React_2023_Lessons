import { useEffect, useState } from "react";
import AddProduct from "../AddProduct";
import Product from "../Product";
import s from './style.module.css';


function App() {

  useEffect(() => {
    console.log('useEffect work!')
  }, []); // монтирование для одноразового запроса!

  const defaultProducts = [
    { id: 1, title: 'Bicycle', price: 900 },
    { id: 2, title: 'Skates', price: 700 },
    { id: 3, title: 'Scooter', price: 500 },
    { id: 4, title: 'Skis', price: 1000 },
    { id: 5, title: 'Roller', price: 350 },
    { id: 6, title: 'Sled', price: 250 },

  ];

  const [products, setProducts] = useState(defaultProducts);

  const deleteProduct = (delId) => {
    const newArr = products.filter(({ id }) => id !== delId);
    setProducts(newArr);
  };

  const createProduct = (title, price) => {
    const newProduct = {
      id: Date.now(),
      title,
      price
    }
    const newArr = [...products, newProduct];
    setProducts(newArr);
  };



  const changePrice = (changeId, value) => {
    const prod = products.find(({ id }) => id === changeId);
    if (prod.price + value < 0) {
      prod.price = 0
    } else {
      prod.price += value;
    }
    setProducts([...products]);
  }

  return (
    <div>
      <AddProduct createProduct={createProduct} />
      <div className={s.container}>
        {
          products.map((product) =>
            <Product
              key={product.id}
              {...product}
              deleteProduct={deleteProduct}
              changePrice={changePrice}
            />)
        }
      </div>
    </div>
  );
}

export default App;


//второй вариант функции для изменения цены через метод map
  // const changePrice = (id, value) => {
  //   const newArr = products.map(product => {
  //     if (product.id === id) {
  //       product.price += value;
  //     }
  //     // product.price = product.id === id ? product.price + value : product.price; // здесьусловие выводится через тернарный оператор
  //     return product
  //   })
  //   setProducts(newArr);
  // };