import React from 'react'
import LogoS from '../../../assets/images/profile.png'
import './logo.scss'
import { motion } from 'framer-motion'

const Logo = () => {
  const svgVariants = {
    hidden: { scale: 0.8 },
    visible: {
      scale: 1,
      transition: { duration: 1 },
    },
  }
  return (
    <motion.div className="logo-container" initial='hidden' animate='visible' variants={svgVariants}>
      <img src={LogoS} alt="JavaScript,  Developer" />
      
    </motion.div>
  )
}

export default Logo
