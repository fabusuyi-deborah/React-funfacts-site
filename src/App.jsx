// import { useState } from 'react'
import React from "react"
import Navbar from './Navbar'
import MainContent from "./MainContent"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
      <div className="container">
          <Navbar />
          <MainContent />
      </div>
  )
}

