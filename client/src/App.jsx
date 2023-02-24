import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./page/home";
import Login from "./page/loginpage";
import Employe from "./page/Employe";
import ForbidenPage from "./page/ForbidenPage";
import RequireAuth from "./Componet/RequireAthu";
import NewEmployee from "./page/NewEmployee";
import PropertyInventory from "./page/PropertyInventory";
import PropertyRegistration from "./page/PropertyRegistration";
import PropertyInfo from "./page/propertyInformation";
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
import RareCost from "./page/RareCost";
import NewRareCostItem from "./page/NewRareCostItem";
import FixedIncome from "./page/FixedIncome";
import NewFixedIncome from "./page/NewFixedIncome";
import FixedCost from "./page/FixedCost";
import NewFixedCost from "./page/NewFixedCost";
import NewRareItemIncome from "./page/NewRareItemIncome";
import RareIncome from "./page/RareIncome";
import UsedPropertyIncome from "./page/UsedPropertyIncome";
import NewUsedPropertyIncome from "./page/NewUsedPropertyIncome";

import Profile from "./page/Profile";
import SubStokeClassDetail from "./page/subStokeClassDetail";
import MeasurType from "./page/measurTypeDetail";
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
          <Route
            path="/Propertyinventory"
            element={<PropertyInventory />}
          ></Route>
          <Route path="/PropertyInformation" element={<PropertyInfo />}></Route>

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
          <Route path="/RareItemCost" element={<RareCost />} />
          <Route path="/NewRareItemCost" element={<NewRareCostItem />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/substokeClassInfo" element={<SubStokeClassDetail />} />
          <Route path="/measurTypeInformation" element={<MeasurType />} />
          <Route path="/FixedIncome" element={<FixedIncome />} />
          <Route path="/NewFixedIncome" element={<NewFixedIncome />} />
          <Route path="/RareItemIncome" element={<RareIncome />} />
          <Route path="/NewRareItemIncome" element={<NewRareItemIncome />} />
          <Route path="/UsedProrpertIncome" element={<UsedPropertyIncome />} />
          <Route path="/NewUsedPropertyIncome" element={<NewUsedPropertyIncome />} />
          <Route path="/FixedCost" element={<FixedCost />} />
          <Route path="/NewFixedCost" element={<NewFixedCost />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
