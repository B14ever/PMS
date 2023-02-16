import React, { useContext, useEffect, useState, useReducer } from "react";
// import { useLocation } from "react-router-dom";
import SideBar from "../Componet/sidebar";
import Navbar from "../Componet/navbar";
import Context from "../Context/Contexts";
import PageHeader from "../Componet/PageTitle";
// import { useGetTotalData } from "../Hook/GetData";

// const inState = {
//   Name: "",
//   Code: "",
//   Description: "",
// };

// const reducer = (current, action) => {
//   switch (action.type) {
//     case "Name":
//       return { ...current, Name: action.value };
//     case "Code":
//       return { ...current, Code: action.value };
//     case "Description":
//       return { ...current, Description: action.value };
//   }
//   return current;
// };

const DetailInfo = (props) => {
  // const [data, dispatch] = useReducer(reducer, inState);
  const getContext = useContext(Context);
  const { t } = getContext;
  // const location = useLocation();
  console.log(props);

  // console.log(props.location.state);
  // const [details] = useGetTotalData(`http://localhost:5000/getPropClass`);

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
            <div className="detail-Img">Finally,It works {props.state}</div>
            <div className="detail-Info"></div>
          </div>
        </main>
      </div>
    </>
  );
};

export default DetailInfo;
