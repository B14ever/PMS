import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../Componet/sidebar";
import Navbar from "../Componet/navbar";
import Context from "../Context/Contexts";
import PageHeader from "../Componet/PageTitle";
import RegistorButton from "../Componet/RegistorButton";
import * as bootstrapIcon from "react-icons/bs";
import { useGetData } from "../Hook/GetData";
import LoadMore from "../Componet/LoadMore";
import Find from "../Componet/Find";
import axios from "axios";

const PropertyInventory = () => {
  const navigate = useNavigate();
  const getContext = useContext(Context);
  const { t, load, find } = getContext;
  const [Property] = useGetData(
    `http://localhost:5000/getProperty?find=${find}`
  );
  const handelevent = (id) => {
    axios.delete(`http://localhost:5000/deleteProperty/${id}`);
  };
  const TableHeading = [
    t("Order"),
    t("PropertyCode"),
    t("PropertyName"),
    t("Unit"),
    t("Store"),
    t("PropertyType"),
    t("Action"),
  ];
  return (
    <>
      <Navbar />
      <div className="countainer">
        <SideBar />
        <main className="content">
          <div className="content-countainer">
            <PageHeader Message={[t("PropertyList")]} />
            <RegistorButton Message={[t("propertyI"), "/PropertyI"]} />
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
                {Property?.slice(0, load ? load : 5).map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{Property[index].Code}</td>
                    <td>{Property[index].Name}</td>
                    <td>{Property[index].Unit}</td>
                    <td>{Property[index].Store}</td>
                    <td>{Property[index].Property_Type}</td>
                    <td>
                      <div className="table-button">
                        <button
                          onClick={() => {
                            navigate("/editProperty", {
                              state: { Property: Property[index] },
                            });
                          }}
                        >
                          <bootstrapIcon.BsFillFileEarmarkCheckFill />
                        </button>
                        <button
                          onClick={() => {
                            navigate("/PropertyInformation", {
                              state: { Property: Property[index] },
                            });
                          }}
                        >
                          <bootstrapIcon.BsFillFileEarmarkPersonFill />
                        </button>
                        <button>
                          <bootstrapIcon.BsTrashFill
                            onClick={() => {
                              handelevent(Property[index].ID);
                            }}
                          />
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
export default PropertyInventory;
