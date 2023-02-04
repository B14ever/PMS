import React,{createContext,useState} from 'react'
import i18n from 'i18next';
import {useTranslation } from 'react-i18next';
const Context =  createContext({});
export const  ContextProvider =({ children })=> {
    const {t} = useTranslation()
    const [toggle,setToggle]= useState(true);
    const [langBtn,setLangBtn] = useState(false);
    const [dropdawn,setDropDawn] = useState(false);
    const [load,setLoad] = useState(5);
    const [find,setFind]= useState('')
    const handleDropDawn=()=>
    {
     setDropDawn(!dropdawn)
    }
   
    const HandleLoad = (e)=>{
        setLoad(e.target.value)
           }
     const HandleFind = (e)=>{
        setFind(e.target.value)
         }
    return <Context.Provider value={{toggle,setToggle,langBtn,setLangBtn,dropdawn,handleDropDawn,load,HandleLoad,find,HandleFind,t,i18n}}>
           {children}
   </Context.Provider>
}

export default Context