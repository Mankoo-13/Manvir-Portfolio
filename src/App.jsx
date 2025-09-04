import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Components/Layout/Header'
import Contact from './Components/Layout/Contact'
import Projects from './Components/Layout/Projects'
import Experience from './Components/Layout/Experience'
import Home from './Components/Layout/Home'
import Footer from './Components/Layout/Footer'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
          <Footer/>


      </BrowserRouter>

    </>
  )
}

export default App
