import { useEffect, useState } from "react";
import "./App.css";
import DevPosition from "./Components/DevPosition";

function App() {
  const devStrings = [
    "Front End Developer",
    "Back End Developer",
    "Full Stack Developer",
  ];
  const [stringInd, setStringInd] = useState(0);

  return (
    <div className="App">
      <div className="position">
        <DevPosition
          devString={devStrings[stringInd]}
          updatePosition={setStringInd}
        />
      </div>
    </div>
  );
}

export default App;
