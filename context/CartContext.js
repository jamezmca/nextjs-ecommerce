import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [products, setProducts] = useState([])
  const [prices, setPrices] = useState([])
  console.log(prices)
  let sharedState = {
    products,
    setProducts,
    prices,
    setPrices
  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}