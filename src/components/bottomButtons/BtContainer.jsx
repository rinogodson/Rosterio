import React from 'react'
import './BtContainer.css'
import PresentBt from './prabButtons/PresentBt'
import AbsentBt from './prabButtons/AbsentBt'

import { motion } from 'framer-motion'

function Container({ setCurrentValue, currentValue, marked, setMarked, length, setLog, log, isAbMode }) {
  const removeFromMarked = () => {
    if (
      currentValue !== "0" &&
      currentValue <= length &&
      currentValue > 0 &&
      marked.includes(currentValue)
    ) {
      setMarked(marked.filter((no) => no !== currentValue));
  
      setLog([
        ...log,
        {
          number: currentValue,
          isMarked: false,
        },
      ]);
    }
  };

  const addToMarked = () => {
    if (
      currentValue !== "0" &&
      currentValue <= length &&
      currentValue > 0 &&
      !marked.includes(currentValue)
    ) {
      setMarked([...marked, currentValue]);
  
      setLog([
        ...log,
        {
          number: currentValue,
          isMarked: true,
        },
      ]);
    }
  };
  
  return (
    <motion.div className='BtContainer' layout transition={{ duration: 0.5 }}>
      <PresentBt setCurrentValue={setCurrentValue} clickFunctions={{addToMarked, removeFromMarked}} isAbMode={isAbMode} />
      <AbsentBt setCurrentValue={setCurrentValue} clickFunctions={{addToMarked, removeFromMarked}} isAbMode={isAbMode}/>
    </motion.div>
  )
}

export default Container
