import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function useCart() {
  const { totalCard, dispatch } = useContext(CartContext);

  const addToCart = () => dispatch({ type: 'increment' });

  const removeFromCart = () => dispatch({ type: 'decrement' });

  return { totalCard, addToCart, removeFromCart };
}
