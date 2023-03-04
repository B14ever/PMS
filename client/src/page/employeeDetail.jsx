import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from "../Componet/sidebar";
import Navbar from "../Componet/navbar";
import Context from "../Context/Contexts";
import PageHeader from "../Componet/PageTitle";
// import { AccountBoxIcon } from "@mui/icons-material/";

const EmployeeDetail = () => {
  const getContext = useContext(Context);
  const { t } = getContext;
  const navigate = useNavigate();
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
                    <b>{t("ID")}: &nbsp;&nbsp;</b>
                    {employe.ID_Number}
                  </div>
                  <div className="bold">
                    <b>{t("FullName")}: &nbsp;&nbsp;</b>
                    {employe.First_Name} &nbsp; {employe.Middle_Name} &nbsp;{" "}
                    {employe.Last_Name}
                  </div>
                  <div className="bold">
                    <b> {t("Gender")}: &nbsp;&nbsp;</b>
                    {employe.Sex}
                  </div>
                  <div className="bold">
                    <b>{t("WorkClass")}: &nbsp;&nbsp;</b>
                    {employe.Job_Title}
                  </div>

                  <div className="bold">
                    <b>{t("PhoneNumber")}: &nbsp;&nbsp;</b>
                    {employe.Phone}
                  </div>
                  <div className="bold">
                    <b>{t("Email")}: &nbsp;&nbsp;</b>
                    {employe.Email}
                  </div>
                  <div className="bold">
                    <b>{t("Mobile")}: &nbsp;&nbsp;</b>
                    {employe.Moblie}
                  </div>
                  <div className="bold">
                    <b>{t("Address")}: &nbsp;&nbsp;</b>
                    {employe.Address}
                  </div>
                  <div className="bold">
                    <b>{t("WorkRoom")}: &nbsp;&nbsp;</b>
                    {employe.Department}
                  </div>
                  <div className="bold">
                    <b>{t("BuildingNumber")}: &nbsp;&nbsp;</b>
                    {employe.Building_Number}
                  </div>
                  <div className="bold">
                    <b>{t("RoomNumber")}: &nbsp;&nbsp;</b>
                    {employe.Room_Number}
                  </div>
                  <div className="bold">
                    <b>{t("Location")}: &nbsp;&nbsp;</b>
                    {employe.Location}
                  </div>
                  <div className="bold">
                    <b>{t("RegisteredDate")}: &nbsp;&nbsp;</b>
                    {employe.Registered_Date}
                  </div>
                </div>
              </div>
            ) : (
              <div className="img-detail">
                <div className="img">{/* <AccountBoxIcon /> */}</div>
                <div className="detail-Info">
                  <div className="bold">
                    <b>{t("ID")}: &nbsp;&nbsp;</b>
                    {employe.ID_Number}
                  </div>
                  <div className="bold">
                    <b>{t("FullName")}: &nbsp;&nbsp;</b>
                    {employe.First_Name} &nbsp; {employe.Middle_Name}{" "}
                    {employe.Last_Name}
                  </div>
                  <div className="bold">
                    <b> {t("Gender")}: &nbsp;&nbsp;</b>
                    {employe.Sex}
                  </div>
                  <div className="bold">
                    <b>{t("WorkClass")}: &nbsp;&nbsp;</b>
                    {employe.Job_Title}
                  </div>

                  <div className="bold">
                    <b>{t("PhoneNumber")}: &nbsp;&nbsp;</b>
                    {employe.Phone}
                  </div>
                  <div className="bold">
                    <b>{t("Email")}: &nbsp;&nbsp;</b>
                    {employe.Email}
                  </div>
                  <div className="bold">
                    <b>{t("Mobile")}: &nbsp;&nbsp;</b>
                    {employe.Mobile}
                  </div>
                  <div className="bold">
                    <b>{t("Address")}: &nbsp;&nbsp;</b>
                    {employe.Address}
                  </div>
                  <div className="bold">
                    <b>{t("WorkRoom")}: &nbsp;&nbsp;</b>
                    {employe.Department}
                  </div>
                  <div className="bold">
                    <b>{t("BuildingNumber")}: &nbsp;&nbsp;</b>
                    {employe.Building_Number}
                  </div>
                  <div className="bold">
                    <b>{t("RoomNumber")}: &nbsp;&nbsp;</b>
                    {employe.Room_Number}
                  </div>
                  <div className="bold">
                    <b>{t("Location")}: &nbsp;&nbsp;</b>
                    {employe.Location}
                  </div>
                  <div className="bold">
                    <b>{t("RegisteredDate")}: &nbsp;&nbsp;</b>
                    {employe.Registered_Date}
                  </div>
                </div>
              </div>
            )}
            <button
              className="back-btn"
              onClick={() => {
                navigate(-1);
              }}
            >
              {t("back")}
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default EmployeeDetail;
