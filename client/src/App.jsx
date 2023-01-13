import { Routes ,Route,BrowserRouter } from "react-router-dom";
import { Home } from "./page/home";
import Login from './page/loginpage'
import Employe from "./page/Employe";
const App =()=>{
return<>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="home" element={<Home />}/>
    <Route path="/employe" element={<Employe/>}></Route>
   </Routes>
</>
}
export default App;