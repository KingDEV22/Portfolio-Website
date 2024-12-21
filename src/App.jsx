import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
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
  const pfont = determineFontSize()
  function determineFontSize() {
    if (window.innerWidth < 1166) {
      return '1rem'
    } else if (window.innerWidth >= 1166 && window.innerWidth < 1499) {
      return '1rem'
    } else {
      return '1.2rem'
    }
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/education" element={<Education pfont={pfont} />} />
          <Route path="/experience" element={<Experience pfont={pfont} />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <BackgroundCircle />
    </>
  )
}

export default App
