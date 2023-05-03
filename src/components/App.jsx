import React, { useState } from "react";

function App() {
  var [heading, setHeading] = useState("Hello");
  var [mouseover, setmouseover] = useState(false);
  function headingchange() {
    setHeading("Submitted");
  }
  function mouseoverfunction() {
    setmouseover(true);
  }
  function mouseoutfunction() {
    setmouseover(false);
  }
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={headingchange}
        onMouseOver={mouseoverfunction}
        onMouseOut={mouseoutfunction}
        style={{ backgroundColor: mouseover ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
