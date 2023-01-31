import React ,{useContext,useEffect} from 'react';
import { Typography } from '@mui/material';
import SideBar from '../Componet/sidebar';
import Navbar from '../Componet/navbar';
import Context from '../Context/Contexts';
import Box from '../Componet/Box';
export const Home = ()=>{
    const getContext = useContext(Context);
    const {t,setAuthentication} = getContext;
    return<>  
    <Navbar/>
    <div className="countainer">
       <SideBar/>
        <main className="content">
            <Box/>
        </main>
    </div>
    </> 
}
