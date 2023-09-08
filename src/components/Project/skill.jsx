import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/animateLetters'
import { motion } from 'framer-motion'
import './project.scss'
import { iconArray } from '../../utils/icons'
import 'animate.css'
import { Container, Row, Col } from 'react-grid-system'
import { Link } from 'react-router-dom'
const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const skillLetters = ['S', 'k', 'i', 'l', 'l', 's']
  const pfont = window.innerWidth < 1000 ? '6vw':'3vw'
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="page-container">
        <div className="about-details">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillLetters}
              idx={15}
            />
          </h1>
          <Container className='skill-set'>
            <Row>
              {iconArray.map((Icon, ind) => (
                <Col key={ind} sm={3} md={2} xs={4}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: '0.3vw',
                    }}
                  >
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                      
                    >
                      {React.createElement(Icon.component, { size: `${pfont}` })}
                    </motion.span>
                    <p class="animate__animated animate__fadeIn">{Icon.name}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
          <Link to="/project" className="flat-button">
            KNOW MORE
          </Link>
        </div>
      </div>
    </>
  )
}

export default Skill
