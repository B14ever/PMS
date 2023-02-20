import { useEffect, useState, useContext } from "react";
import Context from "../Context/Contexts";
import axios from "axios";
export function useGetData(url) {
  const getContext = useContext(Context);
  const { find, load } = getContext;
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetData = async () => {
      try {
        const responce = await axios.get(url);
        setData(responce.data);
      } catch (err) {
        console.error(err);
      }
    };
    GetData().catch(console.error);
  }, [find]);
  return [data];
}
export function useGetTotalData(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetData = async () => {
      try {
        const responce = await axios.get(url);
        setData(responce.data[0].Total);
      } catch (err) {
        console.error(err);
      }
    };
    GetData().catch(console.error);
  }, []);
  return [data];
}
