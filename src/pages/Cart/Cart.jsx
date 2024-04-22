import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Counter/cartSlice';

function Cart() {
 const cartItems = useSelector(state => state.cart.items);
  console.log(cartItems)
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(addToCart({
        id: 1,
        title: 'Product 1',
        price: 100,
        quantity: 1
      }))}>Add to cart</button>

    </div>
  );
}

export default Cart;