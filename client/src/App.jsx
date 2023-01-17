import { Routes ,Route,BrowserRouter } from "react-router-dom";
import { Home } from "./page/home";
import Login from './page/loginpage'
import Employe from "./page/Employe";
import RequireAuth from "./Componet/RequireAthu";
const App =()=>{
return<>
    <Routes>
    <Route path="/" element={<Login/>}/>
     <Route element={<RequireAuth/>}>
         <Route path="/home" element={<Home />}/>
         <Route path="/employe" element={<Employe/>}></Route>
     </Route>
   </Routes>
</>
}
export default App;