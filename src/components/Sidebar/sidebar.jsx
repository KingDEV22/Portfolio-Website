import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import './slidebar.scss'
import LogoK from '../../assets/images/mainLogo.png'
import { FaHome, FaGithub, FaLinkedin } from 'react-icons/fa'
import { navLinks } from '../../utils/icons'

const Slidebar = () => {
  return (
    <div className="nav-bar">
    <Sidebar>
      <Menu
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: '#13395e',
              color: '#b6c8d9',
            },
          },
        }}
      >
        <MenuItem component={<Link className="logo" to="/" />}>
          <img src={LogoK} alt="Logo" />
        </MenuItem>
        <MenuItem component={<Link to="/" />}>  <FaHome/></MenuItem>
        {/* <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem> */}
        {navLinks.map((item, ind) => (
          <MenuItem key={ind}
            activeclassname="active"
            className={`${item.name}-link`}
            component={<Link to={`/${item.name}`}/>}
          >
            {item.icon}
          </MenuItem>
        ))}
      </Menu>
    </Sidebar>
    </div>
  )
}

export default Slidebar
