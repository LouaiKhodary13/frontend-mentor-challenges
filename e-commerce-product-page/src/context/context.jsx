import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import reducer from '../reducer/reducer';

const AppContext = createContext();
// Initial state
const initialState = {
  showCart: false,
  product: { amount: 0, price: 125.0 },
  total: 0,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // togging the empty cart
  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  //  increasing items
  const incCart = () => {
    dispatch({ type: 'INC_CART' });
  };

  const decCart = () => {
    dispatch({ type: 'DEC_CART' });
  };

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cartItems]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        incCart,
        toggleCart,
        decCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
