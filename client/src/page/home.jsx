import React ,{useContext,useEffect} from 'react';
import SideBar from '../Componet/sidebar';
import Navbar from '../Componet/navbar';
import Context from '../Context/Contexts';
export const Home = ()=>{
    const getContext = useContext(Context);
    const {t,setAuthentication} = getContext;
    useEffect(()=>{
        const auth=  window.localStorage.getItem('authentication');
          console.log(JSON.parse(auth))
          setAuthentication(JSON.parse(auth))
       },[])
    return<>  
    <Navbar/>
    <div className="countainer">
       <SideBar/>
        <main className="content">
            <h1>{t("Home")}</h1>
        </main>
    </div>
    </> 
}
