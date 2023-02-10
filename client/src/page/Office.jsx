import React, { useContext, useEffect, useState } from "react";
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
  padding: 1.5rem;
`;
function Office() {
  const [data, setData] = useState({
    officeName: "",
    Code: "",
    Description: "",
  });
  const getContext = useContext(Context);
  const { t, load, find } = getContext;
  const TableHeading = [
    t("Order"),
    t("OfficeName"),
    t("Code"),
    t("Describtion"),
    t("Action"),
  ];
  const [Offices] = useGetData(
    `http://localhost:5000/getOfficeList?find=${find}`
  );
  const [res, HandleSubmit] = usePostData({
    url: "http://localhost:5000/AddOffice",
    Data: data,
  });
  return (
    <>
      <Navbar />
      <div className="countainer">
        <SideBar />
        <main className="content">
          <PageHeader Message={[t("Office")]} />
          <hr />
          <Countainer>
            <div className="sm-countainer">
              <div className="form-countainer">
                <Header>{t("AddNewOffice")}</Header>
                <form action="">
                  <div className="Form-Control">
                    <div className="input-control">
                      <label htmlFor="office-name">{t("OfficeName")}</label>
                      <input
                        type="text"
                        id="office-name"
                        onChange={(e) =>
                          setData({ ...data, officeName: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="Form-Control">
                    <div className="input-control">
                      <label htmlFor="Code">{t("Code")}</label>
                      <input
                        type="text"
                        id="Code"
                        onChange={(e) =>
                          setData({ ...data, Code: e.target.value })
                        }
                      />
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
              <Header>{t("OfficeList")}</Header>
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
                    {Offices?.slice(0, load ? load : 5).map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <Td>{Offices[index].Bureau_Name}</Td>
                        <Td>{Offices[index].Code}</Td>
                        <Td>{Offices[index].Description}</Td>
                        <Td>
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
                        </Td>
                      </tr>
                    ))}
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

export default Office;
