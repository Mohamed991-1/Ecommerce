import React from 'react';
import { useParams } from 'react-router-dom';

export const Product = () => {
  const { productId } = useParams();
  
  return (
    <div>Product ID: {productId}</div>
  );
}
