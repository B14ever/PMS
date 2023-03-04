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
function DepartmentType() {
  const [data, setData] = useState({ departmentType: "" });
  const navigate = useNavigate();
  const getContext = useContext(Context);
  const { t, load, find } = getContext;
  const TableHeading = [t("Order"), t("DepartmentType"), t("Action")];
  const [DepartmentsType] = useGetData(
    "http://localhost:5000/getDepartmentType"
  );
  const [res, HandleSubmit] = usePostData({
    url: "http://localhost:5000/AddDepartmentType",
    Data: data,
  });
  const handelevent = (id) => {
    axios.delete(`http://localhost:5000/deleteDepartmentsType/${id}`);
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <Navbar />
      <div className="countainer">
        <SideBar />
        <main className="content">
          <PageHeader Message={[t("NewDepartmentType")]} />
          <hr />
          <Countainer>
            <div className="sm-countainer">
              <div className="form-countainer">
                <Header>{t("NewDepartment")}</Header>
                <form action="">
                  <div className="Form-Control">
                    <div className="input-control">
                      <label htmlFor="Department">{t("Department")}</label>
                      <input
                        type="text"
                        id="Department"
                        onChange={(e) =>
                          setData({ ...data, departmentType: e.target.value })
                        }
                      />
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
              <Header>{t("RegisterdDepartmentType")}</Header>
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
                    {DepartmentsType?.slice(0, load ? load : 5).map(
                      (data, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <Td>{DepartmentsType[index].Type_Name}</Td>
                          <Td>
                            <div className="table-button">
                              <button
                                onClick={() => {
                                  navigate("/departmentTypeInformation", {
                                    state: {
                                      departmentType: DepartmentsType[index],
                                    },
                                  });
                                }}
                              >
                                <bootstrapIcon.BsFillFileEarmarkPersonFill />
                              </button>
                              <button style={{ backgroundColor: "red" }}>
                                <bootstrapIcon.BsTrashFill
                                  onClick={() => {
                                    handelevent(DepartmentsType[index].ID);
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
export default DepartmentType;
