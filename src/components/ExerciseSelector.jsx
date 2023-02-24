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
    <>
      {timerStarted ? null : (
        <div id="next-prev-buttons">
          {exerciseNum < 3 ? (
            <button onClick={handleNextExercise}>Next Exercise</button>
          ) : null}
          {exerciseNum > 1 ? (
            <button onClick={handlePrevExercise}>Previous Exercise</button>
          ) : null}
        </div>
      )}
    </>
  );
}

export default ExerciseSelector;
