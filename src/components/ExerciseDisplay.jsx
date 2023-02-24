import React, { useContext } from "react";
import { CounterContext } from "../providers/CounterProvider";
import { ExerciseContext } from "../providers/ExerciseProvider";
import exercises from "../exercises";

export function ExerciseDisplay() {
  const { exerciseNum, setExerciseNum } = useContext(ExerciseContext);
  const { timerStarted } = useContext(CounterContext);

  const exerciseBlock = exercises[new Date().getDay()];

  const handleNextExercise = () => {
    setExerciseNum(exerciseNum + 1);
  };

  const handlePrevExercise = () => {
    setExerciseNum(exerciseNum - 1);
  };

  return (
    <>
      <a
        href={exerciseBlock[exerciseNum]["link"]}
        target="_blank"
        rel="noreferrer"
      >
        {exerciseBlock[exerciseNum]["exerciseName"]}
      </a>
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
