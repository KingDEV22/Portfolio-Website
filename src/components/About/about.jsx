import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { iconsphere } from '../../utils/icons'
import AnimatedLetters from '../AnimatedLetters/animateLetters'
import './about.scss'
import { Link } from 'react-router-dom'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="page-container">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a software engineer with a B-Tech degree in Computer Science
            Engineering. During my Amazon internship, I led projects deploying
            AWS services for Just Walk Out Technology (JWO) stores, streamlining
            processes and collaborating with cross-functional teams for
            error-free execution.
          </p>
          <p>
            I specialize in machine learning-driven web apps and microservices.
            Keeping up with tech trends is my priority. I'm eager to contribute
            to groundbreaking projects and explore tech's endless possibilities.
          </p>
          <Link to="/education" className="flat-button">
            KNOW MORE
          </Link>
          {/* <button className="flat-button" onClick={() => setShow(2)}>
              KNOW MORE
            </button> */}
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            {iconsphere.map((item, ind) => (
              <div className={`face${ind + 1}`} key={ind}>
                {React.createElement(item, { size: '4vw' })}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="line-spin-fade-loader" />
    </>
  )
}

export default About
