import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import Home from './pages/Home/Home';

function App() {


  return (
    <div className="App">
      <div className="header">
        qwdqw
      </div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
