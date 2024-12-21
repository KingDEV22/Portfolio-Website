import React, { useEffect, useState } from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { persData } from '../../utils/icons'
import AnimatedLetters from '../AnimatedLetters/animateLetters'
import { Link } from 'react-router-dom'
export default function Education({ pfont }) {
  const [letterClass, setLetterClass] = useState('text-animate')


  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="page-container">
      <div className="text-zone education">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={
              "Education".split('')
            }
            idx={0}
          />
        </h1>
        <VerticalTimeline>
          {persData.slice(0, 2).map((data, ind) => (
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
                borderRight: '7px solid  rgba(41, 39, 39, 0.74)',
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
              <p style={{ fontSize: `${pfont}`, fontWeight: '700' }}><i>{data.date}</i> <br /> {data.detailedText}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        <Link to="/experience" className="flat-button">
          KNOW MORE
        </Link>
      </div>

    </div>
  )
}
