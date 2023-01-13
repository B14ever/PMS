import React, { useContext } from 'react';
import Context from '../Context/ContextApi';
const Navbar = () => {
    const StateContext = useContext(Context);
    const {toggle, setToggle,langBtn, setLangBtn} = StateContext;
    return <>
     <header className="header">
    <button className="menu-icon-btn" onClick={()=>toggle?setToggle(false):setToggle(true)}>
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="menu-icon"> <g><path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" ></path></g></svg>
   </button>
   <div className={`dropdawn ${langBtn?"open-dropdawn":""} `}>
    <button className="lang-btn" onClick={()=>langBtn?setLangBtn(false):setLangBtn(true)} >LNG</button>
    <div className="dropdawn-menu">
       <button className='lang' onClick={()=>i18n.changeLanguage("am")}>አማረኛ</button>
       <button className='lang' onClick={()=>i18n.changeLanguage("en")}>ENG</button>
       <button className='lang'>ORM</button>
    </div>
   </div>
    </header>
    </>
   
}
export default Navbar