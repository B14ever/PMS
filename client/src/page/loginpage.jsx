import React from 'react';
import i18n from 'i18next';
import {useTranslation,Trans} from 'react-i18next';
import {useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios'
import '../index.css'
axios.defaults.withCredentials=true;
const Login = ()=>{
  const {t} = useTranslation()
  const [Email,setEmail] = useState('');
  const [password,setPassword]= useState('');
  const navigate = useNavigate();
  const login = async (e)=>{
    e.preventDefault()
    try{
      const result= await axios.post('http://localhost:5000/login',{Email:Email,password:password});
      console.log(result.data)
      if(result.data){ navigate('home')}
     
    }
     catch{
      console.log("error")
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
