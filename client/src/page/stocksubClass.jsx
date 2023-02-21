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
import { NavLink } from "react-router-dom";
import Find from "../Componet/Find";
import axios from "axios";

const inState = {
  Name: "",
  Code: "",
  Description: "",
};

const reducer = (current, action) => {
  switch (action.type) {
    case "Name":
      return { ...current, Name: action.value };
    case "Code":
      return { ...current, Code: action.value };
    case "Description":
      return { ...current, Description: action.value };
  }
  return current;
};

const SubClassification = () => {
  const [data, dispatch] = useReducer(reducer, inState);
  const getContext = useContext(Context);
  const { t, load, find } = getContext;

  const [subClass] = useGetData(
    `http://localhost:5000/getSubClass?find=${find}`
  );
  const [res, propertyReg] = usePostData({
    url: "http://localhost:5000/postSubClass",
    Data: data,
  });
  const handelevent = (id) => {
    axios.delete(`http://localhost:5000/deleteSubClass/${id}`);
  };

  const TableHeading = [
    t("ID"),
    t("Name"),
    t("Code"),
    t("ClassificationId"),
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
                Message={[
                  t("StokeMain"),
                  "/Propertyclassification",
                  "btn-New stoke",
                ]}
              />
              <RegistorButton
                className="subStoke"
                Message={[
                  t("subStoke"),
                  "/PropertySubclassification",
                  "btn-New subStoke",
                ]}
              />
              <RegistorButton
                className="stokeMeas"
                Message={[
                  t("stokeMeasurment"),
                  "/typesOfMeasurments",
                  "btn-New stokeMeas",
                ]}
              />
            </div>
          </div>
          <div className="Two-Table">
            <div className="Table-Left bordersubStoke">
              <div className="Top-Text-Stoke subStoke">{t("StokeMainReg")}</div>
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
                      className="Stock-btn subStoke"
                      onClick={propertyReg}
                    >
                      {t("Registor")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="Table-Right bordersubStoke">
              <div className="Top-Text-Stoke subStoke">
                {t("StokeMainList")}
              </div>
              <div className="Table-Componet-Stoke">
                <LoadMore /> <Find />
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
                    {subClass.slice(0, load ? load : 5).map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{subClass[index].Sub_Classification_Name}</td>
                        <td>{subClass[index].Sub_Classification_Code}</td>
                        <td>{subClass[index].Classification_ID}</td>
                        <td>
                          <div className="table-button">
                            <button>
                              <bootstrapIcon.BsFillFileEarmarkCheckFill />
                            </button>
                            <button>
                              <bootstrapIcon.BsFillFileEarmarkPersonFill />
                            </button>

                            <button
                              onClick={() => {
                                handelevent(subClass[index].ID);
                              }}
                            >
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

export default SubClassification;
