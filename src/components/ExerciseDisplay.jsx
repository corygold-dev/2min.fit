import React from "react";
import exercises from "../exercises";

export const ExerciseDisplay = ({
  exerciseNum,
  setExerciseNum,
  timerStarted,
}) => {
  const exerciseBlock = exercises[new Date().getDay()];

  const handleNextExercise = () => {
    setExerciseNum(exerciseNum + 1);
  };

  const handlePrevExercise = () => {
    setExerciseNum(exerciseNum - 1);
  };

  return (
    <>
      <a href={exerciseBlock[exerciseNum]["link"]} target="_blank" rel="noreferrer">
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
};
