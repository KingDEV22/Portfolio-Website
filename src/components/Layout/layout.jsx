import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/slidebar'
import './layout.scss'
import '../Home/home.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
