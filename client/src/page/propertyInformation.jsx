import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from "../Componet/sidebar";
import Navbar from "../Componet/navbar";
import Context from "../Context/Contexts";
import PageHeader from "../Componet/PageTitle";

const PropertyInfo = () => {
  const getContext = useContext(Context);
  const { t } = getContext;
  const navigate = useNavigate();
  const { state } = useLocation();
  const { Property } = state || {};

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
                {Property.ID}
              </div>
              <div className="bold">
                <b>{t("Name")}: &nbsp;&nbsp;</b>
                {Property.Classification_Name}
              </div>
              <div className="bold">
                <b> {t("Code")}: &nbsp;&nbsp;</b>
                {Property.Classification_Code}
              </div>
              <div className="bold">
                <b>{t("Description")}: &nbsp;&nbsp;</b>
                {Property.Description}
              </div>

              <div className="bold">
                <b>{t("Type")}: &nbsp;&nbsp;</b>
                {Property.Type}
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

export default PropertyInfo;
