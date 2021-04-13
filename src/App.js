import "./App.css";
import { useState } from "react";
import Form from "./Components/Form";
import Intro from "./Components/Intro";
import Success from "./Components/Success";

const INTRO = "INTRO";
const FORM = "FORM";
const SUCCESS = "SUCCESS";

function App() {
  const [mode, setMode] = useState(INTRO);
  return (
    <div className="App">
      {mode === INTRO && <Intro form={() => setMode(FORM)} />}
      {mode === FORM && <Form back = {() => setMode(INTRO)} success = {() => setMode(SUCCESS) } />}
      {mode === SUCCESS && <Success back = {() => setMode(INTRO)} /> }
    </div>
  );
}

export default App;
