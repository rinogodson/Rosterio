import React from 'react'
import './Display.css'
import { motion } from 'framer-motion'
import NameDisplay from './NameDisplay'
import RollnoDisplay from './RollnoDisplay'

const formatName = (name) => {
  return name;
}


function Display(props) {
  return (
    <motion.div
    layout
    initial={{ y: 20, opacity: 0}}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 0, opacity: 0 }}
    transition={{ duration: 1 }}
    className='displayContainer'>
      <RollnoDisplay setCurrentValue={props.setCurrentValue} currentValue={props.currentValue} />
      <NameDisplay name={((props.currentValue === "0" || props.currentValue > props.division.length || props.currentValue < 1) ? "..."  : props.division[parseInt(props.currentValue)-1].name)} />
    </motion.div>
  )
}

export default Display
