import React ,{useContext,useEffect} from 'react';
import { Typography } from '@mui/material';
import SideBar from '../Componet/sidebar';
import Navbar from '../Componet/navbar';
import Box from '../Componet/Box';
export const Home = ()=>{
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
