import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import './index.css'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio*" element={<Portfolio />} />
        <Route path="/contact*" element={<Contact />} />
      </Routes>
    </BrowserRouter>
)
