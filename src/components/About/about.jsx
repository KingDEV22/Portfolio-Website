import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/animateLetters'
import './about.scss'
import { Link } from 'react-router-dom'
import RotateCube from './rotateCube'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timeout);
  }, [setLetterClass]);

  return (
    <>
      <div className="page-container">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"About Me".split('')}
              idx={0}
            />
          </h1>
          <p className='animate__bounceIn'>
            I'm a software engineer with a B-Tech degree in Computer Science
            Engineering. I have done a six month internship at Amazon as Support
            Enginner II Intern where I learned about corporate culture and
            principles.
          </p>
          <p className='animate__bounceIn'>
            I specialize in machine learning-driven web apps and microservices.
            Keeping up with tech trends is my priority. I'm eager to contribute
            to groundbreaking projects and explore tech's endless possibilities.
          </p>
          <Link to="/education" className="flat-button">
            KNOW MORE
          </Link>
        </div>
        <RotateCube />
      </div>
    </>
  )
}

export default About
