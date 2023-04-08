
import React from "react";
import RenderList from './components/RenderList'
import { NumberProvider } from './components/ReduserContext/numberContext'

function App() {
  return (
    <NumberProvider>
      <div className="App">
          <RenderList/>
      </div>
    </NumberProvider>
  );
}

export default App;
