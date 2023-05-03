import React, { useContext } from "react";
import "./ProgramSelector.css"
import { ProgramContext } from "../../providers/ProgramProvider";
import { exercises, atgExercises } from "../../exercises";

export default function ProgramSelector() {
  const { setProgram } = useContext(ProgramContext);

  return (
    <div id="program-buttons">
      <button onClick={() => setProgram(exercises)}>Original</button>
      <button onClick={() => setProgram(atgExercises)}>ATG</button>
    </div>
  );
}
