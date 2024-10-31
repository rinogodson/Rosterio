import React from "react";
import "./AbsentBt.css";


function AbsentBt({ setCurrentValue, clickFunctions, isAbMode }) {
  return (
    <button
      className={isAbMode ? "ABt" : "PBt"}
      style={{ borderRadius: "25px 50px 50px 25px" }}
      onClick={() => {
        clickFunctions.addToMarked();
        setCurrentValue("0");
        if ("vibrate" in navigator) {
          navigator.vibrate([50, 0, 0, 50, 0, 0, 50]);
        } else {
          console.log("Vibration API is not supported on this device.");
        }
      }}
    >
      <span className="prabText">{isAbMode ? "Absent" : "Present"}</span>
    </button>
  );
}

export default AbsentBt;
