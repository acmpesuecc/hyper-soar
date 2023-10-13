import React, { useEffect, useState } from 'react';


const Cart = () => {
    const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const itemCounts = {};
  cart.forEach((item) => {
    if (itemCounts[item.id]) {
      itemCounts[item.id]++;
    } else {
      itemCounts[item.id] = 1;
    }
  });

  return (
    <div>
      <h1 className='font-medium  ml-8 text-[30px]'>Cart</h1>
      <ul>
        {Object.keys(itemCounts).map((itemId) => (
          <li className='ml-14 mt-10' key={itemId}>
            {cart.find((item) => item.id === Number(itemId)).name}:   {itemCounts[itemId]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
