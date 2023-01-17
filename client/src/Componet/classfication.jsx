import React,{useContext} from 'react'
import {NavLink} from 'react-router-dom'
import Context from '../Context/Contexts';
function Classfication({list}) {
  const StateContext = useContext(Context);
  const {t} = StateContext;
  return <ul className='sidebar-dropdawn-classfication'>
            {
                list.map((item)=>{
                  return  <li key={item.id}>
                        <NavLink  to={item.path} className="sidebar-drop-link">
                        {item.svg}<div className="hidden-sidebar">{t(`${item.name}`)}</div> </NavLink>
                    </li>
                })
            }
  </ul>
    
}

export default Classfication
