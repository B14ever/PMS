import React, { useState, useContext, useEffect, useReducer } from "react";
import SideBar from "../Componet/sidebar";
import Navbar from "../Componet/navbar";
import Context from "../Context/Contexts";
import photo from "../image/images.jpg";
import { useGetData } from "../Hook/GetData";
import usePostData from "../Hook/PostData";
import * as bootstrapIcon from "react-icons/bs";
import SubmitButton from "../Componet/SubmitButton";
const intialstate = {
  CostCenter: [],
  PropertyType: [],
  reciver: [],
  Quantity: [],
  Comment: [],
  Treasuryexpert: [],
  Price: [],
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "CostCenter":
      return { ...currentState, CostCenter: action.value };
    case "PropertyType":
      return { ...currentState, PropertyType: action.value };
    case "reciver":
      return { ...currentState, reciver: action.value };
    case "Quantity":
      return { ...currentState, Quantity: action.value };
    case "Price":
      return { ...currentState, Price: action.value };
    case "Comment":
      return { ...currentState, Comment: action.value };
    case "Treasuryexpert":
      return { ...currentState, Treasuryexpert: action.value };
  }
  return currentState;
};
function NewFixedCost() {
  const [data, dispatch] = useReducer(reducer, intialstate);
  const [rows, setRows] = useState([]);
  const getContext = useContext(Context);
  const { t, find, date } = getContext;
  const [Employe] = useGetData(
    `http://localhost:5000/serachEmployee?find=${find}`
  );
  const [res, HandleSubmit] = usePostData({
    url: "http://localhost:5000/postNewFixedCost",
    Data: data,
  });

  const TableHeading = [
    t("Order"),
    t("PropertyType"),
    t("Mesurment"),
    t("Quantity"),
    t("Price"),
    t("Comment"),
    t("Action"),
  ];

  return (
    <>
      <Navbar />
      <div className="countainer">
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
                    type="text"
                    lis="CostCenters"
                    onChange={(e) =>
                      dispatch({ type: "CostCenter", value: e.target.value })
                    }
                  />
                  {/* <details>
               
                </details> */}
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="col-2f">
                <div className="input-control">
                  <label htmlFor="Model">{t("Model")}</label>
                  <input type="text" placeholder={t("Model22U")} disabled />
                </div>
                <div className="input-control">
                  <label htmlFor="Model">{t("Code")}</label>
                  <input type="text" placeholder="######" disabled />
                </div>
                <div className="input-control">
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
                </div>
              </div>
              <div className="col-2f">
                <div className="input-control">
                  <label htmlFor="Model">{t("CostType")}</label>
                  <input
                    type="text"
                    placeholder={t("FixedAssetCosting")}
                    disabled
                  />
                </div>
                <div className="input-control">
                  <label htmlFor="Model">{t("Date")}</label>
                  <input type="text" value={date} disabled />
                </div>
                <div className="input-control">
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
                </div>
              </div>
            </div>
          </div>
          <form action="">
            <div className="row-2">
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
                  <input type="text" disabled />
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
            </div>
            <div className="Add-btn">
              <button onClick={() => setRows([...rows, data])}>
                <bootstrapIcon.BsFillCartPlusFill />
                Add
              </button>
            </div>
          </form>
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
                {rows?.map((row, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{rows[index].CostCenter}</td>
                      <td>{rows[index].PropertyType}</td>
                      <td>{rows[index].Quantity}</td>
                      <td>{rows[index].Comment}</td>
                      <td>{rows[index].Price}</td>
                      <td>
                        <button
                          style={{ background: "red", float: "right" }}
                          onClick={() =>
                            setRows(rows.filter((_, i) => i !== index))
                          }
                        >
                          {" "}
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {rows.length ? (
            <SubmitButton
              onClick={() => {
                HandleSubmit;
              }}
            />
          ) : null}
        </main>
      </div>
    </>
  );
}

export default NewFixedCost;
