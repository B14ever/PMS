import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import photo from "../image/images.jpg";
import Context from "../Context/Contexts";
import SideBar from "../Componet/sidebar";
import Navbar from "../Componet/navbar";
function Receipt() {
  const { location } = useLocation;
  // const { row } = location || [];
  const getContext = useContext(Context);
  const [row, setRows] = useState([
    {
      id: 1,
      name: "ብእር",
      unit: "በቁጥር",
      amount: 2,
      price: 10,
      comme: "ቢክ ቀይ",
    },
    {
      id: 1,
      name: "ብእር",
      unit: "በቁጥር",
      amount: 2,
      price: 10,
      comme: "ቢክ ቀይ",
    },
    {
      id: 1,
      name: "ብእር",
      unit: "በቁጥር",
      amount: 2,
      price: 10,
      comme: "ቢክ ቀይ",
    },
  ]);
  const { t, find, date } = getContext;
  const TableHeading = [
    t("Order"),
    t("PropertyType"),
    t("Mesurment"),
    t("Quantity"),
    t("Price"),
    t("Comment"),
  ];
  return (
    <>
      <Navbar />
      <div
        className="countainer"
        style={{ backgroundColor: "rgb(244, 244, 172)" }}
      >
        <SideBar />

        <main className="content">
          <div className="row-1">
            <div className="col-1">
              <img src={photo} alt="" />
              <div className="Text">
                <h1>{t("CompanyFullName")}</h1>
                <p>{t("Software")}</p>
              </div>
              <div className="col-1f">
                <div className="input-control">
                  <label htmlFor="Model">{t("CostCenter")}</label>
                  <input
                    style={{ backgroundColor: "black" }}
                    type="text"
                    lis="CostCenters"
                    onChange={(e) =>
                      dispatch({ type: "CostCenter", value: e.target.value })
                    }
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="col-2f">
                <div className="input-control">
                  <label htmlFor="Model">{t("Model")}</label>
                  <input
                    style={{ backgroundColor: "black" }}
                    type="text"
                    placeholder={t("Model19U")}
                    disabled
                  />
                </div>
                <div className="input-control">
                  <label htmlFor="Model">{t("Code")}</label>
                  <input
                    style={{ backgroundColor: "black" }}
                    type="text"
                    placeholder="######"
                    disabled
                  />
                </div>
                {/* <div className="input-control">
                  <label htmlFor="Treasuryexpert">{t("Treasuryexpert")}</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      dispatch({
                        type: "Treasuryexpert",
                        value: e.target.value,
                      })
                    }
                  />
                </div> */}
              </div>
              <div className="col-2f">
                <div className="input-control">
                  <label htmlFor="Model">{t("CostType")}</label>
                  <input
                    style={{ backgroundColor: "black" }}
                    type="text"
                    placeholder={t("FixedAssetCosting")}
                    disabled
                  />
                </div>
                <div className="input-control">
                  <label htmlFor="Model">{t("Date")}</label>
                  <input
                    style={{ backgroundColor: "black" }}
                    type="text"
                    value={date}
                    disabled
                  />
                </div>
                {/* <div className="input-control">
                  <label htmlFor="Model">{t("reciver")}</label>
                  <input
                    type="text"
                    list="Employee_Names"
                    onChange={(e) =>
                      dispatch({ type: "reciver", value: e.target.value })
                    }
                  />
                  <datalist id="Employee_Names">
                    {Employe?.map((data, index) => {
                      return (
                        <option value={Employe[index].First_Name} key={index} />
                      );
                    })}
                  </datalist>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="row-2">
            <div className="roq-2-col-1">
              <div className="row-input">
                <label htmlFor="">{t("PropertyType")}</label>
                <input
                  type="text"
                  onChange={(e) =>
                    dispatch({ type: "PropertyType", value: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="row-2-col-2">
              <div className="row-input">
                <label htmlFor="">{t("Mesurment")}</label>
                <input
                  type="text"
                  onChange={(e) =>
                    dispatch({ type: "Mesurment", value: e.target.value })
                  }
                />
              </div>
              <div className="row-input">
                <label htmlFor="">{t("Quantity")}</label>
                <input
                  type="number"
                  onChange={(e) =>
                    dispatch({ type: "Quantity", value: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="row-2-col-2">
              <div className="row-input">
                <label htmlFor="">{t("Price")}</label>
                <input
                  type="number"
                  onChange={(e) =>
                    dispatch({ type: "Price", value: e.target.value })
                  }
                />
              </div>
              <div className="row-input">
                <label htmlFor="">{t("Comment")}</label>
                <input
                  type="text"
                  onChange={(e) =>
                    dispatch({ type: "Comment", value: e.target.value })
                  }
                />
              </div>
            </div>
          </div> */}
          {/* <div className="Add-btn">
            <button onClick={() => setRows([...rows, data])}>
              <bootstrapIcon.BsFillCartPlusFill />
              Add
            </button>
          </div> */}
          <div
            className="Table"
            style={{ marginBottom: "1rem", height: "250px" }}
          >
            <table>
              <thead>
                <tr>
                  {TableHeading.map((data, index) => (
                    <th style={{ textAlign: "center" }} key={index}>
                      {data}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* {rows?.map((rowss, index) => { */}
                {row.map((rows) => {
                  return (
                    <tr style={{ height: "30px" }}>
                      <td>{rows.id}</td>
                      <td>{rows.name}</td>
                      <td>{rows.unit}</td>
                      <td>{rows.price}</td>
                      <td>{rows.amount}</td>
                      <td>{rows.comme}</td>
                      {/* <td>
                        <button
                          style={{ background: "red", float: "right" }}
                          onClick={() =>
                            setRows(rows.filter((_, i) => i !== index))
                          }
                        >
                          {" "}
                          Delete
                        </button>
                      </td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}
export default Receipt;
