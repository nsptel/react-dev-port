import { useEffect, useState } from "react";
import "../App.css";

export default function DevPosition() {
  const devString = "Full Stack Developer ";
  const [directionRight, setDirectionRight] = useState(1);
  const [currentString, setCurrentString] = useState("");

  const updateDevString = () => {
    setTimeout(() => {
      setCurrentString((prevState) => {
        if (prevState.length >= devString.length - 1) {
          setDirectionRight(-1);
        } else if (prevState.length <= 1) {
          setDirectionRight(1);
        }
        return devString.slice(0, prevState.length + directionRight);
      });
    }, 200);
  };

  useEffect(() => {
    updateDevString();
  }, [currentString]);

  return (
    <div className="position-container">
      <span className="position">{currentString}</span>
      <span className="blinking-cursor">|</span>
    </div>
  );
}
