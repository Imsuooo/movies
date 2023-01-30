import './App.css';
import Timer from './component/Timer';
import {useState} from "react";

function App() {
const [showTimer, setShowTimer]=useState(false)
  return (
   <div className='App'>

    {showTimer && <Timer />}
   <button className='btn' onClick={() => {setShowTimer(!showTimer)}}>Toggle</button>
   </div>
  );
}

export default App;
