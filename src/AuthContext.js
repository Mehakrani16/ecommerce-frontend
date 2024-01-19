import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [userData, setUserData] = useState(
    //JSON.parse(localStorage.getItem("userData")) ||
    null
  );
  const [cartData, setCartData] = useState([]);

  const login = (newToken, newUser, newCartData) => {
    setIsLoggedIn(true);
    setToken(newToken);
    setUserData(newUser);
    setCartData(newCartData);
  };

  const updateCart = (newCartData) => {
    setCartData(newCartData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken(null);
    setUserData(null);
    setCartData([]);
  };

  useEffect(() => {
    // Update localStorage when token, userData, or cartData changes
    localStorage.setItem("token", token);
    if (userData != undefined) {
      localStorage.setItem("userData", JSON.stringify(userData));
    }

    if (cartData != undefined) {
      localStorage.setItem("cartData", JSON.stringify(cartData));
    }
  }, [token, userData, cartData]);

  // Provide a default value for cartData if it's null or undefined
  const defaultCartData = [];
  const normalizedCartData = cartData || defaultCartData;
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        userData,
        cartData: normalizedCartData,
        login,
        updateCart,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
