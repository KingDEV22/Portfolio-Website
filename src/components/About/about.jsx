import React, { useEffect, useState } from 'react'
import { iconsphere } from '../../utils/icons'
import AnimatedLetters from '../AnimatedLetters/animateLetters'
import './about.scss'
import 'animate.css'
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
        <div className="text-zone ">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p className='animate__animated animate__fadeInUp'>
            I'm a software engineer with a B-Tech degree in Computer Science
            Engineering. I have done a six month internship at Amazon as Support
            Enginner II Intern where I learned about corporate culture and
            principles.
          </p>
          <p className='animate__animated animate__fadeInDown'>
            I specialize in machine learning-driven web apps and microservices.
            Keeping up with tech trends is my priority. I'm eager to contribute
            to groundbreaking projects and explore tech's endless possibilities.
          </p>
          <Link to="/education" className="flat-button">
            KNOW MORE
          </Link>
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
    </>
  )
}

export default About
