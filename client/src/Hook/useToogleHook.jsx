import {useEffect,useState,useRef} from 'react'
function useToogleHook() {
    const [toggle,setToggle]= useState(true);
    const [langBtn,setLangBtn] = useState(false);
    const [dropdawn,setDropDawn] = useState(false);
    const dropRef = useRef();
    const handleDropDawn=()=>
    {
     setDropDawn(!dropdawn)
    }
    useEffect(()=>{
        const  handleDropDawnEffect =(e)=>{
            if(!dropRef.current.contains(e.target))
            {
              setDropDawn(false);      
            }
         }
         console.log(dropdawn,dropRef.current)
        document.addEventListener("click",handleDropDawnEffect)
        return document.removeEventListener("click",handleDropDawnEffect)
    },[dropdawn])
    return [toggle,setToggle,langBtn,setLangBtn,dropdawn,dropRef,handleDropDawn]
}

export default useToogleHook
