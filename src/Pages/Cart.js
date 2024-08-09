// Cart.js
import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.css';

const Cart = () => {
      const cartItems = useSelector(state => state.cartItems)
      console.log('Current Cart Items:', cartItems);

  const cartTotal = useSelector(state => state.cartTotal)

  return (
    <div className='cart'>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className='cart-item'>
                <img src={item.image} alt={item.name} className='cart-item-image' />
                <div className='cart-item-details'>
                  <h2>{item.name}</h2>
                  <p>Price: ${item.new_price}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className='cart-total'>
            <h2>Total: ${cartTotal.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
