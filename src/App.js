import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import Contact from './Components/Contact.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
