import React, { createContext, useState } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
const Context = createContext({});
export const ContextProvider = ({ children }) => {
  const date = new Date().toLocaleDateString();
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(true);
  const [langBtn, setLangBtn] = useState(false);
  const [dropdawn, setDropDawn] = useState(false);
  const [load, setLoad] = useState(5);
  const [find, setFind] = useState("");
  const [General, setGeneral] = useState(false);
  const [Securit, setSecurit] = useState(false);
  const [Defualt, setDfualt] = useState(true);
  const HandleSecurity = () => {
    setDfualt(false);
    setGeneral(false);
    setSecurit(!Securit);
  };
  const HandleGeneral = () => {
    setGeneral(!General);
    setSecurit(false);
  };
  const handleDropDawn = () => {
    setDropDawn(!dropdawn);
  };

  const HandleLoad = (e) => {
    setLoad(e.target.value);
  };
  const HandleFind = (e) => {
    setFind(e.target.value);
  };
  return (
    <Context.Provider
      value={{
        toggle,
        setToggle,
        langBtn,
        setLangBtn,
        dropdawn,
        handleDropDawn,
        load,
        HandleLoad,
        find,
        HandleFind,
        t,
        i18n,
        date,
        General,
        Securit,
        Defualt,
        HandleGeneral,
        HandleSecurity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
