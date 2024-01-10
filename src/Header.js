import React from "react";
import { AuthContext } from "../../../Store/AuthContex";
import { useContext } from "react";
import "./Header.css";
import { Link,Navigate } from "react-router-dom";

const Header = ({ onShown, cartItem }) => {
  const authctx = useContext(AuthContext);
  const isLoggedIn = authctx.isLoggedIn;
  return (
    <header className="header">
      <div className="logo">
        <h1>Electronics Shop</h1>
      </div>
      <div className="header-links">
        <nav>
          <ul>

            {isLoggedIn ? (
              <>
                <li>
                  <Link className="nav" to="/home">
                    Home
                  </Link>
                </li>
                <li>
              <Link className="nav" to="/">
                Store
              </Link>
            </li>
                <li>
                  <Link className="nav" to="/about">
                    About
                  </Link>
                </li>

                <li>
                  <Link className="nav" to="/contact">
                    Contact
                  </Link>
                </li>

                <li>
                  <Link className="nav"  onClick={authctx.logout} to="/logout">
                    LogOut
                  </Link>
                </li>

                <li>
                  <Link className="nav" to="/profile">
                    Change Password
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link className="nav" to="/auth">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
      {isLoggedIn ? (
      <button className="btn" onClick={onShown}>
        Cart{" "}
        <span className="cart-length">
          {cartItem.length === 0 ? "" : cartItem.length}
        </span>{" "}
      </button>):(<Navigate to='/auth' />)}
    </header>
  );
};

export default Header;