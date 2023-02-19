import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from "../Componet/sidebar";
import Navbar from "../Componet/navbar";
import Context from "../Context/Contexts";
import PageHeader from "../Componet/PageTitle";

const DetailInfo = () => {
  const getContext = useContext(Context);
  const { t } = getContext;
  const navigate = useNavigate();
  const { state } = useLocation();
  const { property } = state || {};
  console.log(property.ID);

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
                <b>ID: &nbsp;&nbsp;</b>
                {property.ID}
              </div>
              <div className="bold">
                <b>Name Of Class: &nbsp;&nbsp;</b>
                {property.Classification_Name}
              </div>
              <div className="bold">
                <b> Code: &nbsp;&nbsp;</b>
                {property.Classification_Code}
              </div>
              <div className="bold">
                <b>Description: &nbsp;&nbsp;</b>
                {property.Description}
              </div>

              <div className="bold">
                <b>Type: &nbsp;&nbsp;</b>
                {property.Type}
              </div>
            </div>
            <button
              className="back-btn"
              onClick={() => {
                navigate(-1);
              }}
            >
              Go Back
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default DetailInfo;
