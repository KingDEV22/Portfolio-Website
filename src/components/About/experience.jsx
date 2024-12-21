import React, { useEffect, useState } from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { expData } from '../../utils/icons'
import AnimatedLetters from '../AnimatedLetters/animateLetters'
import { Link } from 'react-router-dom'
export default function Experience({ pfont }) {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [displayStart, setDisplayStart] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(determineItemsPerPage())

  function determineItemsPerPage() {
    const screenWidth = window.innerWidth
    if (screenWidth <= 650) {
      return 1 // Display one project card for screen width <= 550px
    } else {
      return 2 // Display two project cards for screen width <= 1000px
    }
  }

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
  return (
    <div className="page-container">
      <div className="text-zone experience">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Experience".split('')}
            idx={0}
          />
        </h1>
        <VerticalTimeline>
          {expData
            .slice(displayStart, displayStart + itemsPerPage)
            .map((data, ind) => (
              <VerticalTimelineElement
                key={ind}
                className="vertical-timeline-element--education"
                contentStyle={{
                  padding: '2rem',
                  background: 'none',
                  boxShadow: '0 4px 6px rgba(117, 116, 116, 0.55)',
                  borderRadius: '10px',
                  border: '2px solid rgb(39, 38, 38)',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid  rgba(79, 78, 78, 0.744)',
                }}
                iconStyle={{ background: '#ffff', color: '#000000' }}
                icon={data.icon}
              >
                <h3 className="vertical-timeline-element-title">
                  {data.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {data.subtitle}
                </h4>
                <p style={{ fontSize: `${pfont}`, fontWeight: '700' }}>
                  {data.date}
                </p>
              </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
        <div className="button-container">
          {/* {displayStart !== 0 && ( */}
          <button
            className={displayStart === 0 ? "flat-button hide-button" : "flat-button"}
            disabled={displayStart === 0}
            onClick={handlePrevClick}>
            MOVE BACK
          </button>
          {/* )} */}
          {displayStart !== expData.length - itemsPerPage ? (
            <button className="flat-button" onClick={handleNextClick}>
              MOVE NEXT
            </button>
          ) : (
            <Link to="/skill" className="flat-button" >
              KNOW MORE
            </Link>
          )}
        </div>


      </div>
    </div>
  )
}
