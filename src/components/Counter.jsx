import { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(30);
  const [timerStarted, setTimerStarted] = useState(false);
  const [buttonContent, setButtonContent] = useState("Start");

  function handleButtonClick() {
    switch (buttonContent) {
      case "Start": {
        setTimerStarted(true);
        setButtonContent("Stop");
        break;
      }
      case "Stop": {
        setTimerStarted(false);
        setButtonContent("Reset");
        break;
      }
      case "Reset": {
        setTimerStarted(false);
        setCounter(30);
        setButtonContent("Start");
        break;
      }
      default:
        return;
    }
  }

  useEffect(() => {
    function handleButtonContent() {
      if (counter < 1) setButtonContent("Reset");
    }
    handleButtonContent();
    timerStarted &&
      counter > 0 &&
      setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter, timerStarted]);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleButtonClick}>{buttonContent}</button>
    </div>
  );
}

export default Counter;
