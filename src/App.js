import "./App.css";
import { useState } from "react";
import { AnimateOnChange } from "react-animation";
import Form from "./Components/Form";
import Intro from "./Components/Intro";
import Success from "./Components/Success";
import Results from "./Components/Results";
import duckLogo from "./assets/duck.png";

const INTRO = "INTRO";
const FORM = "FORM";
const SUCCESS = "SUCCESS";
const RESULTS = "RESULTS";

function App() {
  const [mode, setMode] = useState(INTRO);
  return (
    <div className="container">
      <img alt="Logo" src={duckLogo} width={300} />
      <AnimateOnChange duration={1000}>
        {mode === INTRO && (
          <Intro form={() => setMode(FORM)} results={() => setMode(RESULTS)} />
        )}
        {mode === FORM && (
          <Form back={() => setMode(INTRO)} success={() => setMode(SUCCESS)} />
        )}
        {mode === SUCCESS && (
          <Success
            back={() => setMode(INTRO)}
            results={() => setMode(RESULTS)}
          />
        )}
        {mode === RESULTS && <Results back={() => setMode(INTRO)} />}
      </AnimateOnChange>
    </div>
  );
}

export default App;
