import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./page/home";
import Login from "./page/loginpage";
import Employe from "./page/Employe";
import ForbidenPage from "./page/ForbidenPage";
import RequireAuth from "./Componet/RequireAthu";
import NewEmployee from "./page/NewEmployee";
import PropertyRegistration from "./page/PropertyRegistration";
import VechleList from "./page/VechleList";
import NewVecheles from "./page/NewVecheles";
import Office from "./page/Office";
import Department from "./page/Department";
import PropertyMesurment from "./page/PropertyMesurment";
import SubClassification from "./page/stocksubClass";
import MeasurmentType from "./page/MeasurmentType";
import DepartmentType from "./page/DepartmentType";
import DetailInfo from "./page/detailInfo";
import EmployeeDetail from "./page/employeeDetail";
import OfficeDetail from "./page/officeDetail";
import DepartmentDetail from "./page/departmentDetail";
import DepartmentTypeDetail from "./page/departmentTypeDetail";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Forbiden" element={<ForbidenPage />} />
        <Route element={<RequireAuth Autherazetion={["Employee", "Admin"]} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/Vehiclelist" element={<VechleList />} />
          <Route path="/NewVechiles" element={<NewVecheles />} />
          <Route path="/Department" element={<Department />} />
        </Route>
        <Route element={<RequireAuth Autherazetion={["Admin"]} />}>
          <Route path="/employe" element={<Employe />}></Route>
          <Route path="/newEmployee" element={<NewEmployee />}></Route>
          <Route path="/PropertyI" element={<PropertyRegistration />}></Route>
          <Route path="/Office" element={<Office />}></Route>
          <Route path="/Departmenttype" element={<DepartmentType />} />
          <Route
            path="/Propertyclassification"
            element={<PropertyMesurment />}
          ></Route>
          <Route
            path="/PropertySubclassification"
            element={<SubClassification />}
          ></Route>
          <Route
            path="/typesOfMeasurments"
            element={<MeasurmentType />}
          ></Route>
          <Route path="/detailInformation" element={<DetailInfo />}></Route>
          <Route
            path="/employeeInformation"
            element={<EmployeeDetail />}
          ></Route>
          <Route path="/officeInformation" element={<OfficeDetail />}></Route>
          <Route
            path="/departmentInformation"
            element={<DepartmentDetail />}
          ></Route>
          <Route
            path="/departmentTypeInformation"
            element={<DepartmentTypeDetail />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
};
export default App;
