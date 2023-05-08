import React, { useContext } from "react";
import "./ExerciseDisplay.css";
import { ExerciseContext } from "../../providers/ExerciseProvider";
import { ProgramContext } from "../../providers/ProgramProvider";
export default function ExerciseDisplay() {
  const { exerciseNum } = useContext(ExerciseContext);
  const { exerciseBlock, program } = useContext(ProgramContext);

  const exerciseName = exerciseBlock[exerciseNum]["exerciseName"];

  return (
    <div id="exercise-display">
      <div>Exercise {exerciseNum} of 3</div>
      <div id={program.title}>{exerciseName}</div>
    </div>
  );
}
