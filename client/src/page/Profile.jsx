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
  const { General, Securit, Defualt, HandleGeneral, HandleSecurity, t } =
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
        <main className="content">
          <div className="profile-countainer">
            <div className="info-countainer">
              <div className="image">
                <img src={`../image/${data[0]?.Photo}`} alt="" />
                <div className="img_btn">
                  <label htmlFor="pic">
                    <FaInstagram className="profile-icon"></FaInstagram>
                  </label>
                  <input className="input_file" id="pic" type="file" />
                </div>
              </div>
              <div className="user_countainer">
                <div className="user_name">
                  <p>
                    {data[0]?.First_Name} {data[0]?.Middle_Name}{" "}
                    {data[0]?.Last_Name}
                  </p>
                </div>
                <div className="user-info">
                  <p>Job</p>
                  <p>{data[0]?.Job_Title}</p>
                </div>
                <div className="user-info">
                  <p>Gender</p>
                  <p>{data[0]?.Sex}</p>
                </div>
                <div className="user-info">
                  <p>Email</p>
                  <p>{data[0]?.Email}</p>
                </div>
                <div className="user-info">
                  <p>Phone</p>
                  <p>{data[0]?.Phone}</p>
                </div>
                <div className="user-info">
                  <p>Departmnet</p>
                  <p>{data[0]?.Department}</p>
                </div>
                <div className="user-info">
                  <p>Address</p>
                  <p>{data[0]?.Address}</p>
                </div>
                <div className="user-info">
                  <p>Id </p>
                  <p>{data[0]?.ID_Number}</p>
                </div>
              </div>
            </div>
            <div className="setting-countainer">
              <div className="setting-header">
                <div className="header-list">
                  <div className="header-text">
                    Setting <BsGear />
                  </div>
                  <button className="setting-btn" onClick={HandleGeneral}>
                    General
                  </button>
                  <button className="setting-btn" onClick={HandleSecurity}>
                    Securit
                  </button>
                </div>
              </div>
              <div className={`setting-countent ${Defualt ? "Defualt" : ""}`}>
                <div className={`General ${General ? "Show" : ""}`}>
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
                      <label htmlFor="Model">Address</label>
                      <input
                        type="text"
                        name="PhoneNumber"
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
                  <SubmitButton
                    API={`http://localhost:5000/UpdateGeneralProfile?Email=${Email}`}
                    DATA={Data}
                  />
                </div>
                <div className={`Security ${Securit ? "display" : ""}`}>
                  <div className="Form-Control">
                    <div className="input-control">
                      <label htmlFor="Model">Old Email</label>
                      <input type="text" placeholder="Enter Old Email" />
                    </div>
                    <div className="input-control">
                      <label htmlFor="Model">Old Password</label>
                      <input type="text" placeholder="Enter Old Password" />
                    </div>
                  </div>
                  <div className="Form-Control">
                    <div className="input-control">
                      <label htmlFor="Model">New Email</label>
                      <input type="text" placeholder="Enter New Email" />
                    </div>
                    <div className="input-control">
                      <label htmlFor="Model">Old Password</label>
                      <input type="text" placeholder="Enter New Password" />
                    </div>
                  </div>
                  <div className="Form-Control">
                    <div className="input-control">
                      <label htmlFor="Model">Confirm Email</label>
                      <input type="text" placeholder="Confirm New Email" />
                    </div>
                    <div className="input-control">
                      <label htmlFor="Model">Confirm Password</label>
                      <input type="text" placeholder="Confirm New Password" />
                    </div>
                  </div>
                  <SubmitButton />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Profile;
