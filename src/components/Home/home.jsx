import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animateLetters'
import Logo from './Logo/logo'
import './home.scss'
import 'animate.css'
import { BsDownload } from 'react-icons/bs'
import Resume from '../../assets/Kingsuk_Biswas.pdf'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const personalInfo = "Hi,I'm Kingsuk,Software Engineer"

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="page-container">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={personalInfo.split('')}
              idx={1}
            />
          </h1>
          <h2 className="animate__animated animate__bounceIn">Java | Python</h2>

          <Link
            to="/about"
            className="flat-button"
            style={{ marginRight: '1rem' }}
          >
            KNOW MORE
          </Link>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>

          <a
            href={Resume}
            download="Kingsuk-Resume"
            target="_blank"
            rel="noreferrer"
            className='flat-button'
            style={{ marginLeft: '1rem' }}
          >
            RESUME <BsDownload />
          </a>
        </div>
        <Logo />
      </div>
      <Loader type="line-spin-fade-loader" />
    </>
  )
}

export default Home
