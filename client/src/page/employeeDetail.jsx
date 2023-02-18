import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../Componet/sidebar";
import Navbar from "../Componet/navbar";
import Context from "../Context/Contexts";
import PageHeader from "../Componet/PageTitle";
// import { AccountBoxIcon } from "@mui/icons-material/";

const EmployeeDetail = () => {
  const getContext = useContext(Context);
  const { t } = getContext;
  const { state } = useLocation();
  const { employe } = state || {};
  console.log(employe.ID);

  return (
    <>
      <Navbar />
      <div className="countainer">
        <SideBar />
        <main className="content">
          <div className="content-countainer">
            <PageHeader Message={[t("EmployeeList")]} />
          </div>
          <div>
            {employe.Photo ? (
              <div className="img-detail">
                <div className="img">{/* <AccountBoxIcon /> */}</div>
                <div className="detail-Info">
                  <div className="bold">
                    <b>ID: &nbsp;&nbsp;</b>
                    {employe.ID_Number}
                  </div>
                  <div className="bold">
                    <b>Name Of Employee: &nbsp;&nbsp;</b>
                    {employe.First_Name} &nbsp; {employe.Middle_Name} &nbsp;{" "}
                    {employe.Last_Name}
                  </div>
                  <div className="bold">
                    <b> Sex: &nbsp;&nbsp;</b>
                    {employe.Sex}
                  </div>
                  <div className="bold">
                    <b>Job Title: &nbsp;&nbsp;</b>
                    {employe.Job_Title}
                  </div>

                  <div className="bold">
                    <b>Phone Number: &nbsp;&nbsp;</b>
                    {employe.Phone}
                  </div>
                  <div className="bold">
                    <b>Email: &nbsp;&nbsp;</b>
                    {employe.Email}
                  </div>
                  <div className="bold">
                    <b>Mobile: &nbsp;&nbsp;</b>
                    {employe.Mobile}
                  </div>
                  <div className="bold">
                    <b>Address: &nbsp;&nbsp;</b>
                    {employe.Address}
                  </div>
                  <div className="bold">
                    <b>Department: &nbsp;&nbsp;</b>
                    {employe.Department}
                  </div>
                  <div className="bold">
                    <b>Building Number: &nbsp;&nbsp;</b>
                    {employe.Building_Number}
                  </div>
                  <div className="bold">
                    <b>Room Number: &nbsp;&nbsp;</b>
                    {employe.Room_Number}
                  </div>
                  <div className="bold">
                    <b>Location: &nbsp;&nbsp;</b>
                    {employe.Location}
                  </div>
                  <div className="bold">
                    <b>Registered Date: &nbsp;&nbsp;</b>
                    {employe.Registered_Date}
                  </div>
                </div>
              </div>
            ) : (
              <div className="img-detail">
                <div className="img">{/* <AccountBoxIcon /> */}</div>
                <div className="detail-Info">
                  <div className="bold">
                    <b>ID: &nbsp;&nbsp;</b>
                    {employe.ID_Number}
                  </div>
                  <div className="bold">
                    <b>Name Of Employee: &nbsp;&nbsp;</b>
                    {employe.First_Name} &nbsp; {employe.Middle_Name} &nbsp;{" "}
                    {employe.Last_Name}
                  </div>
                  <div className="bold">
                    <b> Sex: &nbsp;&nbsp;</b>
                    {employe.Sex}
                  </div>
                  <div className="bold">
                    <b>Job Title: &nbsp;&nbsp;</b>
                    {employe.Job_Title}
                  </div>

                  <div className="bold">
                    <b>Phone Number: &nbsp;&nbsp;</b>
                    {employe.Phone}
                  </div>
                  <div className="bold">
                    <b>Email: &nbsp;&nbsp;</b>
                    {employe.Email}
                  </div>
                  <div className="bold">
                    <b>Mobile: &nbsp;&nbsp;</b>
                    {employe.Mobile}
                  </div>
                  <div className="bold">
                    <b>Address: &nbsp;&nbsp;</b>
                    {employe.Address}
                  </div>
                  <div className="bold">
                    <b>Department: &nbsp;&nbsp;</b>
                    {employe.Department}
                  </div>
                  <div className="bold">
                    <b>Building Number: &nbsp;&nbsp;</b>
                    {employe.Building_Number}
                  </div>
                  <div className="bold">
                    <b>Room Number: &nbsp;&nbsp;</b>
                    {employe.Room_Number}
                  </div>
                  <div className="bold">
                    <b>Location: &nbsp;&nbsp;</b>
                    {employe.Location}
                  </div>
                  <div className="bold">
                    <b>Registered Date: &nbsp;&nbsp;</b>
                    {employe.Registered_Date}
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default EmployeeDetail;
