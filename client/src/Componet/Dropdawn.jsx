import React ,{useContext, useState} from 'react';
import {NavLink} from 'react-router-dom'
import Classfication from './classfication';
import Context from '../Context/ContextApi';
const Dropdawn = ({sublist})=>{
    const StateContext = useContext(Context);
    const {dropdawn,t} = StateContext;
    return <ul  className={`sidebar-dropdawn`}>
    {
      sublist.map((item)=>{
        return (<li  key={item.id} className={`sidebar-list-item ${dropdawn?"open":null}`}>
            {item.classfication?(<><NavLink role="button"className="sidebar-drop-link">
                        {item.svg}
                        <div className="hidden-sidebar">{t(`${item.name}`)}</div>{item.iconClosed}
                    </NavLink><Classfication list={item.classfication}/></>):<NavLink className="sidebar-drop-link">
                        {item.svg}<div className="hidden-sidebar">{t(`${item.name}`)}</div> </NavLink>}
                </li>
                )
    })
    }
</ul> 
}
export default Dropdawn