import React from 'react'
import LogoS from '../../../assets/images/profile.png'
import './logo.scss'
import 'animate.css'

const Logo = () => {
  const svgVariants = {
    hidden: { scale: 0.8 },
    visible: {
      scale: 1,
      transition: { duration: 1 },
    },
  }
  return (
    <div className="logo-container animate__animated animate__fadeInRight">
      <img src={LogoS} alt="JavaScript,  Developer" />
      
    </div>
  )
}

export default Logo
