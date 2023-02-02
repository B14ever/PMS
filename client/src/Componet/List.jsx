import React ,{useContext,useRef} from 'react';
import i18n from 'i18next';
import {useTranslation } from 'react-i18next';
import {NavLink} from 'react-router-dom'
import Context from '../Context/Contexts';
import Dropdawn from './Dropdawn';
const List = ({item})=>{
    const {t} = useTranslation();
    const StateContext = useContext(Context);
    const {handleDropDawn,dropRef} = StateContext;
    const {id,name,svg,submenu} = item;
     return <li id ={id} ref={dropRef} onClick={handleDropDawn} 
     className="sidebar-list-item">
              { submenu ?(<><NavLink  role="button"className="sidebar-link ">
                <div className="icon">{svg}<div className="name">{t(`${name}`)}</div></div>
                <div className="hidden-sidebar ">{t(`${name}`)}</div>
                </NavLink><Dropdawn sublist={submenu}/></>):<NavLink className="sidebar-link ">
                 {svg}<div className="hidden-sidebar ">{t(`${name}`)}</div> </NavLink>}  
       </li>
}
export default List