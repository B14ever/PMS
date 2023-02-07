import React ,{useContext,useEffect,useReducer} from 'react';
import SideBar from '../Componet/sidebar';
import Navbar from '../Componet/navbar';
import Context from '../Context/Contexts';
import PageHeader from '../Componet/PageTitle';
import { useGetData } from '../Hook/GetData';
import usePostData from '../Hook/PostData';
const intialstate ={
    FirstName:"",
    MidleName:"",
    LastName:"",
    Gender:"",
    PhoneNumber:"",
    Mobile:"",
    Email:"",
    Address:"",
    CostCenterName:"",
    WorkPlaceName:"",
    WorkPostionName:"",
    Photo:"", 
};
const reducer = (currentState, action) => {
  switch (action.type) {
    case "FirstName":
      return {...currentState,FirstName:action.value};
    case "MidleName":
      return {...currentState,MidleName:action.value};
    case "LastName":
      return {...currentState,LastName:action.value};
      case "Gender":
        return {...currentState,Gender:action.value};
    case "PhoneNumber":
      return {...currentState,PhoneNumber:action.value};
    case 'Mobile':
      return {...currentState,Mobile:action.value};
     case 'Email':
        return {...currentState,Email:action.value};
        case 'Address':
          return {...currentState,Address:action.value};
       case 'CostCenterName':
          return {...currentState,CostCenterName:action.value};
    case 'WorkPlaceName':
     return {...currentState,WorkPlaceName:action.value};
      case 'WorkPostionName':
     return {...currentState,WorkPostionName:action.value};
      case 'Photo':
      return {...currentState,Photo:action.value};
  }
  return currentState;
};
function NewEmployee() {
  
  const getContext = useContext(Context);
  const {t} = getContext;
  const [CostCenternName] =  useGetData('http://localhost:5000/getdepartment');
  const [WorkPlaceName] =  useGetData('http://localhost:5000/getjobTitles');
  const [data, dispatch] = useReducer(reducer, intialstate);
  const [res,HandleSubmit] = usePostData({url:'http://localhost:5000/postNewEmloyee', Data:data})
    
  return <>
       <Navbar/>
    <div className="countainer">
    <SideBar/>
      <main className="content">
        <PageHeader Message= {[t("NewEmployeeRegistration")]} />
        <hr />
        <div className="form-countainer">
        <form action="">
          <div className='Form-Control'>
            <div className="input-control">
              <label htmlFor="first-name">{t("FirstName")}</label>
               <input type="text" id='first-name' onChange={(e) =>dispatch({ type: "FirstName",value:e.target.value})} />
              </div>
               <div className="input-control">
               <label htmlFor="middle-name">{t("MiddleName")}</label>
               <input type="text" id='middle-name' onChange={(e) =>dispatch({ type: "MidleName",value:e.target.value})} />
               </div>
               <div className="input-control">
               <label htmlFor="last-name">{t("LastName")}</label>
               <input type="text" id='last-name' onChange={(e) =>dispatch({ type: "LastName",value:e.target.value})} />
               </div>
               <div className="input-control">
               <label htmlFor="gender">{t("Gender")}</label>
                 <fieldset>
                  <label htmlFor="male">{t("Male")}
                  <input type="radio" id='male' value="ወንድ" onClick={(e) =>dispatch({ type: "Gender",value:e.target.value})} />
                  </label>
                  <label htmlFor="FFemale">{t("Female")}
                  <input type="radio" id='Female' value="ሴት" onClick={(e) =>dispatch({ type: "Gender",value:e.target.value})}/>
                  </label>
                 </fieldset>
               </div>
          </div>
          <div className='Form-Control'>
          <div className="input-control">
              <label htmlFor="PhoneNumber">{t("PhoneNumber")}</label>
               <input type="text" id='PhoneNumber' onChange={(e) =>dispatch({ type: "PhoneNumber",value:e.target.value})} />
              </div>
               <div className="input-control">
               <label htmlFor="Mobile">{t("Mobile")}</label>
               <input type="text" id='Mobile'  onChange={(e) =>dispatch({ type: "Mobile",value:e.target.value})}/>
               </div>
          </div>
            <div className="Form-Control">
            <div className="input-control">
               <label htmlFor="Email">{t("Email")}</label>
               <input type="email" id='Email'  onChange={(e) =>dispatch({ type: "Email",value:e.target.value})}/>
               </div>
               <div className="input-control">
               <label htmlFor="Adress">{t("Address")}</label>
               <input type="text" id='Adress' onChange={(e) =>dispatch({ type: "Address",value:e.target.value})} />
               </div>
            </div>
          <div className='Form-Control'>
          <div className="input-control">
              <label htmlFor="CostCenterName">{t("CostCenterName")}</label>
              <select name="" id="CostCenterName"  onChange={(e) =>dispatch({ type: "CostCenterName",value:e.target.value})}>
              <option  defaultValue >{t("CostCenters")}</option>
                 {CostCenternName?.map((data,index)=>
                 {
                  return <option value={CostCenternName[index].Offices_Name} key={index}>{CostCenternName[index].Offices_Name}</option>
                 })}
              </select>
              </div>
               <div className="input-control">
               <label htmlFor="WorkPlaceName">{t("WorkPlaceName")}</label>
               <select name="" id="WorkPlaceName"  onChange={(e) =>dispatch({ type: "WorkPlaceName",value:e.target.value})}>
               <option  defaultValue >{t("WorkPlaces")}</option>
                 {WorkPlaceName?.map((data,index)=>
                 {
                  return <option key={index}>{WorkPlaceName[index].Name}</option>
                 })}
              </select>
               </div>
               <div className="input-control">
               <label htmlFor="WorkPostion">{t("WorkPostion")}</label>
          <input type="text" id='WorkPostion' onChange={(e) =>dispatch({ type: "WorkPostionName",value:e.target.value})}/>
               </div>
          </div>
          <div className="Form-Control">
          <div className="input-control">
          <label htmlFor="number">{t("EmployeePhoto")}</label>
            <fieldset>
              <img src={`../image/${data.Photo?data.Photo:'1vajvt.jpg'}`} alt="" className='Emplyee-Photo' />
           <input type="file" name="" id="photo" onChange={(e) =>dispatch({ type: "Photo",value:e.target.files[0].name})} />
            </fieldset>
            </div>
            <div className="input-control">
            <div className="submit-control">
                    <button style={{  background: '#3071E7'}} type='submit' onClick={HandleSubmit} >{t("Registor")}</button>
                    <button  style={{  background: '#DA0037'}} type='submit'>{t("Cancle")}</button>
              </div>
            </div> 
          </div>
        </form>
        </div>
      </main>
    </div>
    </>
    
  
}

export default NewEmployee
