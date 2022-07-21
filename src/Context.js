import React, {createContext,useState} from 'react'

export const Cart = createContext() // context for cart

const Context = ( { children }) => {
    const [cart,setCart]= useState([]);
    
    return (
    <Cart.Provider value={{cart, setCart}}>{children}</Cart.Provider>  //passing cart and setcart value in provider 
    )}

export default Context
