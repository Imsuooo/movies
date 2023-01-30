import React from 'react';
import { useState ,useRef, useEffect } from 'react';
const Moviesfrom = ({addMovie}) => {
    useEffect(() =>{
        focusRef.current.focus();
      },[]);

    const [movieTitle, setMovieTitle] = useState('');
    const [movieyear, setMovieYear] = useState('');
    const [titleError, setTitleError] = useState('');
    const [yearError, setyearError] = useState('');

    const validateform = () => {
        resetsubmit()
        let validate=true;
        if(!movieTitle){
            setTitleError('Please Write : Movies Name');
            validate=false;
        }
        if(!movieyear){
            setyearError('Please Write : Movies Year');
            validate=false;
        }
        return validate;
    } 
    const resetsubmit = () =>{
        setTitleError('');
        setyearError('');
    }
    const onSubmit = (e) =>{
      e.preventDefault();
      if(validateform()){
        addMovie({
            id:Date.now(),
            title : movieTitle,
            year : movieyear
          })
          resetsubmit()
      }
      setMovieTitle('');
      setMovieYear('');
      focusRef.current.focus();
  
    }
   const focusRef =useRef();
    return (
        <div>
            <form action='#' onSubmit={onSubmit}>
                <input type='text' placeholder='Movies Name' value={movieTitle} onChange={(e)=>{setMovieTitle(e.target.value)}} ref={focusRef}/>
                <div className='error'>{titleError}</div>
                <input type='text' placeholder='Movies year' value={movieyear} onChange={(e)=>{setMovieYear(e.target.value)}}/>
                <div className='error'>{yearError}</div>
                <button type='submit' className='add'>Add</button>
             </form>
        </div>
    );
};

export default Moviesfrom;