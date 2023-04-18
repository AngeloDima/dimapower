
import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import Blog from './Blog/Blog';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />   
            <Route path="/blog" element={<Blog />} /> 
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
