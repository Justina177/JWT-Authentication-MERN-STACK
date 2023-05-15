import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../src/pages/Register';
import Login from '../src/pages/Login';
import Secret from '../src/pages/Secret';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/register/' element={<Register />} />
        <Route exact path='/login/' element={<Login />} />
        <Route exact path='/secret/' element={<Secret />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
