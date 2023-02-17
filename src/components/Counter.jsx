import { useEffect, useState } from "react";

function Counter({ setExerciseNum, exerciseNum, timerStarted, setTimerStarted }) {
  const [counter, setCounter] = useState(30);
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
        exerciseNum === 3 ? setCounter(60) : setCounter(30);
        setButtonContent("Start");
        break;
      }
      default:
        return;
    }
  }

  useEffect(() => {
    function handleCount() {
      if (!timerStarted && buttonContent !== "Reset") {
        exerciseNum === 3 ? setCounter(60) : setCounter(30);
      }
    }
    function handleButtonContent() {
      if (counter < 1) {
        setTimerStarted(false);
        setButtonContent("Start");
        setExerciseNum(exerciseNum + 1);
        exerciseNum === 3 ? setCounter(60) : setCounter(30);
      }
    }
    handleButtonContent();
    handleCount();
    timerStarted &&
      counter > 0 &&
      setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter, timerStarted, setExerciseNum, exerciseNum, buttonContent]);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleButtonClick}>{buttonContent}</button>
    </div>
  );
}

export default Counter;
