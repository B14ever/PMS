import React, { useContext, useEffect, useState } from "react";
import SideBar from "../Componet/sidebar";
import Navbar from "../Componet/navbar";
import Context from "../Context/Contexts";
import PageHeader from "../Componet/PageTitle";
import RegistorButton from "../Componet/RegistorButton";
import { useGetData } from "../Hook/GetData";
import * as bootstrapIcon from "react-icons/bs";
import LoadMore from "../Componet/LoadMore";
import Find from "../Componet/Find";
import styled from "styled-components";
const Td = styled.td`
  padding: 1.5rem;
`;
const UsedPropertyIncome = () => {
  const getContext = useContext(Context);
  const { t, load, find } = getContext;
  const [Vechiles] = useGetData(
    `http://localhost:5000/getUsedPropertyIncome?find=${find}`
  );
  const TableHeading = [
    t("Order"),
    t("FileNumber"),
    t("Model"),
    t("CostCenter"),
    t("Date"),
    t("deliverer"),
    t("reciver"),
    t("Action"),
  ];
  return (
    <>
      <Navbar />
      <div className="countainer">
        <SideBar />
        <main className="content">
          <div className="content-countainer">
            <PageHeader Message={[t("AccountsPayableReceipt192")]} />
            <RegistorButton
              Message={[t("CreateNew19ሐModel"), "/NewUsedPropertyIncome"]}
            />
          </div>

          <div className="Table-Componet ">
            <LoadMore /> <Find />
          </div>
          <div className="Table">
            <table>
              <thead>
                <tr>
                  {TableHeading.map((data, index) => (
                    <th key={index}>{data}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Vechiles?.slice(0, load ? load : 5).map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <Td>{Vechiles[index].Brand}</Td>
                    <Td>{Vechiles[index].Model}</Td>
                    <Td>{Vechiles[index].Year}</Td>
                    <Td>{Vechiles[index].Engine}</Td>
                    <Td>{Vechiles[index].Cylinder_Capacity}</Td>
                    <Td>{Vechiles[index].Chassis_Number}</Td>
                    <td>
                      <div className="table-button">
                        <button>
                          <bootstrapIcon.BsFillFileEarmarkCheckFill />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
};
export default UsedPropertyIncome;
