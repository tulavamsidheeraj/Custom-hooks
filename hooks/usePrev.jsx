import { useEffect,useState } from "react";
export function usePrev(value){
    const [lastValue,setLastValue]=useState(null);
    const [lastToLastValue,setLastToLastValue]=useState(null);
    useEffect(()=>{
        setLastToLastValue(lastValue)
        setLastValue(value)
    },[value])
    return lastToLastValue
}