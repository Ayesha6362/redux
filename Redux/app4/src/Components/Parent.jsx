import React from "react";
import { useState } from "react";
export const Parent = () => {
  const [persondetails, setPersondetails] = useState({
    fname: "",
    lname: "",
    age: "",
  });
  return (
    <div>
      <h1>Hello</h1>
      <label htmlFor="">First name:</label>
      <input
        type="text"
        onChange={(e) =>
          setPersondetails({ ...persondetails, fname: e.target.value })
        }
      />
      <label htmlFor="">First last:</label>
      <input
        type="text"
        onChange={(e) =>
          setPersondetails({ ...persondetails, lname: e.target.value })
        }
      />
      <label htmlFor="">Age:</label>
      <input
        type="text"
        onChange={(e) =>
          setPersondetails({ ...persondetails, age: e.target.value })
        }
      />
      <h1>Firstname:{persondetails.fname}</h1>
      <h1>Last name:{persondetails.lname}</h1>
      <h1>Agee:{persondetails.age}</h1>
    </div>
  );
};
