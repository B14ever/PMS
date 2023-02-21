import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from "../Componet/sidebar";
import Navbar from "../Componet/navbar";
import Context from "../Context/Contexts";
import PageHeader from "../Componet/PageTitle";

const SubStokeClassDetail = () => {
  const getContext = useContext(Context);
  const { t } = getContext;
  const navigate = useNavigate();
  const { state } = useLocation();
  const { subStoke } = state || {};

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
                <b>{t("ID")}: &nbsp;&nbsp;</b>
                {subStoke.ID}
              </div>
              <div className="bold">
                <b>{t("Name")}: &nbsp;&nbsp;</b>
                {subStoke.Sub_Classification_Name}
              </div>
              <div className="bold">
                <b> {t("Code")}: &nbsp;&nbsp;</b>
                {subStoke.Sub_Classification_Code}
              </div>
              <div className="bold">
                <b>{t("ClassificationId")}: &nbsp;&nbsp;</b>
                {subStoke.Classification_ID}
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

export default SubStokeClassDetail;
