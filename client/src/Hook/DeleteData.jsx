import React, { useState } from "react";
import axios from "axios";
const useDeleteData = (url) => {
  const [data, setData] = useState([]);
  const HandleDelete = async (event) => {
    event.preventDefault();
    try {
      const responce = await axios.delete(url);
      setData(responce);
    } catch (err) {
      console.error(err);
    }
  };
  return [data, HandleDelete];
};

export default useDeleteData;
