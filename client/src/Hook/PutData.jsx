import React, { useState } from "react";
import axios from "axios";
const usePutData = ({ url, Data }) => {
  const [data, setData] = useState([]);
  const HandleSubmit = async (event) => {
    event.preventDefault();
    try {
      const responce = await axios.put(url, Data);
      setData(responce);
    } catch (err) {
      console.error(err);
    }
  };
  return [data, HandleSubmit];
};

export default usePutData;
