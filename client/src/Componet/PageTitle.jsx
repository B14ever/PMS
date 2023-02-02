import React,{useContext} from 'react'
import Context from '../Context/Contexts'
function PageHeader({Message}) {
  return (
    <div className='Page-Header' >
        <h1>{Message}</h1>
    </div>
  )
}

export default PageHeader
