import React ,{useContext} from 'react';
import i18n from "i18next"
import {useTranslation } from 'react-i18next';
import SideBar from '../Componet/sidebar';
import Navbar from '../Componet/navbar';
import Context from '../Context/ContextApi';
import useToogleHook from '../Hook/useToogleHook';
export const Home = ()=>{
    const {t} = useTranslation();
    const [toggle,setToggle,langBtn,setLangBtn,dropdawn,dropRef,handleDropDawn] = useToogleHook()
    return<> 
    <Context.Provider value={{toggle,setToggle,langBtn,setLangBtn,dropdawn,handleDropDawn,dropRef,t}}>  
    <Navbar/>
    <div className="countainer">
       <SideBar/>
        <main className="content">
            <h1>{t("Home")}</h1>
        </main>
    </div>
   </Context.Provider>
    </> 
}
