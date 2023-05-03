import React, { useContext } from "react";
import "./ExerciseDisplay.css";
import { ExerciseContext } from "../../providers/ExerciseProvider";
import { ProgramContext } from "../../providers/ProgramProvider";
export default function ExerciseDisplay() {
  const { exerciseNum } = useContext(ExerciseContext);
  const { program } = useContext(ProgramContext);

  const exerciseBlock = program[new Date().getDay()];

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
