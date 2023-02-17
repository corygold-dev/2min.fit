import React from "react";
import exercises from "../exercises";

export const ExerciseDisplay = ({ exerciseNum, setExerciseNum }) => {
  const exerciseBlock = exercises[new Date().getDay()];

  const handleNextExercise = () => {
    setExerciseNum(exerciseNum + 1);
  };

  const handlePrevExercise = () => {
    setExerciseNum(exerciseNum - 1);
  };

  return (
    <>
      <div>The current exercise is {exerciseBlock[exerciseNum]}</div>
      {exerciseNum < 3 ? (
        <button onClick={handleNextExercise}>Next Exercise</button>
      ) : null}
      {exerciseNum > 1 ? (
        <button onClick={handlePrevExercise}>Previous Exercise</button>
      ) : null}
    </>
  );
};
