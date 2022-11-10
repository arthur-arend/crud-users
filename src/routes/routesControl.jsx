import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../pages/Home';
import Create from '../pages/Create';

export function RoutesControl() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/home"  element={<Home />} />
        <Route path="/create/" element={<Create />} />
      </Routes>
    </Router>
  )
}