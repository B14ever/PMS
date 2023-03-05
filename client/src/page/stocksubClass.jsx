import React, { useContext, useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
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
import axios from "axios";

const inState = {
  Name: "",
  Code: "",
  ClassId: "",
};

const reducer = (current, action) => {
  switch (action.type) {
    case "Name":
      return { ...current, Name: action.value };
    case "Code":
      return { ...current, Code: action.value };
    case "ClassId":
      return { ...current, ClassId: action.value };
  }
  return current;
};

const SubClassification = () => {
  const [data, dispatch] = useReducer(reducer, inState);
  const navigate = useNavigate();
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
    t("subStokeName"),
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
              <div className="Top-Text-Stoke subStoke">{t("SubName")}</div>
              <form action="" className="StokeRegForm">
                <div className="StokeForm">
                  <div className="StokeMain">
                    <label className="StokeLable">{t("subStokeName")}</label>
                    <input
                      className="StokeInput"
                      type="text"
                      name="name"
                      placeholder={t("subStokeName")}
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
                    <label className="StokeLable">
                      {t("ClassificationId")}
                    </label>
                    <input
                      className="StokeInput"
                      type="text"
                      name="classId"
                      placeholder={t("ClassificationId")}
                      onChange={(e) => {
                        dispatch({ type: "ClassId", value: e.target.value });
                      }}
                    />
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
                {t("subStokeMainList")}
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
                            <button
                              style={{ backgroundColor: "rgb(223, 223, 29)" }}
                              onClick={() => {
                                navigate("/substokeClassInfo", {
                                  state: { subStoke: subClass[index] },
                                });
                              }}
                            >
                              <bootstrapIcon.BsFillFileEarmarkPersonFill />
                            </button>

                            <button
                              style={{ backgroundColor: "red" }}
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
