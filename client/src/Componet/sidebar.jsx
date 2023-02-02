import React ,{useContext} from 'react';
import { MiddleSideBarList} from '../Data/list';
import photo from '../image/images.jpg'
import Context from '../Context/Contexts';

import List from './list';
const SideBar = ()=>{
    const StateContext = useContext(Context);
    const {toggle,t} = StateContext;
    return <aside className={`sidebar ${toggle?" ":"open-sidebar"}`}>
    <div className="top-sidebar">
        <a href="#" className="channel-logo"><img src={photo} alt="Channal logo"/></a>
        <div className="hidden-sidebar">{t("Company")}</div>
        <div className="hidden-sidebar">{t("Software")}</div>
    </div>
    <div className="middle-sidebar">
        <ul className="sidebar-list">
            {
                MiddleSideBarList.map((list)=>{
                  return  <List item={list} key={list.id}/>})
            }
        </ul>
    </div>
</aside>
}
export default SideBar