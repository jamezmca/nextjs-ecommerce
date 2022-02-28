import Stripe from 'stripe'
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  let sharedState = {/* whatever you want for example (and use it as state)
    todos,
    setTodos,
    refreshTodos,
    updateTodos,
    deleteTodos,
    addTodods
  */}

  const [products, setProducts] = useState([])

  const refreshProducts = async () => {
    try {
      const res = await fetch('/fetchUrl')
      const latestTodos = await res.json()
      setProducts(latestTodos)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

//if not using useContent
//export {AppProvider, AppContext}

export function useAppContext() {
  return useContext(AppContext);
}