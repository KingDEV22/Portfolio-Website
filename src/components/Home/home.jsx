import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timeout);
  }, [setLetterClass]);

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
          <p>Java | Python | JavaScipt</p>

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
            <span> RESUME <BsDownload /></span>
          </a>
        </div>
        <Logo />
      </div>
    </>
  )
}

export default Home
