import React,{useContext}from 'react'
import Context from '../Context/Contexts'
function LoadMore() {
    const getContext = useContext(Context);
    const {HandleLoad} = getContext;
  return (
    <div className="loadMore">
                 <select name="" id="" onChange={HandleLoad}>
                     <option value="5">5</option>
                     <option value="10">10</option>
                     <option value="15">15</option>
                     <option value="20">20</option>
                </select>           
     </div>
  )
}

export default LoadMore
