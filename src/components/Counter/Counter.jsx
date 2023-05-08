import { useEffect, useState, useContext } from "react";
import "./Counter.css";
import ding from "../../assets/ding.mp3";
import { CounterContext } from "../../providers/CounterProvider";
import { ExerciseContext } from "../../providers/ExerciseProvider";
import { FaYoutube } from "react-icons/fa";
import { ProgramContext } from "../../providers/ProgramProvider";

export default function Counter() {
  const { timerStarted, setTimerStarted } = useContext(CounterContext);
  const { setExerciseNum, exerciseNum } = useContext(ExerciseContext);
  const { exerciseBlock } = useContext(ProgramContext);

  const exerciseLink = exerciseBlock[exerciseNum]["link"];

  const [counter, setCounter] = useState(30);
  const [buttonContent, setButtonContent] = useState("Start");

  function handleButtonClick() {
    switch (buttonContent) {
      case "Start": {
        setButtonContent("Get Ready!");
        setTimeout(() => {
          new Audio(ding).play();
          setTimerStarted(true);
          setButtonContent("Stop");
        }, 4500);
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
        new Audio(ding).play();
        setTimerStarted(false);
        setButtonContent("Start");
        setExerciseNum(exerciseNum !== 3 ? exerciseNum + 1 : 1);
        exerciseNum === 3 ? setCounter(60) : setCounter(30);
      }
    }
    handleButtonContent();
    handleCount();
    timerStarted &&
      counter > 0 &&
      setTimeout(() => setCounter(counter - 1), 1000);
  });

  return (
    <div>
      <div id="counter">{counter}</div>
      <div id="video-start-buttons">
        <a href={exerciseLink} target="_blank" rel="noreferrer">
          <button id="video-button">
            <FaYoutube />
          </button>
        </a>
        <button id="timer-button" onClick={handleButtonClick}>
          {buttonContent}
        </button>
      </div>
    </div>
  );
}
