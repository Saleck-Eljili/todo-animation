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
        <h1>React Reveal</h1>
      </Zoom>
      <button type="button" onClick={toggleShow}>
        Click to {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <ZoomExample className="animated bounce infinite" />
      <div className="todo-app">
        <TodoList />
      </div>
    </>
  );
}

export default App;
