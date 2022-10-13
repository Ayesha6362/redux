import React from "react";
import { useSelector } from "react-redux";

export const Fechdata = () => {
  const selectordata = useSelector((State) => State.sample2.mydata);
  console.log(selectordata);
  return(
    <div>
      {selectordata.map((item)=> {
        return(
          <div>
            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
          </div>
        )
      }
        
      )}
    </div>
  )
};
