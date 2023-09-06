import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/animateLetters'
import Loader from 'react-loaders'
import './project.scss'
import {
  BashOriginal,
  COriginal,
  JavaOriginal,
  PythonOriginal,
  JavascriptOriginal,
  Html5Original,
  Css3Original,
  SpringOriginal,
  FlaskOriginal,
  ExpressOriginal,
  NodejsOriginal,
  ReactOriginal,
  MysqlOriginal,
  PostgresqlOriginal,
  MongodbOriginal,
  AnacondaOriginal,
  JupyterOriginal,
  LinuxOriginal,
  KotlinPlain,
  AndroidstudioOriginal,
  DockerOriginal,
  GitOriginal,
} from 'devicons-react'
import { Container, Row, Col } from 'react-grid-system'
import FoodApp from '../../assets/images/foodapp.jpg'
import Portfolio from '../../assets/images/portfolio.png'
import Medical from '../../assets/images/medical.png'
const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const iconArray = [
    { name: 'C', component: COriginal },
    { name: 'Bash', component: BashOriginal },
    { name: 'Java', component: JavaOriginal },
    { name: 'Python', component: PythonOriginal },
    { name: 'Html5', component: Html5Original },
    { name: 'Css3', component: Css3Original },
    { name: 'Javascript', component: JavascriptOriginal },
    { name: 'React', component: ReactOriginal },
    { name: 'Nodejs', component: NodejsOriginal },
    { name: 'Express', component: ExpressOriginal },
    { name: 'Spring', component: SpringOriginal },
    { name: 'Flask', component: FlaskOriginal },
    { name: 'Mysql', component: MysqlOriginal },
    { name: 'Postgresql', component: PostgresqlOriginal },
    { name: 'Mongodb', component: MongodbOriginal },
    { name: 'Git', component: GitOriginal },
    { name: 'Docker', component: DockerOriginal },
    { name: 'Anaconda', component: AnacondaOriginal },
    { name: 'Jupyter', component: JupyterOriginal },
    { name: 'Linux', component: LinuxOriginal },
    { name: 'Kotlin', component: KotlinPlain },
    { name: 'Android', component: AndroidstudioOriginal },
  ]
  const [show, setShow] = useState(true)
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="page-container">
        <div className="about-details">
          {show && (
            <>
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['S', 'k', 'i', 'l', 'l', 's']}
                  idx={15}
                />
              </h1>
              <Container style={{ padding: '1vw', marginTop: '1vw' }}>
                <Row>
                  {iconArray.map((Icon, ind) => (
                    <Col key={ind} sm={2}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          alignItems: 'center',
                          padding: '0.3vw',
                        }}
                      >
                        {React.createElement(Icon.component, { size: '3vw' })}{' '}
                        <p>{Icon.name}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </>
          )}
          {!show && (
            <>
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
                        A portfolio website built using React and SCSS to my qualifications.
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
                        Built a machine learning model to predict medical insurance prices of an individual.
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
                        Developed a food delivery app for android to order foods from restaurant.
                      </p>
                      <a
                        href="https://github.com/KingDEV22/Food-Delevery-App.git"
                        className="flat-button"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="button-container">
            {!show && (
              <button className="flat-button" onClick={() => setShow(!show)}>
                MOVE BACK
              </button>
            )}
            <button className="flat-button" onClick={() => setShow(!show)}>
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
      <Loader type="line-spin-fade-loader" />
    </>
  )
}

export default Project
