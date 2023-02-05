import React, { useEffect,useState } from 'react'
import axios from 'axios';
const usePostData =({url,Data}) => {
    const [data,setData] = useState([])
        const HandleSubmit = async (event)=>{
             
            try{
                const responce = await axios.post(url,Data)
                setData(responce);
                <Alert/>
            }
            catch(err){
                console.error(err)
            }
        }
   return [data,HandleSubmit];
}

export default usePostData
