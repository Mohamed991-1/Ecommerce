// Items.jsx
import React from 'react';
import './Items.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/Actions'; // Adjust the path according to your folder structure

export const Items = (props) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: props.id,
      name: props.name,
      image: props.image,
      new_price: props.new_price,
      old_price: props.old_price
    }));
    console.log(props.id + ' added')
  };

  return (
    <div className='item'>
      <img src={props.image} alt='' />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          ${props.new_price}
        </div>
        <div className="item-price-old">
          ${props.old_price}
        </div>
      </div>
      <button className='add-to-cart-btn' onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};
