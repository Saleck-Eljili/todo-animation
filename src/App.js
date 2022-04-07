import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

import { useState } from "react";
import Zoom from "react-reveal/Zoom";

function ZoomExample(props) {
  let [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }
  return (
    <div className="test">
      <Zoom when={show}>
        <h1>Saleck EL JILI</h1>
      </Zoom>
      <button type="button" onClick={toggleShow}>
        Click to {show ? "Hide" : "Show"} my name
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <ZoomExample className="animated bounce infinite" id="iddd" />
      <div className="todo-app">
        <TodoList />
      </div>
    </>
  );
}

export default App;
