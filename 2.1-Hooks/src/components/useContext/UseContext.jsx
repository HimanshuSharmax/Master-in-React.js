import React,{ createContext} from 'react'

const AppContext = createContext();

const AppProvider = ({children}) =>{
     const userData = {
          name:"Admin",
          age:26,
     }
     return <AppProvider.Provider value={userData}>
          {children}
     </AppProvider.Provider>
}

export { AppContext, AppProvider}