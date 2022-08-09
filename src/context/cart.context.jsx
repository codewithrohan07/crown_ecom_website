import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOPen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartitems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartitems(addCartItem(cardItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
