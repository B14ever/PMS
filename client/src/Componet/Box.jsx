import React, {useEffect,useState,useContext} from 'react'
import * as IconName  from "react-icons/fa";
import Context from '../Context/Contexts';
import {NavLink} from 'react-router-dom'
import { useGetTotalData } from '../Hook/GetData';
function Box() {
  const getContext = useContext(Context);
   const {t} = getContext;
  const [employe] = useGetTotalData("http://localhost:5000/getTotalEmploye");
  const [department]= useGetTotalData("http://localhost:5000/getdepartment");
  return (
    <div className='box-countainer'>
         <div className="box">
            <div className="main-box">
                 <IconName.FaUniversity className='box-icon'/>
              <div className="box-info">
                 <div className="box-text">{department}</div>
                 <div className='box-text'>{t("Costcenters")}</div>
              </div>
            </div>
          <div className='link-boxs'>
          <NavLink>{t("Details")}</NavLink>
          </div>
         </div>
         <div className="box">
         <div className="main-box">
                 <IconName.FaUsers className='box-icon'/>
              <div className="box-info">
                 <div className="box-text">{employe}</div>
                 <div className='box-text'>{t("Employee")}</div>
              </div>
            </div>
            <div className='link-boxs'>
            <NavLink>{t("Details")}</NavLink>
             </div>
         </div>
         <div className="box">
         <div className="main-box">
                 <IconName.FaCubes className='box-icon'/>
              <div className="box-info">
                 <div className="box-text">12</div>
                 <div className='box-text'>{t("pro")}</div>
              </div>
            </div>
          <div className='link-boxs'>
          <NavLink>{t("Details")}</NavLink>
          </div>
         </div>
         <div className="box">
         <div className="main-box">
                 <IconName.FaCartPlus className='box-icon'/>
              <div className="box-info">
                 <div className="box-text">12</div>
                 <div className='box-text'>{t("Income")}</div>
              </div>
            </div>
          <div className='link-boxs'>
          <NavLink>{t("Details")}</NavLink>
          </div>
         </div>
         <div className="box">
         <div className="main-box">
                 <IconName.FaFolderMinus className='box-icon'/>
              <div className="box-info">
                 <div className="box-text">12</div>
                 <div className='box-text'>{t("Cost")}</div>
              </div>
            </div>
          <div className='link-boxs'>
          <NavLink>{t("Details")}</NavLink>
          </div>
         </div>
         <div className="box">
          <div className="main-box">
                 <IconName.FaCarSide className='box-icon'/>
              <div className="box-info">
                 <div className="box-text">12</div>
                 <div className='box-text'>{t("vechiles")}</div>
              </div>
            </div>
          <div className='link-boxs'>
            <NavLink>{t("Details")}</NavLink>
          </div>
         </div>
    </div>
  )
}

export default Box
