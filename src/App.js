import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="logo" src="./opgg.png" />
      <div>
        <input type="text" placeholder="소환사이름" className="text"></input>
        <button className="gg">.GG</button>
        <button className="kr">kr</button>
      </div>
    </div>
  );
}

export default App;
