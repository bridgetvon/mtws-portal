import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero/Hero';
import Login from './components/Login/Login';
import HelpDesk from './pages/HelpDesk/HelpDesk';
import Forum from './pages/Forum/Forum';

import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <main>
          <Navbar toggle={toggle} />
          {isOpen ? < Sidebar toggle={toggle} /> : ''}
          <Routes>
            <Route path="/home" element={<Hero />} />
            <Route path="/login" element={<Login />} />
            <Route path="/helpDesk" element={<HelpDesk />} />
            <Route path="/forum" element={<Forum />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );

}

export default App;
