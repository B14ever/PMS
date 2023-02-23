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
            <PageHeader Message={[t("PropertyList")]} />
          </div>
          <div className="img-detailInfo">
            <div className="detail-Info no-img">
              <div className="bold">
                <b>{t("ID")}: &nbsp;&nbsp;</b>
                {Property.ID}
              </div>
              <div className="bold">
                <b>{t("PropertyCode")}: &nbsp;&nbsp;</b>
                {Property.Code}
              </div>
              <div className="bold">
                <b> {t("PropertyName")}: &nbsp;&nbsp;</b>
                {Property.Name}
              </div>
              <div className="bold">
                <b>{t("Description")}: &nbsp;&nbsp;</b>
                {Property.Description}
              </div>

              <div className="bold">
                <b>{t("SerieNumber")}: &nbsp;&nbsp;</b>
                {Property.Serie}
              </div>
              <div className="bold">
                <b>{t("Model")}: &nbsp;&nbsp;</b>
                {Property.Model}
              </div>
              <div className="bold">
                <b>{t("Propertycategory")}: &nbsp;&nbsp;</b>
                {Property.Category}
              </div>
              <div className="bold">
                <b>{t("Unit")}: &nbsp;&nbsp;</b>
                {Property.Unit}
              </div>
              <div className="bold">
                <b>{t("Price")}: &nbsp;&nbsp;</b>
                {Property.Unit_Price}
              </div>
              <div className="bold">
                <b>{t("Store")}: &nbsp;&nbsp;</b>
                {Property.Store}
              </div>
              <div className="bold">
                <b>{t("PropertyType")}: &nbsp;&nbsp;</b>
                {Property.Property_Type}
              </div>
              <div className="bold">
                <b>{t("ClassificationId")}: &nbsp;&nbsp;</b>
                {Property.Classification_ID}
              </div>
              <div className="bold">
                <b>{t("subClassificationId")}: &nbsp;&nbsp;</b>
                {Property.Sub_Classification_ID}
              </div>
              <div className="bold">
                <b>{t("RegisteredDate")}: &nbsp;&nbsp;</b>
                {Property.Registered_Date}
              </div>
              <div className="bold">
                <b>{t("ExpireDate")}: &nbsp;&nbsp;</b>
                {Property.Expire_Date}
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
