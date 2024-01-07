import React, { useState } from 'react';
import './App.css';
import data from './components/Back/Data/Data';
import Header from './components/Font/Header/Header';
import Product from './components/Font/Product';
import Cart from './components/Font/Cart/Cart';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './components/Font/Header/Pages/About/About';
import Home from './components/Font/Header/Pages/Home/Home';
import Contact from './components/Font/Header/Pages/Contact/Contact';

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
async function addDetail(detail) {
  try {
    const response = await fetch('https://trk-ecommerce-default-rtdb.firebaseio.com/detail.json', {
      method: 'POST',
      body: JSON.stringify(detail),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to add detail.');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error adding detail:', error.message);
    // You can add further error handling or display error messages to the user here.
  }
}


  return (
    <div className="App">
      <Router>
    <Header onShown={shownCartHandler} cartItem={cartItem} />
     <Routes>
      <Route path='/' element={   <Product productItems={productItems}  handleAddProduct={handleAddProduct}/>}/>
      <Route path="/about" element= {<About/>}/>      
      <Route path='/home' element={<Home/>}/>
      <Route path='/contact' element={<Contact onAddDetail={addDetail}/>}/>
    </Routes>





      {cartShown && <Cart 
      onhidden={hiddenCartHandler}
      cartItem={cartItem} 
      handleAddProduct={handleAddProduct}
      handleRemoveProduct={handleRemoveProduct}
      handleCartClearance={handleCartClearance}
      />}
      </Router>
    </div>
  );
}


export default App;
