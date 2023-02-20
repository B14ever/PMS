import React, { useContext, useEffect, useReducer } from "react";
import usePostData from "../Hook/PostData";
import Context from "../Context/Contexts";
function SubmitButton({ API, DATA }) {
  const [res, HandleSubmit] = usePostData({ url: API, Data: DATA });
  const getContext = useContext(Context);
  const { t } = getContext;
  return (
    <div className="input-control">
      <div className="submit-control">
        <button type="submit" onClick={HandleSubmit}>
          {t("Registor")}
        </button>
        <button type="submit">{t("Cancle")}</button>
      </div>
    </div>
  );
}

export default SubmitButton;
