import React, { useEffect, useState } from 'react'
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faJava,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters/animateLetters'
import Loader from 'react-loaders'
import './project.scss'
import C from '../../assets/images/c.png'
import Spring from '../../assets/images/springBoot.png'
import Python from '../../assets/images/python.png'
import ML from '../../assets/images/ml.png'
import Numpy from '../../assets/images/numpy.png'
import Pandas from '../../assets/images/pandas.png'
import Android from '../../assets/images/android.png'
import ReactLogo from '../../assets/images/react.png'
import Portfolio from '../../assets/images/portfolio.png'
import Medical from '../../assets/images/medical.png'
import FoodApp from '../../assets/images/foodapp.jpg'
import { Link } from 'react-router-dom'

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="skills">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['S', 'k', 'i', 'l', 'l', 's', ':']}
            idx={15}
          />
        </h1>
        <div className="myskils">
          <div className="row">
            <div className="column">
              <img src={C} alt="" className="spring" />
            </div>
            <div className="column">
              <FontAwesomeIcon
                className="icons"
                icon={faJava}
                color="#EC4D28"
              />
            </div>
            <div className="column">
              <img src={Python} alt="" className="Python" />
            </div>
            <div className="column">
              <FontAwesomeIcon
                className="icons"
                icon={faHtml5}
                color="#F06529"
              />
            </div>
            <div className="column">
              <FontAwesomeIcon
                className="icons"
                icon={faCss3}
                color="#28A4D9"
              />
            </div>

            <div className="column">
              <FontAwesomeIcon
                className="icons"
                icon={faJsSquare}
                color="#EFD81D"
              />
            </div>
            <div className="column">
              <img src={ReactLogo} alt="" className="spring" />
            </div>
            <div className="column">
              <img src={Spring} alt="" className="spring" />
            </div>
            <div className="column">
              <img src={Numpy} alt="" className="spring" />
            </div>
            <div className="column">
              <img src={Pandas} alt="" className="spring" />
            </div>
            <div className="column">
              <img src={ML} alt="" className="spring" />
            </div>
            <div className="column">
              <img src={Android} alt="" className="spring" />
            </div>
          </div>
        </div>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', ':']}
            idx={15}
          />
        </h1>

        <div className="project">
          <div className="wrapper">
            <div className="project-card">
              <img src={Portfolio} alt="" className="spring" />

              <div className="project-info">
                <h3>Portfolio Website</h3>
                <p>
                  This is my Portfolio Website. It is made using React and Sass.
                  It lists all my skills and projects and contains information
                  about me.
                </p>
                <a
                  href="https://github.com/KingDEV22/Portfolio-Website"
                  className="flat-button"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="project-card">
              <img src={Medical} alt="" className="spring" />
              <div className="project-info">
                <h3>Medical Insurance Prediction</h3>
                <p>
                  This project is used to predict medical insurances charges
                  based on a person's body details like age,sex,bmi,etc. The
                  project is made using Python.
                </p>
                <a
                  href="https://github.com/KingDEV22/Medical-Price-Prediction"
                  className="flat-button"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="project-card">
              <img src={FoodApp} alt="" className="spring" />

              <div className="project-info">
                <h3>Food Delevery App</h3>
                <p>
                  This is a food delivery app. The android app is made using
                  Kotlin. The user can easily browse and order their favourite
                  food from any restaurants.
                </p>
                <a
                  href="https://github.com/KingDEV22/Food-Delevery-App.git"
                  className="flat-button"
                >
                  Read More
                </a>
                ``
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <Loader type="line-spin-fade-loader" />
    </>
  )
}

export default Project
