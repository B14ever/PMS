import React ,{useContext,useEffect,useReducer} from 'react';
import SideBar from '../Componet/sidebar';
import Navbar from '../Componet/navbar';
import Context from '../Context/Contexts';
import PageHeader from '../Componet/PageTitle';
import usePostData from '../Hook/PostData';
const intialstate ={
  Propertycategory:"",
  PropertySubcategory:"",
  PropertyType:"",
  Model:"",
  ShelfNumber:"",
  Mesurment:"",
  ItemType:"",
  Price:"",
  MinValue:"",
  MaxValue:"", 
  ExpireDate:"",
  Photo:"",
  Describtion:""
};
const reducer = (currentState, action) => {
switch (action.type) {
  case "Propertycategory":
    return {...currentState,Propertycategory:action.value};
  case "PropertySubcategory":
    return {...currentState,PropertySubcategory:action.value};
  case "PropertyType":
    return {...currentState,PropertyType:action.value};
  case 'Model':
    return {...currentState,Model:action.value};
  case 'ShelfNumber':
    return {...currentState,ShelfNumber:action.value};
  case 'Mesurment':
   return {...currentState,Mesurment:action.value};
  case 'ItemType':
   return {...currentState,ItemType:action.value};
  case 'Price':
   return {...currentState,Price:action.value};
  case 'MinValue':
   return {...currentState,MinValue:action.value};
  case 'MaxValue':
    return {...currentState,MaxValue:action.value};
  case 'Photo':
    return {...currentState,Photo:action.value};
  case 'ExpireDate':
    return {...currentState,ExpireDate:action.value};
  case 'Describtion':
    return {...currentState,Describtion:action.value};
}
return currentState;
};
function PropertyRegistration() {
  const [data, dispatch] = useReducer(reducer, intialstate);
  const getContext = useContext(Context);
  const {t} = getContext;
  const [res,HandleSubmit] = usePostData({url:'http://localhost:5000/postNewProperty', Data:data})
  useEffect(()=>{
    console.log(data)
  })
  return (
    <div>
      <Navbar/>
      <div className="countainer">
      <SideBar/>
      <main className="content">
        <PageHeader Message= {[t("NewPropertyRegistration")]} />
        <hr />
        <div className="form-countainer">
        <form action="">
        <div className='Form-Control'>
          <div className="input-control">
              <label htmlFor="Propertycategory">{t("Propertycategory")}</label>
              <select name="" id="Propertycategory"  onChange={(e) =>dispatch({ type: "Propertycategory",value:e.target.value})}>
              <option  defaultValue >{t("Propertycategory")}</option>
                 {/* {CostCenternName?.map((data,index)=>
                 {
                  return <option value={CostCenternName[index].Offices_Name} key={index}>{CostCenternName[index].Offices_Name}</option>
                 })} */}
              </select>
              </div>
               <div className="input-control">
               <label htmlFor="PropertySubcategory">{t("PropertySubcategory")}</label>
               <select name="" id="PropertySubcategory"  onChange={(e) =>dispatch({ type: "PropertySubcategory",value:e.target.value})}>
               <option  defaultValue >{t("PropertySubcategory")}</option>
                 {/* {WorkPlaceName?.map((data,index)=>
                 {
                  return <option key={index}>{WorkPlaceName[index].Type_Name}</option>
                 })} */}
              </select>
               </div>
               <div className="input-control">
               <label htmlFor="PropertyType">{t("PropertyType")}</label>
               <input type="text" id='PropertyType'  onChange={(e) =>dispatch({ type: "PropertyType",value:e.target.value})}/>
               </div>
          </div>
          <div className='Form-Control'>
          <div className="input-control">
              <label htmlFor="PropertyCode">{t("PropertyCode")}</label>
               <input type="text" placeholder={t("PropertyCode")} id='PropertyCode' disabled/>
              </div>
               <div className="input-control">
               <label htmlFor="IdentityNumber">{t("IdentityNumber")}</label>
               <input type="text" id='IdentityNumber'  placeholder={t("IdentityNumber")} disabled/>
               </div>
          </div>
          <div className='Form-Control'>
            <div className="input-control">
              <label htmlFor="Model">{t("Model")}</label>
               <input type="text" id='Model' onChange={(e) =>dispatch({ type: "Model",value:e.target.value})} />
              </div>
               <div className="input-control">
               <label htmlFor="ShelfNumber">{t("ShelfNumber")}</label>
               <input type="text" id='ShelfNumber' onChange={(e) =>dispatch({ type: "ShelfNumber",value:e.target.value})} />
               </div>
               <div className="input-control">
               <label htmlFor="Mesurment">{t("Mesurment")}</label>
               <input type="text" id='Mesurment' onChange={(e) =>dispatch({ type: "Mesurment",value:e.target.value})} />
               </div>
               <div className="input-control">
               <label htmlFor="ItemType">{t("ItemType")}</label>
                 <fieldset>
                  <label htmlFor="Fixed">{t("Fixed")}
                  <input type="radio" id='Fixed' value="ቆሚ ንብረት" onClick={(e) =>dispatch({ type: "ItemType",value:e.target.value})} />
                  </label>
                  <label htmlFor="PropertyII">{t("PropertyII")}
                  <input type="radio" id='PropertyII' value="አላቂ ንብረት" onClick={(e) =>dispatch({ type: "ItemType",value:e.target.value})}/>
                  </label>
                  
                 </fieldset>
               </div>
          </div>
          <div className='Form-Control'>
            <div className="input-control">
              <label htmlFor="Price">{t("Price")}</label>
               <input type="number" id='Price' onChange={(e) =>dispatch({ type: "Price",value:e.target.value})} />
              </div>
               <div className="input-control">
               <label htmlFor="MinValue">{t("MinValue")}</label>
               <input type="number" id='MinValue' onChange={(e) =>dispatch({ type: "MinValue",value:e.target.value})} />
               </div>
               <div className="input-control">
               <label htmlFor="number">{t("MaxValue")}</label>
               <input type="number" id='MaxValue' onChange={(e) =>dispatch({ type: "MaxValue",value:e.target.value})} />
               </div>
               <div className="input-control">
               <label htmlFor="ExpireDate">{t("ExpireDate")}</label>
               <input type="text" id='ExpireDate' onChange={(e) =>dispatch({ type: "ExpireDate",value:e.target.value})} />
               </div>
          </div>
          <div className="Form-Control">
          <div className="input-control">
          <label htmlFor="number">{t("ItemPicture")}</label>
            <fieldset>
            <img src={`../image/${data.Photo?data.Photo:'store.jpg'}`} alt="" className='Emplyee-Photo' />
           <input type="file" name="" id="photo" onChange={(e) =>dispatch({ type: "Photo",value:e.target.files[0].name})} />
            </fieldset>
            </div>
            <div className="input-control">
            <label htmlFor="Describtion">{t("Describtion")}</label>
              <textarea onChange={(e) =>dispatch({ type: "Describtion",value:e.target.value})}  id="Describtion" cols="30" rows="9"></textarea>
            </div>
            <div className="input-control">
            <div className="submit-control">
                    <button style={{  background: '#3071E7'}} type='submit' onClick={HandleSubmit}  >{t("Registor")}</button>
                    <button  style={{  background: '#DA0037'}} type='submit'>{t("Cancle")}</button>
              </div>
            </div> 
          </div>
          </form>
          </div>
        </main>
      </div>
    </div>
  )
}

export default PropertyRegistration
