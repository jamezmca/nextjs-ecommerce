import { createContext, useContext, useEffect, useState } from 'react';
import localStorage from './localStorage'

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [products, setProducts] = useState([JSON.parse(localStorage.getItem('moongladeCheckout'))] ?? [])
  const [prices, setPrices] = useState([JSON.parse(localStorage.getItem('moongladeItems'))] ?? [])

  let sharedState = {
    products,
    setProducts,
    prices,
    setPrices
  }

  useEffect(() => {
    localStorage.setItem('moongladeItems', JSON.stringify(prices))
  }, [prices])

  useEffect(() => {
    localStorage.setItem('moongladeCheckout', JSON.stringify(prices))
  }, [products])

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}