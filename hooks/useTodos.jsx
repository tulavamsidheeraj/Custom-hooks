import { useState , useEffect } from "react";
import axios from "axios";
export default function useTodos(n){
    const [todos,setTodos]=useState([])
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const value=setInterval(()=>{
            axios.get(".....")
            .then(res=>{
                setTodos(res.data.todos);
                setLoading(false);
            })
        },n*1000)
        axios.get(".....")
            .then(res=>{
            setTodos(res.data.todos);
            setLoading(false);
        })
        return(
            clearInterval(value)
        )
    },[n])
    
    return {todos,loading};
}