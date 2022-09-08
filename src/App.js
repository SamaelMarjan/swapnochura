import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
