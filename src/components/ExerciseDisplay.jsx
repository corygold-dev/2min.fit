import React, { useContext } from "react";
import { ExerciseContext } from "../providers/ExerciseProvider";
import exercises from "../exercises";

export function ExerciseDisplay() {
  const { exerciseNum } = useContext(ExerciseContext);

  const exerciseBlock = exercises[new Date().getDay()];

  return (
    <div id="exercise-display">
      <a
        href={exerciseBlock[exerciseNum]["link"]}
        target="_blank"
        rel="noreferrer"
      >
        {exerciseBlock[exerciseNum]["exerciseName"]}
      </a>
    </div>
  );
}
