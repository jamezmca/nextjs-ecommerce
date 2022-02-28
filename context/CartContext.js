import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [products, setProducts] = useState([])
  let sharedState = {/* whatever you want for example (and use it as state)
    todos,
    setTodos,
    refreshTodos,
    updateTodos,
    deleteTodos,
    addTodods
    
  */
    products,
    setProducts
  }


  // const refreshProducts = async () => { EXAMPLE
  //   try {
  //     const res = await fetch('/fetchUrl')
  //     const latestTodos = await res.json()
  //     setProducts(latestTodos)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  function addProduct(newProduct) {

  }

  async function purchase() {

  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

//if not using useContent
//export {AppProvider, AppContext} 
//would then be like const {setTodos} = useContext()

export function useAppContext() {
  return useContext(AppContext);
}