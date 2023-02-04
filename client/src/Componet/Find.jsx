import React, { useContext } from 'react'
import Context from '../Context/Contexts'
function Find() {
    const getContext = useContext(Context);
    const {t,HandleFind} = getContext;
  return (
    <div className='Find'>
      <label htmlFor="find">{t("Find")}</label> 
      <input onChange={HandleFind} type="text" id='find' placeholder={t("FindPlaceHolder")} />
    </div>
  )
}

export default Find
