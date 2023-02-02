import React, {useContext} from 'react'
import Context from '../Context/Contexts';
import {useNavigate} from 'react-router-dom'
import { IoPower} from "react-icons/io5";
function LogOut() {
  const navigate = useNavigate();
  const StateContext = useContext(Context);
  const {t} = StateContext;
  const LogOut = ()=>{
    sessionStorage.clear();
    navigate('/');
  }
  return (
      <button onClick={LogOut} className="logout-btn "><IoPower className="sidebar-icon"></IoPower>
      </button>
  )
}

export default LogOut
