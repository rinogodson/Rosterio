import React from "react";
import "./ListerContainer.css";
import ListElement from "./ListElement";
import StateToggleBt from "./StateToggleBt";
import { AnimatePresence, motion } from 'framer-motion';

export default function ListerContainer({marked, isAbMode, setIsAbMode, log, division }) {
  const displayedLog = log;

  const containerRef = React.useRef(null);

  // const scrollToBottom = () => {
  //   containerRef.current.scrollTop = containerRef.current.scrollHeight;
  // };
  // React.useEffect(() => {
  //   scrollToBottom();
  // }, [marked]);

  return (
    <>
      <motion.p 
      layout
      className="log">
        {displayedLog.length
          ? `${
              division[displayedLog[displayedLog.length - 1].number - 1].name
            } - ${
              displayedLog[displayedLog.length - 1].isMarked
                ? (isAbMode ? "Absent" : "Present")
                : (isAbMode ? "Present" : "Absent")
            }`
          : "No updates yet"}
      </motion.p>
      <StateToggleBt marked={marked} isAbMode={isAbMode} setIsAbMode={setIsAbMode} key="state-toggle-bt" />

      <motion.div ref={containerRef} className="listerContainer">
        <AnimatePresence>
          <div className="accumulator">
          {displayedLog.map(
            (no, index) => (
              (
                <ListElement
                  no={no}
                  division={division}
                  key={`${no.number}-${no.isMarked}-${index}`}
                  opacity={1 - (displayedLog.length - 1 - index) * 0.09}
                  isAbMode={isAbMode}
                />
              )
            )
          )}
          </div>
        </AnimatePresence>
      </motion.div>
    </>
  );
}
