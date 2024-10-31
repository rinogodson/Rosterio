import React from "react";
import { useState } from "react";
import divisionList from "./dataSource/divisionList.json";
import { AnimatePresence } from "framer-motion";
import "./App.css";

import Keypad from "./components/keypad/Keypad";
import BtContainer from "./components/bottomButtons/BtContainer";
import Display from "./components/display/Display";
import TopBar from "./components/topBar/TopBar";
import ListerContainer from "./components/Lister/ListerContainer";

function App() {
  const [marked, setMarked] = useState([]);
  const [log, setLog] = useState([]);
  const [currentValue, setCurrentValue] = useState("0");
  const [displaying, setDisplaying] = useState(false);

  const [isAbMode, setIsAbMode] = useState(true);
  

  return (
    <div className="App">
      <TopBar
        division={divisionList.name}
        percent={
          (isAbMode ? Math.round((1 - marked.length / divisionList.list.length) * 100) : Math.round((marked.length / divisionList.list.length) * 100)) +
          "%"
        }
      />

      {!displaying && 
      <ListerContainer marked={marked} isAbMode={isAbMode} setIsAbMode={setIsAbMode} log={log} division={divisionList.list}
      />}

      {!displaying && 
      <Display
        currentValue={currentValue}
        setCurrentValue={setCurrentValue}
        division={divisionList.list}
      />}
      
      <Keypad isAbMode={isAbMode} divisionInfo={{name: divisionList.name, length: divisionList.list.length}} marked={marked} division={divisionList.list} currentValue={currentValue} setCurrentValue={setCurrentValue} displaying={displaying} setDisplaying={setDisplaying} />
      <h3
        style={{
          textAlign: "center",
          fontSize: "10px",
          fontFamily: "JetBrains Mono",
          color: "#f0f0f0",
          marginTop: "10px",
          marginBottom: "10px",
          opacity: "0.7",
        }}
      >
        Made by{" "}
        <a style={{ color: "grey" }} href="https://github.com/rinogodson">
          Rino Godson
        </a>
      </h3>{" "}
      {/* Credits */}

      <AnimatePresence>
      <BtContainer
        setCurrentValue={setCurrentValue}
        currentValue={currentValue}
        marked={marked}
        setMarked={setMarked}
        length={divisionList.list.length}
        setLog={setLog}
        log={log}
        isAbMode={isAbMode}
      />
      </AnimatePresence>
      {/* <ul>
        {divisionList.list.map(division => <li key={division.no}>{("0" + division.no).slice(-2) + ". " + division.name}</li>)}
      </ul> */}
    </div>
  );
}

export default App;
