import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from "../Componet/sidebar";
import Navbar from "../Componet/navbar";
import Context from "../Context/Contexts";
import PageHeader from "../Componet/PageTitle";

const OfficeDetail = () => {
  const getContext = useContext(Context);
  const { t } = getContext;
  const navigate = useNavigate();
  const { state } = useLocation();
  const { offices } = state || {};

  return (
    <>
      <Navbar />
      <div className="countainer">
        <SideBar />
        <main className="content">
          <div className="content-countainer">
            <PageHeader Message={[t("PropertyMList")]} />
          </div>
          <div className="img-detailInfo">
            <div className="detail-Info no-img">
              <div className="bold">
                <b>{t("Code")}: &nbsp;&nbsp;</b>
                {offices.Code}
              </div>
              <div className="bold">
                <b>{t("OfficeName")}: &nbsp;&nbsp;</b>
                {offices.Bureau_Name}
              </div>
              <div className="bold">
                <b> {t("Describtion")}: &nbsp;&nbsp;</b>
                {offices.Description}
              </div>
              <div className="bold">
                <b>{t("RegisteredDate")}: &nbsp;&nbsp;</b>
                {offices.Registered_Date}
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

export default OfficeDetail;
