import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import Layout from './components/Layout/layout'
import './App.scss'
import Project from './components/Project/project'
import Education from './components/About/education'
import Experience from './components/About/experience'
import Skill from './components/Project/skill'
import BackgroundCircle from './components/Home/Background_Bubbles'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <BackgroundCircle />
    </>
  )
}

export default App
