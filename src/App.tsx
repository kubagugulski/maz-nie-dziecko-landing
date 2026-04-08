import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Success from './pages/Success';
import SuccessBundle from './pages/SuccessBundle'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regulamin" element={<Terms />} />
        <Route path="/polityka-prywatnosci" element={<Privacy />} />
        <Route path="/sukces-pobieranie-h1d4fh52fs" element={<Success />} />
        <Route path="/sukces-pobieranie-d3jd72jfn3" element={<SuccessBundle />} />
      </Routes>
    </BrowserRouter>
  );
}
