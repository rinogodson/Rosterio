import React from "react";

function StateToggleBt({ marked, isAbMode, setIsAbMode }) {
  return (
    <div>
      <button
        style={{ backgroundColor: isAbMode ? "#1A0E0E" : "#131a0e" }}
        className="stateToggleBt"
        onClick={() => setIsAbMode(!isAbMode)}
      >
        {isAbMode ? marked.length + " Ab" : marked.length +  " Pr"}
      </button>
    </div>
  );
}

export default StateToggleBt;
