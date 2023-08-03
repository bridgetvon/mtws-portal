import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';

import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <main style={{ fontFamily: "Bebas Neue" }}>
        <Router basename='/src/pages/Home.js'>
          <Home />
        </Router>
      </main>
    </div>
  );

}

export default App;
