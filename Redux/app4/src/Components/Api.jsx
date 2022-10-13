import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const Api = () => {
  const [Apidata, setApiData] = useState([]);
  console.log(Apidata);
  
  const getApidata = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setApiData(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getApidata();
  }, []);

  return (
    <div>
      
      {Apidata.map((item)=>{
        return(
          <div>
            <h1>{item.price}</h1>
          </div>
        )
      })}
    </div>
  );
};
