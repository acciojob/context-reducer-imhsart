import React from "react";
import { createContext, useState } from "react";

export const authContext = createContext()

const AuthProvider = ({children}) => {
  const [itemList, setItemList] = useState([])
  return (
    <authContext.Provider value={{itemList, setItemList}}>
      {children}
    </authContext.Provider>
  )
} 

export default AuthProvider