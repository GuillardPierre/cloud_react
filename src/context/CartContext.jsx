import { createContext, useReducer } from 'react';
import { cartReducer, initialState } from '../reducers/cartReducer';

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ totalCard: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
