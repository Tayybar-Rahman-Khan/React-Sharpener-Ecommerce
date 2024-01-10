import { useState, useRef, useContext,useEffect } from "react";
import classes from "./AuthForm.module.css";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Store/AuthContex";


const AuthForm = (props) => {
  const navigate=useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const AuthCtx = useContext(AuthContext);
  const [tokenExpirationTimer, setTokenExpirationTimer] = useState(null);
  const autoLogout = () => {
    AuthCtx.logout();

  };
  const setupExpirationTimer = (expirationTime) => {
    const timer = setTimeout(autoLogout, expirationTime);
    setTokenExpirationTimer(timer);
  };

  useEffect(() => {
    return () => {
      if (tokenExpirationTimer) {
        clearTimeout(tokenExpirationTimer);
      }
    };
  }, [tokenExpirationTimer]);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyChK707mathgXZfxOEybHq61Gomczbf1eU";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyChK707mathgXZfxOEybHq61Gomczbf1eU";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authenication failed";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        data.expiresIn = 300;
        const expirationTime = parseInt(data.expiresIn) * 1000; // Convert to milliseconds
        AuthCtx.login(data.idToken);
        setupExpirationTimer(expirationTime);

      navigate('/');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Loading...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;