
import React, {useState} from "react";
import Clicker from './components/Clicker'

function App() {

  const [isClicker, setClicker]= useState(false);


  return (
    <div className="App">
      <button onClick={() => setClicker(!isClicker)}>Toggle clicker</button>
      {isClicker && <Clicker/>}
    </div>
  );
}

export default App;
