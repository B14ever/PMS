import React ,{useContext,useEffect,useState} from 'react';
import SideBar from '../Componet/sidebar';
import Navbar from '../Componet/navbar';
import Context from '../Context/Contexts';
import PageHeader from '../Componet/PageTitle';
import RegistorButton from '../Componet/RegistorButton'
import * as bootstrapIcon from "react-icons/bs";
import {useGetData} from '../Hook/GetData';
import LoadMore from '../Componet/LoadMore';
import Find from '../Componet/Find';
const Employe = ()=>{
    const getContext = useContext(Context);
    const {t,load,find} = getContext;
    const [employe] = useGetData(`http://localhost:5000/getEmployes?find=${find}`)
    const TableHeading = [t("Order"),t("EmployeePhoto"),t("ID"),t("FullName"),t("Gender"),
    t("WorkClass"),t("WorkRoom"),t("Action")];
    return<>   
    <Navbar/>
    <div className="countainer">
       <SideBar/>
        <main className="content">
            <div className='content-countainer'>
            <PageHeader Message= {[t("EmployeeList")]} />
            <RegistorButton Message= {[t("NewEmployee"),'/newEmployee']}/>
            </div>
            {employe.length === 0?<h1>Loading...</h1>:<>
            <div className='Table-Componet '><LoadMore/> <Find/></div>
            <div className='Table'>
               <table>
               <thead>
                    <tr>{TableHeading.map((data,index)=><th key={index}>{data}</th>)}</tr>
              </thead>
              <tbody>
                   {employe?.slice(0,load?load:5).map((data, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                         <td>{employe[index].Photo?<img className='Emplyee-Photo' src={`../image/${employe[index].Photo}`}/>:
                         <bootstrapIcon.BsFillPersonFill className='Employee-Picture'/>}</td>
                         <td>{employe[index].ID_Number}</td>
                         <td>{employe[index].First_Name} {employe[index].Last_Name} </td>
                         <td>{employe[index].Sex}</td>
                         <td>{employe[index].Job_Title}</td>
                         <td>{employe[index].Department}</td>
                         <td><div className="table-button">
                            <button><bootstrapIcon.BsFillFileEarmarkCheckFill/></button>
                             <button><bootstrapIcon.BsFillFileEarmarkPersonFill/></button>
                             <button><bootstrapIcon.BsTrashFill/></button>
                           </div>
                         </td>
                        </tr>
                         )) }                  
              </tbody>
           </table>
         </div> </>
}
        </main>
    </div>
    </> 
}
export default Employe