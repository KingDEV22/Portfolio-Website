import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/animateLetters'
import './project.scss'
import { projectsData } from '../../utils/icons'
import { Link } from 'react-router-dom'
import 'animate.css'
const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const projectLetters = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's']
  const [displayStart, setDisplayStart] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(determineItemsPerPage())


  function determineItemsPerPage() {
    const screenWidth = window.innerWidth
    if (screenWidth <= 650) {
      return 1 // Display one project card for screen width <= 550px
    } else if (screenWidth <= 1200) {
      return 2 // Display two project cards for screen width <= 1000px
    } else {
      return 3 // Display three project cards for larger screens
    }
  }

  const handleNextClick = () => {
    setDisplayStart(displayStart + itemsPerPage)
  }
  const handlePrevClick = () => {
    setDisplayStart(displayStart - itemsPerPage)
  }
  console.log(displayStart)
  console.log(itemsPerPage)
  console.log("current" + displayStart)
  useEffect(() => {
    const handleResize = () => {
      // Update itemsPerPage based on the current screen width
      setItemsPerPage(determineItemsPerPage())
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Clear the timeout when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="page-container">
        <div className="text-zone experience">
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
                  <div
                    className="project-card animate__animated animate__zoomIn"
                    key={index}
                  >
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
            <button
              className={displayStart === 0 ? "flat-button hide-button" : "flat-button"}
              disabled={displayStart === 0}
              onClick={handlePrevClick}>
              MOVE BACK
            </button>
            {displayStart <= projectsData.length - itemsPerPage ? (
              <button className="flat-button" onClick={handleNextClick}>
                MOVE NEXT
              </button>
            ) : (
              <Link to="/contact" className="flat-button">
                KNOW MORE
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
