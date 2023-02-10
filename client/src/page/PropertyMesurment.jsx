import React, { useContext, useEffect, useState, useReducer } from "react";
import SideBar from "../Componet/sidebar";
import Navbar from "../Componet/navbar";
import Context from "../Context/Contexts";
import PageHeader from "../Componet/PageTitle";
import RegistorButton from "../Componet/RegistorButton";
import * as bootstrapIcon from "react-icons/bs";
import { useGetData } from "../Hook/GetData";
import usePostData from "../Hook/PostData";
import LoadMore from "../Componet/LoadMore";
import Find from "../Componet/Find";

const inState = {
  Name: "",
  Code: "",
  Description: "",
};

const reducer = (current, action) => {
  switch (action.type) {
    case "Name":
      return { current, Name: action.value };
    case "Code":
      return { current, Code: action.value };
    case "Description":
      return { current, Description: action.value };
  }
  return current;
};

const PropertyMesurment = () => {
  const [data, dispatch] = useReducer(reducer, inState);
  const getContext = useContext(Context);
  const { t, load, find } = getContext;

  const [propertymeas] = useGetData(
    `http://localhost:5000/getPropClass?find=${find}`
  );
  const [res, propertyReg] = usePostData({
    url: "http://localhost:5000/postPropClass",
    Data: data,
  });

  const TableHeading = [
    t("ID"),
    t("Name"),
    t("Code"),
    t("Description"),
    t("Type"),
    t("Action"),
  ];
  return (
    <>
      <Navbar />
      <div className="countainer">
        <SideBar />
        <main className="content">
          <div className="content-countainer">
            <PageHeader Message={[t("PropertyMList")]} />
            <div className="Top-Btn">
              <RegistorButton
                className="stoke"
                Message={[t("StokeMain"), "/Propertyclassification", "stoke"]}
              />
              <RegistorButton
                className="subStoke"
                Message={[
                  t("subStoke"),
                  "/PropertySubclassification",
                  "subStoke",
                ]}
              />
              <RegistorButton
                className="stokeMeas"
                Message={[
                  t("stokeMeasurment"),
                  "/Propertyclassification",
                  "stokeMeas",
                ]}
              />
            </div>
          </div>
          <div className="Two-Table">
            <div className="Table-Left">
              <div className="Top-Text-Stoke">{t("StokeMainReg")}</div>
              <form action="" className="StokeRegForm">
                <div className="StokeForm">
                  <div className="StokeMain">
                    <label className="StokeLable">{t("StokeName")}</label>
                    <input
                      className="StokeInput"
                      type="text"
                      name="name"
                      placeholder={t("StokeName")}
                      onChange={(e) => {
                        dispatch({ type: "Name", value: e.target.value });
                      }}
                    />
                  </div>
                  <div className="StokeMain">
                    <label className="StokeLable">{t("Code")}</label>
                    <input
                      className="StokeInput"
                      type="text"
                      name="code"
                      placeholder={t("Code")}
                      onChange={(e) => {
                        dispatch({ type: "Code", value: e.target.value });
                      }}
                    />
                  </div>
                  <div className="StokeMain">
                    <label className="StokeLable">{t("StokeDesc")}</label>
                    <textarea
                      name="Description"
                      id="StokeInput"
                      cols="30"
                      rows="10"
                      placeholder={t("StokeDesc")}
                      onChange={(e) => {
                        dispatch({
                          type: "Description",
                          value: e.target.value,
                        });
                      }}
                    ></textarea>
                  </div>
                  <div className="StokeMain">
                    <button
                      type="submit"
                      className="Stock-btn"
                      onClick={propertyReg}
                    >
                      {t("Registor")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="Table-Right">
              <div className="Top-Text-Stoke">{t("StokeMainList")}</div>
              <div className="Table-Componet-Stoke">
                <LoadMore /> <Find className="Findmargin" />
              </div>
              <div className="TableStoke">
                <table>
                  <thead>
                    <tr>
                      {TableHeading.map((data, index) => (
                        <th key={index}>{data}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {propertymeas
                      .slice(0, load ? load : 5)
                      .map((data, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{propertymeas[index].Classification_Name}</td>
                          <td>{propertymeas[index].Classification_Code}</td>
                          <td>{propertymeas[index].Description}</td>
                          <td>{propertymeas[index].Type}</td>
                          <td>
                            <div className="table-button">
                              <button>
                                <bootstrapIcon.BsFillFileEarmarkCheckFill />
                              </button>
                              <button>
                                <bootstrapIcon.BsFillFileEarmarkPersonFill />
                              </button>
                              <button>
                                <bootstrapIcon.BsTrashFill />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>{" "}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PropertyMesurment;
