import React from 'react'


import "./Header.css"
import { NavLink } from 'react-router-dom';

const Header = ({onShown,cartItem}) => {
  return (
    <header className='header'>
  <div className='logo'>
      <h1 >Electronics Shop</h1>
    </div>
    <div className='header-links'>
        <ul>
            <li>
            < NavLink className='nav' to='/'>Home</ NavLink>
              </li>
        </ul>
        <ul>
            <li>Store</li>
        </ul>
        <ul>
            <li>
             <NavLink className='nav' to='/about'>About</NavLink> 
              </li>
        </ul>
        

    </div>
    <button className='btn' onClick={onShown}>Cart  <span className='cart-length'>{cartItem.length===0?"":cartItem.length}</span> </button>
  
    </header>
  
  )
}

export default Header
