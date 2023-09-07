import React from 'react'
import LogoS from '../../../assets/images/profile.png'
import './logo.scss'
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

const Logo = () => {
  return (
    <div className="logo-container">
      <img  src={LogoS} alt="JavaScript,  Developer" />{' '}
     
    </div>
  )
}

export default Logo
