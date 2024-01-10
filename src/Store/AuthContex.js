import React, {useState } from 'react'

export const AuthContext = React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{},
});

const AuthContextProvider=(props)=>{
    const [token, setToken] = useState(localStorage.getItem('token'));

    const tokenFromLocalStorage = localStorage.getItem('token');
   const userIsLoggedIn=!!token;

   const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');

  };

    const AuthContextValue={
     token:tokenFromLocalStorage,
     isLoggedIn:userIsLoggedIn,
     login:loginHandler,
     logout:logoutHandler,
    }

    return (
        <AuthContext.Provider value={AuthContextValue}>
            {props.children}
        </AuthContext.Provider>
    )

}
  export default AuthContextProvider