import React,{createContext,useState} from 'react'
import i18n from 'i18next';
import {useTranslation } from 'react-i18next';
const Context =  createContext({});
export const  ContextProvider =({ children })=> {
    const {t} = useTranslation()
    const [toggle,setToggle]= useState(true);
    const [langBtn,setLangBtn] = useState(false);
    const [dropdawn,setDropDawn] = useState(false);
    const handleDropDawn=()=>
    {
     setDropDawn(!dropdawn)
    }
    return <Context.Provider value={{toggle,setToggle,langBtn,setLangBtn,dropdawn,handleDropDawn,t,i18n}}>
           {children}
   </Context.Provider>
}

export default Context