import React from "react";
import { Navigate,Outlet } from "react-router-dom";
const RequireAuth = ({Autherazetion})=>{
   
    return <>
       {
       sessionStorage.getItem("autenthicate")?(Autherazetion.includes(JSON.parse(sessionStorage.getItem("autherazetion")))?
       <Outlet/>:<Navigate to="/Forbiden"/>):<Navigate to="/"/>
       }
    </>
}
export default RequireAuth;