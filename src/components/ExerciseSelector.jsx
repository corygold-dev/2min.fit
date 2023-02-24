import React, { useContext } from "react";
import { CounterContext } from "../providers/CounterProvider";
import { ExerciseContext } from "../providers/ExerciseProvider";

function ExerciseSelector() {
  const { timerStarted } = useContext(CounterContext);
  const { exerciseNum, setExerciseNum } = useContext(ExerciseContext);

  const handleNextExercise = () => {
    setExerciseNum(exerciseNum + 1);
  };

  const handlePrevExercise = () => {
    setExerciseNum(exerciseNum - 1);
  };

  return (
    <div id="next-prev-buttons">
      {timerStarted ? null : (
        <>
          {exerciseNum > 1 ? (
            <button id="previous-exercise" onClick={handlePrevExercise}>
              Previous Exercise
            </button>
          ) : (
            <div></div>
          )}
          {exerciseNum < 3 ? (
            <button id="next-exercise" onClick={handleNextExercise}>
              Next Exercise
            </button>
          ) : (
            <div></div>
          )}
        </>
      )}
    </div>
  );
}

export default ExerciseSelector;
