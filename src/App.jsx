import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
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
  const [letterClass, setLetterClass] = useState('text-animate')
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home letterClass={letterClass} setLetterClass={setLetterClass} />} />
          <Route path="/about" element={<About letterClass={letterClass} setLetterClass={setLetterClass} />} />
          <Route path="/project" element={<Project letterClass={letterClass} setLetterClass={setLetterClass} />} />
          <Route path="/education" element={<Education letterClass={letterClass} setLetterClass={setLetterClass} />} />
          <Route path="/experience" element={<Experience letterClass={letterClass} setLetterClass={setLetterClass} />} />
          <Route path="/skill" element={<Skill letterClass={letterClass} setLetterClass={setLetterClass} />} />
          <Route path="/contact" element={<Contact letterClass={letterClass} setLetterClass={setLetterClass} />} />
        </Route>
      </Routes>
      <BackgroundCircle />
    </>
  )
}

export default App
