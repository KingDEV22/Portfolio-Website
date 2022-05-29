import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animateLetters'
import Logo from './Logo/logo'
import './home.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['', 'K', 'i', 'n', 'g', 's', 'u', 'k']
  const jobArray = [
    'D',
    'a',
    't',
    'a',
    ' ',
    'A',
    'n',
    'a',
    'l',
    'y',
    's',
    't',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            {/* <img className={logo} src={logo} alt="Web Developer Name" /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Data Analyst / Machine Learning</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      {/* <CometSpinLoader /> */}
      <Loader type="line-spin-fade-loader" />
    </>
  )
}

export default Home
