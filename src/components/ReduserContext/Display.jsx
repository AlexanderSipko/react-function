import React, { useContext } from "react";
import { NumberContext } from "./numberContext";

function Display() {
  const { state } = useContext(NumberContext); // (*)
  return <p>Number: {state.value}</p>;
}
export default Display;