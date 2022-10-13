import React from "react"
import { useEffect,useState } from "react"
// import axios from "react";

export const Child=()=>{
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("update")
    })
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}