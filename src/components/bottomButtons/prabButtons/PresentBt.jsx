import React from "react";
import "./PresentBt.css";

function PresentBt({ setCurrentValue, clickFunctions, isAbMode }) {
  return (
    <button
      className={isAbMode ? "PBt" : "ABt"}
      style={{ borderRadius: "50px 25px 25px 50px" }}
      onClick={() => {
        setCurrentValue("0");
        clickFunctions.removeFromMarked();
        if ("vibrate" in navigator) {
          navigator.vibrate([50, 0, 0, 50, 0, 0, 50]);
        } else {
          console.log("Vibration API is not supported on this device.");
        }
      }}
    >
      <span className="prabText">{isAbMode ? "Pr." : "Ab."}</span>
    </button>
  );
}

export default PresentBt;
