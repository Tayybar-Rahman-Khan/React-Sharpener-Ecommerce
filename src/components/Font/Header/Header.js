import React from 'react'
import "./Header.css"

const Header = ({onShown,cartItem}) => {
  return (
    <header className='header'>
  <div className='logo'>
      <h1 >Electronics Shop</h1>
    </div>
    <div className='header-links'>
        <ul>
            <li>Home</li>
        </ul>
        <ul>
            <li>Store</li>
        </ul>
        <ul>
            <li>About</li>
        </ul>
        

    </div>
    <button className='btn' onClick={onShown}>Cart  <span className='cart-length'>{cartItem.length===0?"":cartItem.length}</span> </button>
  
    </header>
  
  )
}

export default Header
