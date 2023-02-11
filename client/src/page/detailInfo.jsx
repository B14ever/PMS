import { useGetTotalData } from "../Hook/GetData";

function DetailInfo(id) {
  const [TotalData] = useGetTotalData("");
  console.log(id);
  return <div> it is detailed information page</div>;
}

export default DetailInfo;
