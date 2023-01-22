import React ,{useContext,useEffect} from 'react';
import { Typography } from '@mui/material';
import SideBar from '../Componet/sidebar';
import Navbar from '../Componet/navbar';
import Context from '../Context/Contexts';
export const Home = ()=>{
    const getContext = useContext(Context);
    const {t,setAuthentication} = getContext;
    return<>  
    <Navbar/>
    <div className="countainer">
       <SideBar/>
        <main className="content">
            <Typography variant='h1'>{t("Home")}</Typography>
        </main>
    </div>
    </> 
}
