import './slidebar.scss'
import LogoK from '../../assets/images/mainLogo.png'
import { FaHome,FaGithub,FaLinkedin  } from 'react-icons/fa';
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
          <FaHome/>
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
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/kingsuk-biswas"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/KingDEV22"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
