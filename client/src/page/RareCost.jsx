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
const RareCost = () => {
  const getContext = useContext(Context);
  const { t, load, find } = getContext;
  const [Vechiles] = useGetData(
    `http://localhost:5000/getRareCost?find=${find}`
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
            <PageHeader Message={[t("AccountsPayableReceipt")]} />
            <RegistorButton
              Message={[t("CreateNew22Model"), "/NewRareItemCost"]}
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
                    <td>{Vechiles[index].Number}</td>
                    <td>{Vechiles[index].Model}</td>
                    <td>{Vechiles[index].Received_Office_Name}</td>
                    <td>{Vechiles[index].Received_Date}</td>
                    <td>{Vechiles[index].Recipient}</td>
                    <td>{Vechiles[index].Store_Keeper}</td>
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
export default RareCost;
