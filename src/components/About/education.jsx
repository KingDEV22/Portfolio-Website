import React, { useEffect, useState } from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { motion } from 'framer-motion'
import { persData } from '../../utils/icons'
import AnimatedLetters from '../AnimatedLetters/animateLetters'
import { Link } from 'react-router-dom'
export default function Education() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const pfont = determineFontSize()
  function determineFontSize() {
    if (window.innerWidth < 1166) {
      return '2.5vw'
    } else if (window.innerWidth >= 1166 && window.innerWidth < 1499) {
      return '2vw'
    } else {
      return '1vw'
    }
  }


  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="page-container">
      <div className="text-zone">
        <div className="education">
          <h1

          >
            <AnimatedLetters
              letterClass={letterClass}
              strArray={
                ['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']
              }
              idx={15}
            />
          </h1>
          <VerticalTimeline>
            {persData.slice(0, 2).map((data, ind) => (
              <VerticalTimelineElement
                key={ind}
                className="vertical-timeline-element--education"
                contentStyle={{
                  padding: '1rem',
                  background: 'none',
                  borderRadius: '10px',
                  border: '3px solid rgba(79, 78, 78, 0.744)',
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
                <p style={{ fontSize: `${pfont}` }}>{data.date} <br /> {data.detailedText}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <Link to="/experience" className="flat-button">
          KNOW MORE
        </Link>
      </div>
    </div>
  )
}
