import { useEffect, useState } from "react";
import "../App.css";

export default function DevPosition({ devString, updatePosition }) {
  const [currentString, setCurrentString] = useState("");
  //   const [ind, setInd] = useState(null);
  const [didRun, setDidRun] = useState(false);
  const [reachEnd, setReachEnd] = useState(false);

  const updateDevString = () => {
    if (!didRun) {
      setDidRun(true);
    } else {
      setTimeout(() => {
        setCurrentString((prevState) => {
          if (reachEnd && prevState.length === 1) {
            console.log("updating");
            updatePosition(curr => (curr + 1) % 3);
            setDidRun(false);
            setReachEnd(false);
            return "";
          } else if (prevState.length >= devString.length || reachEnd) {
            setReachEnd(true);
            return devString.slice(0, prevState.length - 1);
          } else { 
            return devString.slice(0, prevState.length + 1);
          }
        });
      }, 500);
    }
    // setTimeout(() => {
    //   setCurrentString(() =>
    //     devString.slice(0, devString.length - Math.abs(ind))
    //   );
    //   setInd((prevInd) => prevInd - 1);
    // }, 200);
  };

  useEffect(() => {
    updateDevString();
  }, [currentString, didRun]);

  //   useEffect(() => {
  //     setInd(devString.length);
  //   }, [devString]);

  //   useEffect(() => {
  //     if (ind === -devString.length) {
  //       setInd(null);
  //       updatePosition((prevPos) => (prevPos >= 2 ? 0 : prevPos + 1));
  //     }
  //     updateDevString();
  //   }, [currentString]);

  return (
    <div className="position-container">
      <span className="position">{currentString}</span>
      <span className="blinking-cursor">|</span>
    </div>
  );
}
