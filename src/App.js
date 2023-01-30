import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './component/page/Home';
import Movies from './component/page/Movies';
import Users from './component/page/Users';
import Footer from './component/page/Footer';

function App() {
  return (
   <div className='App'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='movies' element={<Movies/>}/>
      <Route path='users' element={<Users/>}/>
    </Routes>
    <Footer />
   </div>
  );
}

export default App;
