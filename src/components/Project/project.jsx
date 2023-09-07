import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/animateLetters'
import Loader from 'react-loaders'
import './project.scss'
import { projectsData } from '../../utils/icons'
import { Link } from 'react-router-dom'
const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const projectLetters = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's']
  const [displayStart, setDisplayStart] = useState(0)
  const itemsPerPage = 3

  const handleNextClick = () => {
    setDisplayStart(displayStart + itemsPerPage)
  }
  const handlePrevClick = () => {
    setDisplayStart(displayStart - itemsPerPage)
  }
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
              strArray={projectLetters}
              idx={15}
            />
          </h1>
          <div className="project">
            <div className="wrapper">
              {projectsData
                .slice(displayStart, displayStart + itemsPerPage)
                .map((item, index) => (
                  <div className="project-card" key={index}>
                    <img src={item.image} alt="" />
                    <h3>{item.title}</h3>
                    <div className="project-info">
                      
                      <p>{item.desc}</p>
                      <a href={item.link} className="flat-button">
                        Read More
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="button-container">
            {displayStart !== 0 && (
              <button className="flat-button" onClick={handlePrevClick}>
                MOVE BACK
              </button>
            )}
            {displayStart !== 6 ? (
              <button className="flat-button" onClick={handleNextClick}>
                {displayStart > 0 ? 'MOVE NEXT' : 'KNOW MORE'}
              </button>
            ) : (
              <Link to="/about" className="flat-button">
                KNOW MORE
              </Link>
            )}
          </div>
        </div>
      </div>
      <Loader type="line-spin-fade-loader" />
    </>
  )
}

export default Project
