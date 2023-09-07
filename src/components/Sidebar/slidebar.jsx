import './slidebar.scss'
import LogoK from '../../assets/images/mainLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../../utils/icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoK} alt="Logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        {navLinks.map((item, ind) => (
          <NavLink key={ind}
            activeclassname="active"
            className={`${item.name}-link`}
            to={`/${item.name}`}
          >
            {item.icon}
          </NavLink>
        ))}
        {/* <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="project-link"
          to="/project"
        >
          <FontAwesomeIcon icon={faDiagramProject} color="#4d4d4e" />
        </NavLink> */}
        {/* <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink> */}
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/kingsuk-biswas-1582a6205"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/KingDEV22"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
