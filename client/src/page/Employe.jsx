import React ,{useContext} from 'react';
import SideBar from '../Componet/sidebar';
import Navbar from '../Componet/navbar';
import Context from '../Context/Contexts';
const Employe = ()=>{
    const getContext = useContext(Context);
    const {t} = getContext;
    return<>   
    <Navbar/>
    <div className="countainer">
       <SideBar/>
        <main className="content">
            <h1>{t("Employee")}</h1>
        </main>
    </div>
    </> 
}
export default Employe