import React, { useEffect, useState, useContext, useReducer } from "react";
import SideBar from "../Componet/sidebar";
import Navbar from "../Componet/navbar";
import { FaInstagram } from "react-icons/fa";
import Context from "../Context/Contexts";
import SubmitButton from "../Componet/SubmitButton";
import { BsGear } from "react-icons/bs";
import { useGetData } from "../Hook/GetData";
const intialstate = {
  FirstName: "",
  MidleName: "",
  LastName: "",
  PhoneNumber: "",
  Address: "",
};
const reducer = (currentState, action) => {
  switch (action.type) {
    case "HandleChange":
      return { ...currentState, [action.name]: action.value };
  }
  return currentState;
};

function Profile() {
  const getContext = useContext(Context);
  const { Register, Defualt, HandleRegister, t } =
    getContext;
  const Email = sessionStorage.getItem("autenthicate");
  const [data] = useGetData(
    `http://localhost:5000/getEmployeeInfo?Email=${Email}`
  );
  const [Data, dispatch] = useReducer(reducer, intialstate);
  return (
    <>
      <Navbar />
      <div className="countainer">
        <SideBar />
       
          
            <div className="setting-countainer">
              <div className="setting-header">
                <div className="header-list">
                 
                  <button className="setting-btn" onClick={HandleRegister}>
                  Register 
                  </button>
                 
                </div>
              </div>
              <div className={`setting-countent ${Defualt ? "Defualt" : ""}`}>
                <div className={` Register  ${  Register  ? "Show" : ""}`}>
                  <div className="Form-Control">
                    <div className="input-control">
                      <label htmlFor="Model">First Name</label>
                      <input
                        type="text"
                        name="FirstName"
                        onChange={(e) =>
                          dispatch({
                            type: "HandleChange",
                            value: e.target.value,
                            name: e.target.name,
                          })
                        }
                      />
                    </div>
                    <div className="input-control">
                      <label htmlFor="Model">Middle Name</label>
                      <input
                        type="text"
                        name="MidleName"
                        onChange={(e) =>
                          dispatch({
                            type: "HandleChange",
                            value: e.target.value,
                            name: e.target.name,
                          })
                        }
                      />
                    </div>
                    <div className="input-control">
                      <label htmlFor="Model">Last Name</label>
                      <input
                        type="text"
                        name="LastName"
                        onChange={(e) =>
                          dispatch({
                            type: "HandleChange",
                            value: e.target.value,
                            name: e.target.name,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="Form-Control">
                    <div className="input-control">
                      <label htmlFor="Model">Email Address</label>
                      <input
                        type="text"
                        name="Email Address"
                        onChange={(e) =>
                          dispatch({
                            type: "HandleChange",
                            value: e.target.value,
                            name: e.target.name,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="Form-Control">
                    <div className="input-control">
                      <label htmlFor="Model">Phone</label>
                      <input
                        type="text"
                        name="Address"
                        onChange={(e) =>
                          dispatch({
                            type: "HandleChange",
                            value: e.target.value,
                            name: e.target.name,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="Form-Control">
                    <div className="input-control">
                      <label htmlFor="Model">Password</label>
                      <input
                        type="Password"
                        name="Password"
                        onChange={(e) =>
                          dispatch({
                            type: "HandleChange",
                            value: e.target.value,
                            name: e.target.name,
                          })
                        }
                      />
                    </div></div>
                  <SubmitButton
                    API={`http://localhost:5000/UpdateGeneralProfile?Email=${Email}`}
                    DATA={Data}
                  />
                </div>
              
                </div>
              </div>
            </div>
          
      
     
    </>
  );
}

export default Profile;
