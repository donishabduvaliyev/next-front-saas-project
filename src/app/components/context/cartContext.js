"use client"



import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children ,pageslug }) {
    const [cart, setCart] = useState([]);

     const handleAddToCart = (productToAdd) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === productToAdd.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...productToAdd, quantity: 1 }];
        });
    };

    const handleUpdateCart = (productId, quantity) => {
        if (quantity <= 0) {
            setCart(prevCart => prevCart.filter(item => item.id !== productId));
        } else {
            setCart(prevCart =>
                prevCart.map(item =>
                    item.id === productId ? { ...item, quantity } : item
                )
            );
        }
    };

  return (
    <CartContext.Provider value={{cart , setCart, handleAddToCart, handleUpdateCart ,pageslug}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext)
}