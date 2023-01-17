import React,{createContext,useState,useRef} from 'react'
import i18n from 'i18next';
import {useTranslation } from 'react-i18next';
const Context =  createContext({});
export const  ContextProvider =({ children })=> {
    const {t} = useTranslation()
    const [authentication,setAuthentication] = useState(false)
    const [authorization,setAuthorization] = useState("")
    const [toggle,setToggle]= useState(true);
    const [langBtn,setLangBtn] = useState(false);
    const [dropdawn,setDropDawn] = useState(false);
    const dropRef = useRef(); 
    const handleDropDawn=()=>
    {
     setDropDawn(!dropdawn)
    }
    return <Context.Provider value={{toggle,setToggle,langBtn,setLangBtn,dropdawn,dropRef,handleDropDawn,authentication,setAuthentication,authorization,setAuthorization,t,i18n}}>
           {children}
   </Context.Provider>
}

export default Context