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
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About state={1} />} />
          <Route path="/project" element={<Project state={2} />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  )
}

export default App
