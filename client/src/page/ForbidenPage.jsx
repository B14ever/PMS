import React ,{useContext,useEffect} from 'react';
import { Typography } from '@mui/material';
import SideBar from '../Componet/sidebar';
import Navbar from '../Componet/navbar';
import Context from '../Context/Contexts';
function ForbidenPage() {
  const getContext = useContext(Context);
    const {t,setAuthentication} = getContext;
    return<>  
    <Navbar/>
    <div className="countainer">
       <SideBar/>
        <main className="content">
            <h1>ያልተፈከደ</h1>
        </main>
    </div>
    </> 
}

export default ForbidenPage
