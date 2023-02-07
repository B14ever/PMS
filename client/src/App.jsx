import { Routes ,Route,BrowserRouter } from "react-router-dom";
import { Home } from "./page/home";
import Login from './page/loginpage'
import Employe from "./page/Employe";
import ForbidenPage from "./page/ForbidenPage";
import RequireAuth from "./Componet/RequireAthu";
import NewEmployee from "./page/NewEmployee"
import PropertyRegistration from "./page/PropertyRegistration";
const App =()=>{
return<>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Forbiden" element={<ForbidenPage/>}/>
     <Route element={<RequireAuth Autherazetion={["Employee","Admin"]}/>}>
         <Route path="/home" element={<Home />}/>
    </Route>
    <Route element={<RequireAuth Autherazetion={["Admin"]}/>}>
         <Route path="/employe" element={<Employe/>}></Route>
         <Route path="/newEmployee" element={<NewEmployee/>}></Route>
         <Route path="/PropertyI" element={<PropertyRegistration/>}></Route>
   </Route>
     
   </Routes>
</>
}
export default App;