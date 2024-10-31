import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

function NameDisplay({ name }) {
  return (
    <AnimatePresence mode="wait">
    <motion.div
    className='name'>
      <motion.span className='nameText'
      key={name}
      layout
      initial={{ opacity: 1, y: -10, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0,  filter: "blur(0px)"}}
        exit={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        transition={{ duration: 0.3, type: "spring", stiffness: 600, damping: 20, mass: 1 }}>
      {name}
        </motion.span>
    </motion.div>
    </AnimatePresence>
  )
}

export default NameDisplay
