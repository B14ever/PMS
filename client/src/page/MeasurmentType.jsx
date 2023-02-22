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
  unit: "",
};

const reducer = (current, action) => {
  switch (action.type) {
    case "unit":
      return { ...current, unit: action.value };
  }
  return current;
};

const MeasurmentType = () => {
  const [data, dispatch] = useReducer(reducer, inState);
  const navigate = useNavigate();
  const getContext = useContext(Context);
  const { t, load, find } = getContext;

  const [MeasurType] = useGetData(
    `http://localhost:5000/getMeasurType?find=${find}`
  );
  const [res, propertyReg] = usePostData({
    url: "http://localhost:5000/postMeasurType",
    Data: data,
  });
  const handelevent = (id) => {
    axios.delete(`http://localhost:5000/deleteMeasurType/${id}`);
  };

  const TableHeading = [t("ID"), t("Unit"), t("Action")];
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
            <div className="Table-Left borderstokemeas">
              <div className="Top-Text-Stoke stokeMeas">
                {t("StokeMainReg")}
              </div>
              <form action="" className="StokeRegForm">
                <div className="StokeForm">
                  <div className="StokeMain">
                    <label className="StokeLable">{t("StokeName")}</label>
                    <input
                      className="StokeInput"
                      type="text"
                      name="unit"
                      placeholder={t("StokeName")}
                      onChange={(e) => {
                        dispatch({ type: "unit", value: e.target.value });
                      }}
                    />
                  </div>

                  <div className="StokeMain">
                    <button
                      type="submit"
                      className="Stock-btn stokeMeas"
                      onClick={propertyReg}
                    >
                      {t("Registor")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="Table-Right borderstokemeas">
              <div className="Top-Text-Stoke stokeMeas">
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
                    {MeasurType.slice(0, load ? load : 5).map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{MeasurType[index].Unit}</td>
                        <td>
                          <div className="table-button">
                            <button>
                              <bootstrapIcon.BsFillFileEarmarkCheckFill />
                            </button>
                            <button
                              onClick={() => {
                                navigate("/measurTypeInformation", {
                                  state: { measurment: MeasurType[index] },
                                });
                              }}
                            >
                              <bootstrapIcon.BsFillFileEarmarkPersonFill />
                            </button>

                            <button
                              onClick={() => {
                                handelevent(MeasurType[index].ID);
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

export default MeasurmentType;
