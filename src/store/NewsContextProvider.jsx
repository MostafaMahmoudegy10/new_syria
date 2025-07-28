import {createContext,useState} from 'react'

export const NewsContext=createContext({
    userLooged:false,  
    handleUserLogged:()=>{}  
});


const NewsContextProvider = ({children}) => {
const [userLogged, setUserLogged] = useState(false);

  function handleUserLogged() {
    setUserLogged((prev) => !prev);
  }

  const cntx={
    userLogged,
    handleUserLogged,    
  }
    return (
    <NewsContext.Provider value={cntx}>
        {children}
    </NewsContext.Provider>
  )
}

export default NewsContextProvider; 

