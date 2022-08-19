import React from "react";
import { AuthContext } from "../authentication/AuthProvider";


function useAuth() {
    return React.useContext(AuthContext);
  }

export default useAuth
