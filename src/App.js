import React, { useState } from 'react';
import './App.css';
import data from './components/Back/Data/Data';
import Header from './components/Font/Header/Header';
import Product from './components/Font/Product';
import Cart from './components/Font/Cart/Cart';
import { CartProvider } from './CartContext';
function App() {
  const { productItems } = data;
  const [cartShown, setCartShown] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  const shownCartHandler = () => {
    setCartShown(true);
  };

  const hiddenCartHandler = () => {
    setCartShown(false);
  };

  const handleAddProduct=(product)=>{
    const ProductExist=cartItem.find((item)=>item.id===product.id);
    if(ProductExist){
      setCartItem(cartItem.map((item)=>item.id===product.id ? {...ProductExist,quantity:ProductExist.quantity+1}:item))
    }
   else{
    setCartItem([...cartItem,{...product,quantity:1}])
   }
  }

  const handleRemoveProduct=(product)=>{
    const ProductExist=cartItem.find((item)=>item.id===product.id);
    if(ProductExist.quantity===1){
      setCartItem(cartItem.filter((item)=>item.id!==product.id));

    }
    else{
      setCartItem(cartItem.map((item)=>item.id===product.id?{...ProductExist,quantity:ProductExist.quantity-1}:item));
    }
  }
const handleCartClearance=()=>{
  setCartItem([]);
}
  return (
    <div className="App">
      <CartProvider>
      <Header onShown={shownCartHandler} cartItem={cartItem} />
      <Product productItems={productItems}  handleAddProduct={handleAddProduct}/>

      {cartShown && <Cart 
      onhidden={hiddenCartHandler}
      cartItem={cartItem} 
      handleAddProduct={handleAddProduct}
      handleRemoveProduct={handleRemoveProduct}
      handleCartClearance={handleCartClearance}
      />}
      </CartProvider>
    </div>
  );
}

export default App;
