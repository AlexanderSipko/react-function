
import React, {useState, useEffect} from "react";

function Clicker() {
  // const firstRenderRef = useRef(true);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1)
  }

  const decrement = () => {
    setCount(count-1)
  }

  useEffect(() => {
    //данная зависимость позволяет исключить двойной вызов useEffect
    // if (firstRenderRef.current){
    //   firstRenderRef.current = false;
    //   return;
    // }
    console.log('Hello useEffect', count);

    return () => console.log('Goodbye')
  }, [count]);

  return (
    <div className="Clicker">
      <h1>Start Learn Function React</h1>
        <button onClick={increment}> + </button>
          <span style={{display:'inline-block', margin:'0 0.5rem'}}>{count}</span>
        <button onClick={decrement}> - </button>
    </div>
  );
}

export default Clicker;
