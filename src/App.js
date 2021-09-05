import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [lockStatus, setLockStatus] = useState("Geschlossen");
  const [timeLeft, setTimeLeft] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    if (lockStatus === "Geschlossen") {
      setLockStatus("Geöffnet")
      setTimeLeft(3);
      setTimeout(() => {
        setLockStatus("Geschlossen")
      }, 3000)
    }
  }

  useEffect(() => {
    if (timeLeft > 0) {
      setTimeout(() => {
        setTimeLeft(timeLeft-1)
      }, 1000)
    }
  }, [timeLeft])

  return (
    <div className="wrapper">
      <div className="lock__status">Der Magnetschloss ist: <span className={lockStatus === "Geschlossen" ? "locked" : "opened"}>{lockStatus}</span></div>
      <div>Verbleibende Zeit bis zum Schließen: <span className={timeLeft > 0 ? "timer" : "timer__off"}>{timeLeft > 0 ? timeLeft : "Geschlossen"}</span></div>
      <button onClick={handleClick}>Öffnen</button>
    </div>
  );
}

export default App;
