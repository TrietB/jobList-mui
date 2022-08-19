import React from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";

export default function AuthProvider({ children }) {
    let [user, setUser] = React.useState(null);
  
    let signin = (newUser, callback) => {
      setUser(newUser)
      callback()
    };
  
    let signout = (callback) => {
        setUser(null);
        callback();     
    };
  
    let value = { user, signin, signout };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }


  let AuthContext = React.createContext(null);




  


export {AuthProvider, AuthContext} 