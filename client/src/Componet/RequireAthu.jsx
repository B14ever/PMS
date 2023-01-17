import React, { useContext,useEffect} from "react";
import { Navigate,Outlet } from "react-router-dom";
import Context  from "../Context/Contexts";
const RequireAuth =  ()=>{;
    const getContext = useContext(Context)
    const {authentication} = getContext;
    useEffect(()=>{
        window.localStorage.setItem('authentication',JSON.stringify(authentication))
      },[authentication])
    return <>
       {authentication?<Outlet/>:<Navigate to="/"/>}
    </>
}
export default RequireAuth;