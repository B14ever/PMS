import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SideBar from "../Componet/sidebar";
import Navbar from "../Componet/navbar";
import Context from "../Context/Contexts";
import PageHeader from "../Componet/PageTitle";
import usePutData from "../Hook/PutData";
import styled from "styled-components";
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
function EditOffice() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { offices } = state || {};
  const getContext = useContext(Context);
  const { t } = getContext;
  const [data, setData] = useState({
    id: offices.ID,
    officeName: "",
    Code: "",
    Description: "",
  });
  console.log(offices.ID);
  const [res, HandleSubmit] = usePutData({
    url: "http://localhost:5000/EditOffice",
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
                      placeholder={offices.Bureau_Name}
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
                      placeholder={offices.Code}
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
                      placeholder={offices.Description}
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
            <button
              className="back-btn"
              onClick={() => {
                navigate(-1);
              }}
            >
              {t("back")}
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

export default EditOffice;
