import { useState, useEffect } from "react"

export default function useDimensions(){
    const [size,setSize]=useState({height:0,width:0})
    const handleWindowSize=(e)=>{
        setSize({height:e.innerHeight,width:e.innerWidth})
    }
    useEffect(()=>{
        window.addEventListener("resize",handleWindowSize)
        return(
            ()=>{
                window.removeEventListener("resize",handleWindowSize)
            }
        )
    },[])
    return size;
}