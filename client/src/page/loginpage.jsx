import React,{useState,useContext} from 'react';
import Context from '../Context/Contexts';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
axios.defaults.withCredentials = true;
import '../index.css'
import { useEffect } from 'react';
const Login = ()=>{
   const getContext = useContext(Context);
   const {setAuthentication,t,i18n} = getContext;
   const [Email,setEmail] = useState('');
   const [password,setPassword]= useState('');
   const navigate = useNavigate();
   const login = async (e)=>{
    e.preventDefault()
    try{
      const responce= await axios.post('http://localhost:5000/login',{Email:Email,password:password});
       setAuthentication(true)
        setEmail('');
        setPassword('');
        navigate('/home');
    }
     catch (err){
          throw err;
     }
    }
  return <>
  <div className="logInpage">
       <section className='side'>
        <img src="image\img.svg" alt="" />
       </section>
      <section className='main'>
        <div className="login-countainer">
        <p className='title'>PMS</p>
            <div className='separator'></div>
            <p className='welcome-message'>{t("loginText")}</p>
          <form action="" className='login-form' onSubmit={login}>
            <div className="form-control">
            <input type="email" placeholder='User Name'  onChange={e=>{setEmail(e.target.value)}} />
            </div>
            <div className="form-control">
              <input type="password" placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
            </div>
            <div className="language">
              <p >Language</p>
              <button onClick={()=>i18n.changeLanguage("am")}>አማረኛ</button>
               <button onClick={()=>i18n.changeLanguage("en")}>English</button>
            </div>
           <button  type='submit' className='submit' >{t("buttonText")}</button>
            </form>
        </div>
      </section>
      </div>
  </>
  
}
export default Login
