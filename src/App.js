import React, { useRef, useEffect } from 'react';
import './App.css';
import Pdf from './Pdf';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="header">React sample</div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
      </div>
    </Router>
  );
};

function Home() {
  return (
    <div>
      一覧画面
    </div>
  );
}

function About() {
  return (
    <div>
      <Pdf/>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <Pdf/>
    </div>
  );
}

export default App;
