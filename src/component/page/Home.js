import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
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
        </div>
    );
};

export default Home;