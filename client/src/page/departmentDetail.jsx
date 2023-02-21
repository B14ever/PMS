import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from "../Componet/sidebar";
import Navbar from "../Componet/navbar";
import Context from "../Context/Contexts";
import PageHeader from "../Componet/PageTitle";

const DepartmentDetail = () => {
  const getContext = useContext(Context);
  const { t } = getContext;
  const navigate = useNavigate();
  const { state } = useLocation();
  const { departments } = state || {};

  return (
    <>
      <Navbar />
      <div className="countainer">
        <SideBar />
        <main className="content">
          <div className="content-countainer">
            <PageHeader Message={[t("Department")]} />
          </div>
          <div className="img-detailInfo">
            <div className="detail-Info no-img">
              <div className="bold">
                <b>{t("Code")}: &nbsp;&nbsp;</b>
                {departments.Code}
              </div>
              <div className="bold">
                <b>{t("OfficeName")}: &nbsp;&nbsp;</b>
                {departments.Offices_Name}
              </div>
              <div className="bold">
                <b>{t("Office")}: &nbsp;&nbsp;</b>
                {departments.Bureau}
              </div>
              <div className="bold">
                <b>{t("OfficeType")}: &nbsp;&nbsp;</b>
                {departments.Offices_Type}
              </div>

              <div className="bold">
                <b>{t("Description")}: &nbsp;&nbsp;</b>
                {departments.Description}
              </div>
              <div className="bold">
                <b>{t("RegisteredDate")}: &nbsp;&nbsp;</b>
                {departments.Registered_Date}
              </div>
            </div>
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

export default DepartmentDetail;
