import { useEffect, useState } from 'react'
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faJava,
  faAndroid,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animateLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './about.scss'
import '../Home/home.scss'
import { Link } from 'react-router-dom'
import C from '../../assets/images/c.png'
import Spring from '../../assets/images/springBoot.png'
import Python from '../../assets/images/python.png'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious Data Analyst looking for a role in established IT
            company with the opportunity to work with the latest technologies on
            challenging and diverse projects.
          </p>
          <p>
            I am currently, pursuing my B-Tech in Computer Science and
            Engineering from Narula Institute of Technology.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time. I am very about
            exploring real world data and develop new things out of it. and
          </p>

          <Link to="/project" className="flat-button">
            KNOW MORE
          </Link>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              {/* <FontAwesomeIcon icon={faPython} color="#DD0031" /> */}
              {/* <div className="face7"> */}
              <img src={Python} alt="" />
              {/* </div> */}
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJava} color="#EC4D28" />
            </div>
            <div className="face7">
              <img src={C} alt="" />
            </div>
            <div className="face8">
              <img src={Spring} alt="" />
            </div>
            <div className="face9">
              <FontAwesomeIcon icon={faAndroid} color="#70ec28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="line-spin-fade-loader" />
    </>
  )
}

export default About
