import React ,{useContext,useEffect,useState} from 'react';
import SideBar from '../Componet/sidebar';
import Navbar from '../Componet/navbar';
import Context from '../Context/Contexts';
import PageHeader from '../Componet/PageTitle';
import RegistorButton from '../Componet/RegistorButton'
import * as bootstrapIcon from "react-icons/bs";
import axios from 'axios';
const Employe = ()=>{
    const getContext = useContext(Context);
    const [employe,setEmployee] = useState([])
    const [load,setLoad] = useState(4);
    const {t} = getContext;
    const TableHeading = [t("Order"),t("EmployeePhoto"),t("ID"),t("FullName"),t("Gender"),
    t("WorkClass"),t("WorkRoom"),t("Action")];
    useEffect(()=>{
        const GetEmploye = async ()=>{
            try{
                const responce = await axios.get("http://localhost:5000/getEmployes")
    
                setEmployee(responce.data);
            }
            catch(err){
                console.error(err)
            }
        }
        GetEmploye()
   },[])
      const HandleChange = (e)=>{
    setLoad(e.target.value)
       }
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
            <div className="loadMore">
                 <select name="" id="" onChange={HandleChange}>
                     <option value="10">5</option>
                     <option value="15">10</option>
                     <option value="20">15</option>
                    <option value="25">20</option>
                </select>           
             </div>
            <div className='Table'>
               <table>
               <thead>
                    <tr>{TableHeading.map((data,index)=><th key={index}>{data}</th>)}</tr>
              </thead>
              <tbody>
                   {employe?.slice(0,load).map((data, index) => (
                        <tr key={index}>
                         <td>{index+1}</td>
                         <td>{employe[index].Photo}</td>
                         <td>{employe[index].ID_Number}</td>
                         <td>{employe[index].First_Name} {employe[index].Last_Name} </td>
                         <td>{employe[index].Sex}</td>
                         <td>{employe[index].Job_Title}</td>
                         <td>{employe[index].Department}</td>
                         <td><button><bootstrapIcon.BsFillFileEarmarkCheckFill/></button>
                             <button><bootstrapIcon.BsFillFileEarmarkPersonFill/></button>
                             <button><bootstrapIcon.BsTrashFill/></button>
                         </td>
                        </tr>
                         )) }                  
              </tbody>
           </table>
         </div></>
}
        </main>
    </div>
    </> 
}
export default Employe