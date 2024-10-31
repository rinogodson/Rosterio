import React from 'react'
import { motion } from 'framer-motion';


function ListElement({ no, division, opacity, isAbMode }) {
  return (
    <motion.div className="listElement"
      layout
      initial={{ y: 20, opacity: 0}}
      animate={{ y: 0, opacity: opacity }}
      exit={{ y: 0, opacity: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 45, mass: 6 }}
      style={{
        backgroundColor: no.isMarked ? (isAbMode ? "#30010c" : "#01301b") : (isAbMode ? "#01301b" : "#30010c"),
      }}

    >
      <p>
      {("0" + division[no.number - 1].no).slice(-2)}
      </p>
    </motion.div>
  );
}

export default ListElement
