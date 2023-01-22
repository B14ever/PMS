import React, { useContext,useEffect} from "react";
import { Navigate,Outlet } from "react-router-dom";
import Context  from "../Context/Contexts";
const RequireAuth =  ()=>{
    return <>
       {
       sessionStorage.getItem("autenthicate")?<Outlet/>:<Navigate to="/"/>
       }
    </>
}
export default RequireAuth;