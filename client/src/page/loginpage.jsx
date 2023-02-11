import React,{useState,useContext,useRef} from 'react';
import Context from '../Context/Contexts';
import {useNavigate} from 'react-router-dom'
import photo from '../image/images.jpg'
import axios from 'axios'
import Typical from 'react-typical';
axios.defaults.withCredentials = true;
import '../index.css'
const Login = ()=>{
   const getContext = useContext(Context);
   const {t,i18n} = getContext;
   const [Email,setEmail] = useState('');
   const [password,setPassword]= useState('');
   const [passwordErorr,setPasswordErorr] = useState('')
   const [emailError,setemailError] = useState('')
   const passRef = useRef();
   const emailRef = useRef();
   const navigate = useNavigate();
   const login = async (e)=>{
    e.preventDefault()
    try{
      const responce= await axios.post('http://localhost:5000/login',{Email:Email,password:password});
      if(responce.data.passERR)
      {
         passRef.current.style.borderColor = "red"
         setPasswordErorr(responce.data.passERR)
      }
      else if (responce.data.userERR)
      { 
           emailRef.current.style.borderColor = "red"
           setemailError(responce.data.userERR)
      }
    else
      {
        sessionStorage.setItem("autenthicate",JSON.stringify(responce.data[0].Email));
        sessionStorage.setItem("autherazetion",JSON.stringify(responce.data[0].Access_Level));
        setEmail('');
        setPassword('');
        navigate('/home');
      }
      
    }
     catch (err){
          throw err;
     }
    }
  return <>
  <div className="login-container">
        <div className="form">
            <form className="form__content" action="#!" onSubmit={login}>
                <div className="form__content__header">
                    <div className="logo">
                    <img src={photo} alt="Channal logo"/>
                    </div>
                     <div className="heading">
<h1> 
{""}
<Typical
loop={Infinity}
steps={[
"WellcomeToPMS",
500,
"LoginPlease",
500,

]}
/>

</h1>
</div>
                <div className="form__field">
                    <label className="form__label" >User Name</label>
                    <input className="form__input" placeholder='User Name' ref={emailRef} type="email" name="email" id="email" onChange={e=>{setEmail(e.target.value)}}/>
                    <span>{emailError?emailError:''}</span>
                </div>
                <div className="form__field">
                    <label className="form__label" >Password</label>
                    <input className="form__input" placeholder='Password' ref={passRef} type="password" name="pwd" id="pwd" onChange={e=>setPassword(e.target.value)}/>
                    <span>{passwordErorr?passwordErorr:''}</span>
                </div>
                <div className="recover">
                <a href="#!">Forgot password?</a>
                </div>
                <div className="form__submit">
                    <button type='submit' className='btn'>{t("buttonText")}</button>
                </div>
            </form>
            <div className="select-lang">
                <select onChange={(e)=>i18n.changeLanguage(e.target.value)}>
                     <option defaultValue >{t("LNG")}</option>
                    <option value="am">አማረኛ</option>
                    <option value="en">Engilsh</option>
                    </select>
                </div>
        </div>
        <div className="cta">
            <div className="cta__content">
                <div className="boxs">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
  </>
  
}
export default Login
