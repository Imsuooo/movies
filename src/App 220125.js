import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  /* const [time, setTime] = useState(1);
  const clickEvent = () =>{
    let newTime;
    if(time>=12){
      newTime=1
    }else{
      newTime=time+1;
    }
    setTime(newTime)
  }
  console.log('update') */
  const heavyWork = () =>{
    return ['AAA','BBB']
  };
  const [names, setNames] = useState(()=>{
    return heavyWork();
  });
  const [input, setInput] = useState(['']);

  const inputChange = (e) => {
    setInput(e.target.value);
  };
  const upLoad = () =>{
    setNames((prevState)=>{
      /* console.log('prev state :', prevState) */
      return [input, ...prevState];
    })
  }
  console.log(input)
  return (
   <div className='form'>
   {/*  <span>현재시각 : {time}시</span>
    <button className='btn' onClick={clickEvent}>Update</button> */}
    <input type="text" value={input} onChange={inputChange}/>
    <button className='btn' onClick={upLoad}>upload</button>
    {
      names.map((name, idx) => {
        return<p key={idx}>{name}</p>
      })
    }
   </div>
  );
}

export default App;
