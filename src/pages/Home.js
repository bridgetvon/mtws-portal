import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Nav/Navbar';
import Login from '../components/Login/Login';
import Hero from '../components/Hero/Hero';
import Forum from './Forum/Forum';
import HelpDesk from './HelpDesk/HelpDesk';



function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    //set state to go from false to true
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <main>
        <Navbar toggle={toggle} />
        {isOpen ? < Sidebar toggle={toggle} /> : ''}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/helpDesk" element={<HelpDesk />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </main>
    </div>
  );
}

export default Home;