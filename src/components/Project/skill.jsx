import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/animateLetters'
import Loader from 'react-loaders'
import './project.scss'
import { iconArray } from '../../utils/icons'
import { Container, Row, Col } from 'react-grid-system'
import { Link } from 'react-router-dom'
const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const skillLetters = ['S', 'k', 'i', 'l', 'l', 's']
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
          <Container style={{ padding: '1vw', marginTop: '1vw' }}>
            <Row>
              {iconArray.map((Icon, ind) => (
                <Col key={ind} sm={2}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: '0.3vw',
                    }}
                  >
                    {React.createElement(Icon.component, { size: '3vw' })}{' '}
                    <p>{Icon.name}</p>
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
      <Loader type="line-spin-fade-loader" />
    </>
  )
}

export default Skill
