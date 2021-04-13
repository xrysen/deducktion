import "./App.css";
import { useState } from "react";
import Form from "./Components/Form";
import Intro from "./Components/Intro";

const INTRO = "INTRO";
const FORM = "FORM";

function App() {
  const [mode, setMode] = useState(INTRO);
  return (
    <div className="App">
      {mode === INTRO && <Intro form={() => setMode(FORM)} />}
      {mode === FORM && <Form />}
    </div>
  );
}

export default App;
