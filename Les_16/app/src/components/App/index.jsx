import { useEffect, useState } from "react";
import AddProduct from "../AddProduct";
import Product from "../Product";
import s from "./style.module.css"



function App() {

  useEffect(() => {
    (async () => {
      const resp = await fetch('https://fakestoreapi.com/products');
      const data = await resp.json();
      const newArr = data.map(({ id, title, price }) => ({ id, title, price }));
      setProducts(newArr);
    })();
  }, []);


  const [products, setProducts] = useState([]);


  const deleteProduct = async (delId) => {
    const resp = await fetch(`https://fakestoreapi.com/products/${delId}`, {
      method: "DELETE"
    });
    const { id } = await resp.json();

    setProducts(products.filter(product => product.id !== id));
  };

  const createProduct = async (title, price) => {
    price = +price.toFixed(2);
    const resp = await fetch('https://fakestoreapi.com/products', {
      method: "POST",
      body: JSON.stringify({ title, price })
    });
    const { id } = await resp.json();

    setProducts([...products, { id, title, price }])
  };



  const changePrice = (changeId, value) => {
    const prod = products.find(({ id }) => id === changeId);
    if (prod.price + value < 0) {
      prod.price = 0
    } else {
      prod.price += value;
    }
    prod.price = +prod.price.toFixed(2);
    setProducts([...products]);
  };


  return (
    <div >
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

//---------------------
  // useEffect(() => {
  //   // console.log('useEffect work!')
  //   fetch('https://fakestoreapi.com/products')
  //     .then(resp => resp.json())
  //     .then(data => {
  //       const newArr = data.map(({ id, title, price }) => ({ id, title, price }));
  //       setProducts(newArr)
  //     })
  // }, []);

   // async () => {
  //   const resp = await fetch('https://fakestoreapi.com/products');
  //   const data = await resp.json();
  //   const newArr = data.map(({ id, title, price }) => ({ id, title, price }));
  //   setProducts(newArr);
  // }


// const newProduct = {
//   id: Date.now(),
//   title,
//   price
// };

// const createProduct = (title, price) => {
//   fetch('https://fakestoreapi.com/products', {
//     method: "POST",
//     body: JSON.stringify({ title, price })
//   })
//     .then(resp => resp.json())
//     .then(({ id }) => {
//       setProducts([...products, { id, title, price }])
//     });
//   // const newArr = [...products, newProduct];
//   // setProducts(newArr);
// };
// const newArr = [...products, newProduct];
    // setProducts(newArr);