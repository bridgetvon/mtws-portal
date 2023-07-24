import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';

import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Home />
        </Router>
      </main>
    </div>
  );
}

export default App;
