import React from 'react'
import LogoS from '../../../assets/images/profile.png'
import './logo.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoS} alt="JavaScript,  Developer" />{' '}
    </div>
  )
}

export default Logo
