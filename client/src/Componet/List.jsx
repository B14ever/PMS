import React ,{useContext,useRef} from 'react';
import i18n from 'i18next';
import {useTranslation } from 'react-i18next';
import {NavLink} from 'react-router-dom'
import Context from '../Context/ContextApi';
import Dropdawn from './Dropdawn';
const List = ({item})=>{
    const {t} = useTranslation();
    const StateContext = useContext(Context);
    const {dropdawn,handleDropDawn,dropRef} = StateContext;
    const {name,svg,iconClosed,submenu} = item;
     return <li ref={dropRef} onClick={handleDropDawn} className={`sidebar-list-item ${dropdawn?"show":null}`}>
              { submenu ?(<><NavLink  role="button"className="sidebar-link ">
                 {svg}<div className="hidden-sidebar ">{t(`${name}`)}</div>{iconClosed}
                </NavLink><Dropdawn sublist={submenu}/></>):<NavLink className="sidebar-link ">
                 {svg}<div className="hidden-sidebar ">{t(`${name}`)}</div> </NavLink>}  
       </li>
}
export default List