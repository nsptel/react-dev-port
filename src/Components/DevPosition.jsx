import { useEffect, useState } from "react";
import "../App.css";

export default function DevPosition({ devString, updatePosition }) {
  const [currentString, setCurrentString] = useState("");
  const [ind, setInd] = useState(null);

  useEffect(() => {
    setInd(devString.length);
  }, [devString]);

  useEffect(() => {
    if (ind === null) return;

    setCurrentString(() =>
      devString.slice(0, devString.length - Math.abs(ind))
    );

    if (ind === -devString.length) {
      setInd(null);
      updatePosition((prevPos) => (prevPos >= 2 ? 0 : prevPos + 1));
    } else {
      setTimeout(() => {
        setInd((prevInd) => prevInd - 1);
      }, 200);
    }
  }, [ind]);

  return (
    <div className="position-container">
      <span className="position">{currentString}</span>
      <span className="blinking-cursor">|</span>
    </div>
  );
}
