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
import {
  faGraduationCap,
  faBriefcase,
  faSchool,
} from '@fortawesome/free-solid-svg-icons'
import './about.scss'
import C from '../../assets/images/c.png'
import Spring from '../../assets/images/springBoot.png'
import Python from '../../assets/images/python.png'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [show, setShow] = useState(1)
  const edudata = [
    {
      date: '2019 - 2023',
      title: 'B-Tech',
      subtitle: 'Computer Science and Engineering',
      detailedText: `Narula Institute of Technology, Kolkata, West Bengal`,
    },
    {
      date: '2018 - 2019',
      title: 'High School',
      subtitle: `Science`,
      detailedText: `Sudhir Memorial Institute, Kolkata, West Bengal`,
    },
  ]
  const VerticalElement = ({ data }) => {
    return (
      <VerticalTimelineElement
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
        icon={<FontAwesomeIcon icon={faGraduationCap} />}
      >
        <h3 className="vertical-timeline-element-title">{data.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{data.subtitle}</h4>
        <p style={{ fontSize: '1vw' }}>{data.detailedText}</p>
      </VerticalTimelineElement>
    )
  }

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      {show === 1 && (
        <div className="page-container">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I'm a software engineer with a B-Tech degree in Computer Science
              Engineering. During my Amazon internship, I led projects deploying
              AWS services for Just Walk Out Technology (JWO) stores,
              streamlining processes and collaborating with cross-functional
              teams for error-free execution.
            </p>
            <p>
              I specialize in machine learning-driven web apps and
              microservices. Keeping up with tech trends is my priority. I'm
              eager to contribute to groundbreaking projects and explore tech's
              endless possibilities.
            </p>
            <button className="flat-button" onClick={() => setShow(2)}>
              KNOW MORE
            </button>
          </div>

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <img src={Python} alt="" />
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
      )}
      <div className="page-container">
        {show > 1 && (
          <div className="about-details">
            {show === 2 && (
              <div className="education">
                <h1>
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
                    idx={15}
                  />
                </h1>
                <VerticalTimeline>
                  {edudata.map((data) => (
                    <VerticalElement data={data} />
                  ))}
                </VerticalTimeline>
              </div>
            )}
            {show === 3 && (
              <div className="education">
                <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                    idx={15}
                    />
                </h1>
                <VerticalTimeline>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{
                      padding: '1rem',
                      background: 'none',
                      borderRadius: '10px',
                      border: '3px solid rgba(79, 78, 78, 0.744)',
                      fontSize: '1.3vw',
                    }}
                    contentArrowStyle={{
                      borderRight: '7px solid  rgba(79, 78, 78, 0.744)',
                    }}
                    date="Jan 2023 - Jun 2023"
                    iconStyle={{ background: '#ffff' }}
                    icon={<FontAwesomeIcon icon={faBriefcase} />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Support Engineer II Intern
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Amazon
                    </h4>
                    <p style={{ fontSize: '1vw' }}>
                      - Worked on deployment of various services of Just Walk
                      Out Technology (JWO) stores' infrastructure.
                      <br />
                      - Collaborated with cross-functional teams to effectively
                      troubleshoot and debug errors in the services. <br />-
                      Implemented automation scripts and optimized packages for
                      seamless data flow during service deployment.
                    </p>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </div>
            )}
            <div className="button-container">
              <button className="flat-button" onClick={() => setShow(show - 1)}>
                MOVE BACK
              </button>
              {show < 3 && (
                <button
                  className="flat-button"
                  onClick={() => setShow(show + 1)}
                >
                  KNOW MORE
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <Loader type="line-spin-fade-loader" />
    </>
  )
}

export default About
