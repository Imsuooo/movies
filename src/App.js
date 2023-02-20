import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './component/page/Home';
import Movies from './component/page/Movies';
import Users from './component/page/Users';
import Footer from './component/page/Footer';
import {Link} from "react-router-dom";

function App() {
  return (
   <div className='App'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='movies' element={<Movies/>}/>
      <Route path='users' element={<Users/>}/>
    </Routes>
    <div className='bg'>
          <span className='img-area img-area2'></span>
           <span className='title'> MOVIES</span>
            <span className='img-area'></span>
          </div>
          <main id='main'>
            <section id='section1'>
                <div className='container section1container'>
                    <p className='text'>If you want to add a movie, click here!</p>
                    <p className='icon'>👇</p>
                    <p><Link to='movies' className='movies'>Movies</Link></p>
                </div>
                </section>
          </main>
    <Footer />
   </div>
  );
}

export default App;
