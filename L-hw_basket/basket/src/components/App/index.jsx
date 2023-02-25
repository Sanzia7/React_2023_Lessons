import { useState } from "react";
import BasketItem from "../BasketItem";
import Counting from "../Counting";


function App() {

  const defaultProducts = [
    { id: 1, title: 'Велосипед', price: 45000, count: 1},
    { id: 2, title: 'Ролики', price: 25000, count: 3},
    { id: 3, title: 'Самокат', price: 5000, count: 5 },
    { id: 4, title: 'Скейт', price: 13000, count: 3 },
    { id: 5, title: 'Лыжи', price: 27000, count: 4 },
    { id: 6, title: 'Коньки', price: 15000 , count: 3},
  ];

  const [basket, setBasket] = useState(defaultProducts);


  const incr = value => {
    const target = basket.find(({ id }) => id === value);
    target.count++;
    setBasket([...basket]);
  }

  const decr = value => {
    const target = basket.find(({ id }) => id === value);
    target.count--;

    if (target.count === 0) {
      setBasket(basket.filter(elem => elem !== target))
    } else {
      setBasket([...basket]);
    } 
  }


  return (
    <div>
      <h2>Basket</h2>
      <div>
        {
          basket.map(item =>
            <BasketItem
              key={item.id}
              {...item}
              incr={incr}
              decr={decr}
            />)
        }
      </div>
      <Counting basket={basket} />
    </div>
  );
}

export default App;
