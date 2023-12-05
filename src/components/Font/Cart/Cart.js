import React from 'react';
import './Cart.css'
const Cart = ({ onhidden,cartItem, handleAddProduct,handleRemoveProduct, handleCartClearance}) => {
  const totalPrice=cartItem.reduce((price,item)=>price + item.quantity*item.price,0)
  return (
    <>
   
    <div className='cart'>

   
      <div className='cart-item'>
        <h2 className='cart-items-header'>Cart Items</h2>
        <div className='clear-cart'>{cartItem.length>=1 && (
          <button className='clear-cart-btn' onClick={handleCartClearance}>Clear Cart</button>
        )}</div>
        <div className='cart-div-btn'>
        <button className="cart-btn" onClick={onhidden}>X</button>
        </div>
       
        {cartItem.length === 0 &&
  <div className='cart-item-len'> No items are added. </div>
}

        <div>
          {cartItem.map((item) => (
            <div key={item.id} className='cart-item-list'>
              <img
                className="cart-item-img"
                src={item.image}
                alt={item.name}
              />
              <div className='cart-item-name'>{item.name}</div>
              <div className='cart-item-function'>
              <button className='cart-item-add' onClick={()=>handleAddProduct(item)}>+</button>
              <button className='cart-item-sub' onClick={()=>handleRemoveProduct(item)}>-</button>
                </div>
               <div className='cart-item-price'>{item.quantity}* Rs {item.price}</div>
            </div>
            
          ))}
        </div>
        <div className='cart-item-total'>
          Total price 
          <div className='cart-item-total-price'> Rs {totalPrice}</div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Cart;
