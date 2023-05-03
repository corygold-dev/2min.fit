import React, { useContext } from "react";
import "./ExerciseDisplay.css";
import { ExerciseContext } from "../../providers/ExerciseProvider";
import { ProgramContext } from "../../providers/ProgramProvider";
export default function ExerciseDisplay() {
  const { exerciseNum } = useContext(ExerciseContext);
  const { program } = useContext(ProgramContext);

  const day = new Date().getDay();
  let exerciseBlock = program[day];

  if (day === 0 || day === 6) {
    exerciseBlock = program[Math.floor(Math.random() * (5 - 1 + 1) + 1)];
  }

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
