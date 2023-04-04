import React, { useContext } from "react";
import { ACTIONS, NumberContext } from "./numberContext";

function Button() {
  const { dispatch } = useContext(NumberContext);  // (*)
  const onIncrease = () => dispatch({ type: ACTIONS.INCREASE });
  const onDecrease = () => dispatch({ type: ACTIONS.DECREASE });
return (
    <div>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Button;