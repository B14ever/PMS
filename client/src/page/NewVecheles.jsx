import React ,{useContext,useEffect,useReducer} from 'react';
import SideBar from '../Componet/sidebar';
import Navbar from '../Componet/navbar';
import Context from '../Context/Contexts';
import PageHeader from '../Componet/PageTitle';
import { useGetData } from '../Hook/GetData';
import usePostData from '../Hook/PostData';
const intialstate ={
  VehicleType:"",
  VehicleModel:"",
  VehcileYear:"",
  MoterNumber:"",
  Silnder:"",
  Chassis:"",
  PlateNumber:"",
  DateOfPurchase:"",
  Capacity:"",
  TypeofGas:"",
  OwenerIdNumber:"",
  Describtion:"", 
};
const reducer = (currentState, action) => {
  switch (action.type) {
    case "VehicleType":
      return {...currentState,VehicleType:action.value};
    case "VehicleModel":
      return {...currentState,VehicleModel:action.value};
    case "VehcileYear":
      return {...currentState,VehcileYear:action.value};
      case "MoterNumber":
        return {...currentState,MoterNumber:action.value};
    case "Silnder":
      return {...currentState,Silnder:action.value};
    case 'Chassis':
      return {...currentState,Chassis:action.value};
     case 'PlateNumber':
        return {...currentState,PlateNumber:action.value};
        case 'DateOfPurchase':
          return {...currentState,DateOfPurchase:action.value};
       case 'Capacity':
          return {...currentState,Capacity:action.value};
    case 'TypeofGas':
     return {...currentState,TypeofGas:action.value};
      case 'OwenerIdNumber':
     return {...currentState,OwenerIdNumber:action.value};
      case 'Describtion':
      return {...currentState,Describtion:action.value};
  }
  return currentState;
};
function NewVecheles() {
  
  const getContext = useContext(Context);
  const {t} = getContext;
  const [CostCenternName] =  useGetData('http://localhost:5000/getdepartment');
  const [WorkPlaceName] =  useGetData('http://localhost:5000/getjobTitles');
  const [data, dispatch] = useReducer(reducer, intialstate);
  const [res,HandleSubmit] = usePostData({url:'http://localhost:5000/postNewVechlies', Data:data})
    
  return <>
       <Navbar/>
    <div className="countainer">
    <SideBar/>
      <main className="content">
        <PageHeader Message= {[t("NewVechilesRegistrationPage")]} />
        <hr />
        <div className="form-countainer">
        <form action="">
          <div className='Form-Control'>
            <div className="input-control">
              <label htmlFor="VehcilesType">{t("VechilesType")}</label>
               <input type="text" id='VehcilesType' onChange={(e) =>dispatch({ type: "VehicleType",value:e.target.value})} />
              </div>
               <div className="input-control">
               <label htmlFor="vechilesModel">{t("vechilesModel")}</label>
               <input type="text" id='vechilesModel' onChange={(e) =>dispatch({ type: "VehicleModel",value:e.target.value})} />
               </div>
          </div>
          <div className='Form-Control'>
          <div className="input-control">
              <label htmlFor="VechilesYearr">{t("VechilesYear")}</label>
               <input type="text" id='VechilesYear' onChange={(e) =>dispatch({ type: "VehcileYear",value:e.target.value})} />
              </div>
               <div className="input-control">
               <label htmlFor="MoterNumber">{t("VechilesMoterNumber")}</label>
               <input type="text" id='MoterNumber'  onChange={(e) =>dispatch({ type: "MoterNumber",value:e.target.value})}/>
               </div>
               <div className="input-control">
              <label htmlFor="Silnder">{t("VechilesSilnder")}</label>
               <input type="text" id='Silnder' onChange={(e) =>dispatch({ type: "Silnder",value:e.target.value})} />
              </div>
               <div className="input-control">
               <label htmlFor="Chassis">{t("VechilesChasi")}</label>
               <input type="text" id='Chassis'  onChange={(e) =>dispatch({ type: "Chassis",value:e.target.value})}/>
               </div>
          </div>
            <div className="Form-Control">
            <div className="input-control">
               <label htmlFor="PlateNumber">{t("VechilesPlateNumber")}</label>
               <input type="text" id='PlateNumber'  onChange={(e) =>dispatch({ type: "PlateNumber",value:e.target.value})}/>
               </div>
               <div className="input-control">
               <label htmlFor="DateOfPurchase">{t("VechilesDateOfPurchase")}</label>
               <input type="text" id='DateOfPurchase' onChange={(e) =>dispatch({ type: "DateOfPurchase",value:e.target.value})} />
               </div>
               <div className="input-control">
               <label htmlFor="Capacity">{t("VechilesCapacity")}</label>
               <input type="text" id='Capacity'  onChange={(e) =>dispatch({ type: "Capacity",value:e.target.value})}/>
               </div>
               <div className="input-control">
               <label htmlFor="TypeofGas">{t("TypeofGas")}</label>
               <input type="text" id='TypeofGas' onChange={(e) =>dispatch({ type: "TypeofGas",value:e.target.value})} />
               </div>
            </div>
          <div className='Form-Control'>
               <div className="input-control">
               <label htmlFor="OwenerIdNumbe">{t("VechileOwenerIdNumber")}</label>
          <input type="text" id='WOwenerIdNumbe' onChange={(e) =>dispatch({ type: "OwenerIdNumber",value:e.target.value})}/>
               </div>
          </div>
          <div className="Form-Control">
          <div className="input-control">
            <label htmlFor="Describtion">{t("CurrentStateOfVechile")}</label>
              <textarea onChange={(e) =>dispatch({ type: "Describtion",value:e.target.value})}  id="Describtion" cols="30" rows="9"></textarea>
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

export default NewVecheles
