import './App.css';
import {useEffect, useState} from "react";

function App() {
  //화면에 첫 렌더링은 '마운트(Mount)', 재 렌더링은 '업데이트(Update)'라고 부름, 화면에서 사라지는 것은 '언마운트(UnMount)'라고 함
  const [count, setCount] = useState(1); //렌더링이 여기서 1번
  const [input, setInput] = useState('');

  const clickUpdate =() =>{
    setCount(count+1)
  }
  const inputUpdate = (e) =>{
    setInput(e.target.value)
  }

/*   useEffect(() =>{
    console.log('렌더링🌞🌞') //여기서 1번 총 2번, 렌더링이 계속 일어남
  }) */

  useEffect(() =>{
    console.log('렌더링🌞🌞') //렌더링 한번만 하기 위해서 useeffect사용
  },[count])
  useEffect(() =>{
    console.log('렌더링🌚🌚') 
  },[input])

  return (
   <div>
    <button onClick={clickUpdate} className='btn'>Update</button>
    <span>count :{count} </span>
    <input type="text" value={input} onChange={inputUpdate}/>
    <span>{input}</span>
   </div>
  );
}

export default App;
