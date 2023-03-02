import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../Componet/sidebar";
import Navbar from "../Componet/navbar";
import Context from "../Context/Contexts";
import PageHeader from "../Componet/PageTitle";
import { useGetData } from "../Hook/GetData";
import usePostData from "../Hook/PostData";
import LoadMore from "../Componet/LoadMore";
import Find from "../Componet/Find";
import * as bootstrapIcon from "react-icons/bs";
import styled from "styled-components";
import axios from "axios";

const Countainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Header = styled.div`
  width: 100%;
  background-color: #075e38;
  color: #fff;
  padding: 10px 50px;
  text-align: center;
  font-size: 1.3rem;
`;
const Submit = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem;
`;
const Td = styled.td`
  padding: 1.5rem 1.5rem 0.5rem;
`;
function Department() {
  const [data, setData] = useState({
    officeName: "",
    Department: "",
    DepartmentType: "",
    Description: "",
  });
  const getContext = useContext(Context);
  const navigate = useNavigate();
  const { t, load, find } = getContext;
  const TableHeading = [
    t("Order"),
    t("OfficeName"),
    t("Code"),
    t("Describtion"),
    t("Action"),
  ];
  const [Departments] = useGetData(
    `http://localhost:5000/getInformation?find=${find}`
  );
  const [OfficeName] = useGetData("http://localhost:5000/getOfficeName");
  const [DepartmentsType] = useGetData(
    "http://localhost:5000/getDepartmentType"
  );
  const [res, HandleSubmit] = usePostData({
    url: "http://localhost:5000/AddDepartment",
    Data: data,
  });
  const handelevent = (id) => {
    axios.delete(`http://localhost:5000/deleteDepartment/${id}`);
  };
  return (
    <>
      <Navbar />
      <div className="countainer">
        <SideBar />
        <main className="content">
          <PageHeader Message={[t("Department")]} />
          <hr />
          <Countainer>
            <div className="sm-countainer">
              <div className="form-countainer">
                <Header>{t("NewDepartment")}</Header>
                <form action="">
                  <div className="Form-Control">
                    <div className="input-control">
                      <label htmlFor="office-name">{t("OfficeName")}</label>
                      <select
                        name=""
                        id="office-name"
                        onChange={(e) =>
                          setData({ ...data, officeName: e.target.value })
                        }
                      >
                        <option defaultValue>{t("OfficeName")}</option>
                        {OfficeName?.map((data, index) => {
                          return (
                            <option key={index}>
                              {OfficeName[index].Bureau_Name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="Form-Control">
                    <div className="input-control">
                      <label htmlFor="Department">{t("Department")}</label>
                      <input
                        type="text"
                        id="Department"
                        onChange={(e) =>
                          setData({ ...data, Department: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="Form-Control">
                    <div className="input-control">
                      <label htmlFor="DepartmentType">
                        {t("DepartmentType")}
                      </label>
                      <select
                        name=""
                        id="DepartmentType"
                        onChange={(e) =>
                          setData({ ...data, DepartmentType: e.target.value })
                        }
                      >
                        <option defaultValue>{t("DepartmentType")}</option>
                        {DepartmentsType?.map((data, index) => {
                          return (
                            <option key={index}>
                              {DepartmentsType[index].Type_Name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="Form-Control">
                    <div className="input-control">
                      <label htmlFor="Describtion">{t("Describtion")}</label>
                      <textarea
                        onChange={(e) =>
                          setData({ ...data, Description: e.target.value })
                        }
                        id="Describtion"
                        cols="30"
                        rows="9"
                      ></textarea>
                    </div>
                  </div>
                  <Submit>
                    <button
                      className="submit-button"
                      style={{ background: "#3071E7" }}
                      type="submit"
                      onClick={HandleSubmit}
                    >
                      {t("Registor")}
                    </button>
                    <button
                      className="submit-button"
                      style={{ background: "#DA0037" }}
                      type="submit"
                    >
                      {t("Cancle")}
                    </button>
                  </Submit>
                </form>
              </div>
            </div>
            <div className="lr-countainer">
              <Header>{t("RegisterdDepartment")}</Header>
              <div className="Table-Componet">
                <LoadMore />
                <Find />
              </div>
              <div className="Table" style={{ marginRight: "1rem" }}>
                <table>
                  <thead>
                    <tr>
                      {TableHeading.map((data, index) => (
                        <th key={index}>{data}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Departments?.slice(0, load ? load : 5).map(
                      (data, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <Td>{Departments[index].Offices_Name}</Td>
                          <Td>{Departments[index].Bureau}</Td>
                          <Td>{Departments[index].Description}</Td>
                          <Td>
                            <div className="table-button">
                              <button
                                onClick={() => {
                                  navigate("/editDepartment", {
                                    state: { departments: Departments[index] },
                                  });
                                }}
                              >
                                <bootstrapIcon.BsFillFileEarmarkCheckFill />
                              </button>
                              <button
                                onClick={() => {
                                  navigate("/departmentInformation", {
                                    state: { departments: Departments[index] },
                                  });
                                }}
                              >
                                <bootstrapIcon.BsFillFileEarmarkPersonFill />
                              </button>
                              <button>
                                <bootstrapIcon.BsTrashFill
                                  onClick={() => {
                                    handelevent(Departments[index].ID);
                                  }}
                                />
                              </button>
                            </div>
                          </Td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </Countainer>
        </main>
      </div>
    </>
  );
}
export default Department;
