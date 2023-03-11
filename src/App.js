
import React, {useState} from "react";
import Clicker from './components/Clicker'
import WithRef from './components/Ref'
// import Timer from './components/Timer'
import TimerF from './components/TimerHouck'

function App() {

  const [isClicker, setClicker]= useState(false);


  return (
    <div className="App">
      <button onClick={() => setClicker(!isClicker)}>Toggle clicker</button>
      {isClicker && <Clicker/>}
      <WithRef />
      {/* <Timer/> */}
      <TimerF/>
    </div>
  );
}

export default App;
