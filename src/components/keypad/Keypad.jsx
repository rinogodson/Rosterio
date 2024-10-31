import React from "react";
import Key from "./Key";
import "./Keypad.css";
import CopyBt from "./smallKeys/CopyBt";
import ListBt from "./smallKeys/ListBt";

import { motion, AnimatePresence } from "framer-motion";

import Element from "../Element/Element";

function Keypad({
  isAbMode,
  divisionInfo,
  marked,
  division,
  currentValue,
  setCurrentValue,
  displaying,
  setDisplaying,
}) {
  const handleClick = (no) => {
    if (currentValue === "0") {
      setCurrentValue(no);
    } else {
      setCurrentValue(
        (currentValue + no).length > 2 ? currentValue : currentValue + no
      );
    }
  };

  return (
    <AnimatePresence mode="wait">
    <motion.div
      className="keypadContainerContainer"
      layout
      transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 50, mass: 6 }}
    >
      <motion.div
        className="keypadContainer"
        style={{ height: !displaying ? "fit-content" : "530px" }}
      >
        <motion.div
          layout
          initial={{ y: 0, opacity: 0}}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 45, mass: 6 }}
          className="keypad"
          style={
            !displaying
              ? {
                  gridTemplateColumns: "100px 100px 100px",
                  marginBlockEnd: "0px",
                  display: "grid",
                  gridTemplateRows: "auto",
                }
              : { gridTemplateColumns: "350px", marginBlockEnd: "10px" , display: "flex", flexDirection: "column", width: "350px"}
          }
        >
          {displaying
            ? [...marked].sort((a, b) => a - b).map((no) => <Element key={no} name={division[no - 1]} />)            : ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((no) => (
                <Key key={no} no={no} ONClick={() => handleClick(no)} />
              ))}
        </motion.div>
        
        <CopyBt isAbMode={isAbMode} divisionInfo={divisionInfo} list={marked.map((no) => division[no - 1])} />
        <Key key={0} displaying={displaying} no={displaying ? ((isAbMode ? Math.round((1 - marked.length / division.length) * 100) : Math.round((marked.length / division.length) * 100)) +
          "%") : "0"} ONClick={() => handleClick("0")} />
        <ListBt setDisplaying={setDisplaying} displaying={displaying} />
        </motion.div>
    </motion.div>
    </AnimatePresence>

  );
}

export default Keypad;
