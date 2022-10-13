import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
const Dashborde = () => {
  const navDispatch = useDispatch();
  const [linkeName, setLinkeName] = useState("");
  const [linke, setLinke] = useState("");

  const linkeData = () => {
    navDispatch(linkeact(linkeName, linke));
  };

  return (
    <div>
      <input
        type="text"
        id="linkename"
        onChange={() => setLinkeName(e.target.value)}
      />
      <input type="text" id="linke" onChange={() => setLinke(e.target.value)} />
      <button onClick={() => linkeData()}>navbar</button>
    </div>
  );
};

export default Dashborde;
