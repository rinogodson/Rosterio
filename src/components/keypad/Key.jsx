import React from "react";
import "./Key.css";



function Key(props) {
  return (
    <button
      key={props.no}
      className="key"
      onClick={() => {
        props.ONClick();
        if ("vibrate" in navigator) {
          navigator.vibrate([50]);
        } else {
          console.log("Vibration API is not supported on this device.");
        }
      }}
      style={{
        color: props.displaying ? "#CFEFD7" : "hsl(0, 0%, 80%)",
        textShadow: props.displaying ? "0px 0px 25px #CFEFD7" : "0px 0px 30px rgba(255, 255, 255, 0.6)",
      }}
    >
      <span className="keyText">{props.no}</span>
    </button>
  );
}

export default Key;
