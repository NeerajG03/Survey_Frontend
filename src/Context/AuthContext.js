import React, { useState } from "react";

export const authContext = React.createContext();

export default function AuthContext(props) {
  const [authUser, setAuthUserState] = useState(null);

  const setAuthUser = async (auth_user) => {
    setAuthUserState(auth_user);
    window.localStorage.setItem("authUser", JSON.stringify(auth_user));
  };

  const getAuthUser = async () => {
    setAuthUserState(JSON.parse(window.localStorage.getItem("authUser")));
  };

  return (
    <authContext.Provider value={{ authUser, setAuthUser, getAuthUser }}>
      {props.children}
    </authContext.Provider>
  );
}