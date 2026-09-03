import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Earth from './pages/Earth';
import Venus from './pages/Venus';

function App() {

  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Earth</Link>
      <Link to="/venus">Venus</Link>    
    </nav>
      
    <Routes>
      <Route path='/' element={<Earth></Earth>}></Route>
      <Route path='/venus' element={<Venus></Venus>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
