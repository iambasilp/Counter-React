import React, { useEffect, useState } from "react";
import "./Count.css";
import randomColor from "randomcolor";

function Count() {
  // Let initialize count state
  let [countState, setCountState] = useState(0);
  let [colorState, setColorState] = useState("white");

  function handleIncreament() {
    setCountState((prevState) => {
      return prevState + 1;
    });
  }

  function handleDecreament() {
    setCountState((prevState) => {
      return prevState - 1;
    });
  }

  useEffect(() => {
    setColorState(randomColor());
    console.log("Iam basil");
  }, [countState]);

  return (
    <>
      
      <div className="count-container">
        {console.log("Rendering.......")}
        {console.log("****************")}
        <button className="increament" onClick={handleIncreament}>
          +
        </button>
        <h1 style={{ color: colorState }}>{countState}</h1>
        <button className="decreament" onClick={handleDecreament}>
          -
        </button>
        <div></div>
      </div>
    </>
  );
}
export default Count;
