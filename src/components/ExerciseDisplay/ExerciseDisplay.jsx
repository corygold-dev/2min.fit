import React, { useContext } from "react";
import "./ExerciseDisplay.css";
import { ExerciseContext } from "../../providers/ExerciseProvider";
import { ProgramContext } from "../../providers/ProgramProvider";
export default function ExerciseDisplay() {
  const { exerciseNum } = useContext(ExerciseContext);
  const { exerciseBlock } = useContext(ProgramContext);

  const exerciseName = exerciseBlock[exerciseNum]["exerciseName"];
  const exerciseLink = exerciseBlock[exerciseNum]["link"];

  return (
    <div id="exercise-display">
      <div>Exercise {exerciseNum} of 3</div>
      <a href={exerciseLink} target="_blank" rel="noreferrer">
        {exerciseName}
      </a>
    </div>
  );
}
