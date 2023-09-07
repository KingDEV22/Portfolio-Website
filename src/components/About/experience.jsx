import React,{ useEffect, useState } from 'react'
import Loader from 'react-loaders'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { motion } from 'framer-motion'
import { persData } from '../../utils/icons'
import AnimatedLetters from '../AnimatedLetters/animateLetters'
import { Link } from 'react-router-dom'
export default function Experience() {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <div className="page-container">
      <div className="about-details">
        <div className="education">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <AnimatedLetters
              letterClass={letterClass}
              strArray={
                 ['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']
              }
              idx={15}
            />
          </motion.h1>
          <VerticalTimeline>
            {persData.slice(2, persData.length).map((data, ind) => (
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
                date={data.date}
                iconStyle={{ background: '#ffff' }}
                icon={data.icon}
              >
                <h3 className="vertical-timeline-element-title">
                  {data.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {data.subtitle}
                </h4>
                <p style={{ fontSize: '1vw' }}>{data.detailedText}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <Link to="/skill" className="flat-button">
          KNOW MORE
        </Link>
      </div>
      <Loader type="line-spin-fade-loader" />
    </div>
  )
}
