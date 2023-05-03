import React, { useContext } from "react";
import "./ProgramSelector.css";
import { ProgramContext } from "../../providers/ProgramProvider";
import { beginner } from "../../exercises/beginner";
import { intermediate } from "../../exercises/intermediate";
import { expert } from "../../exercises/expert";
// import { atgExercises } from "../../exercises/atg";

export default function ProgramSelector() {
  const { setProgram, program } = useContext(ProgramContext);

  return (
    <div id="program-buttons">
      <button
        className={program === beginner ? "selected" : null}
        onClick={() => setProgram(beginner)}
      >
        Beginner
      </button>
      <button
        className={program === intermediate ? "selected" : null}
        onClick={() => setProgram(intermediate)}
      >
        Intermediate
      </button>
      <button
        className={program === expert ? "selected" : null}
        onClick={() => setProgram(expert)}
      >
        Expert
      </button>
      {/* <button
        className={program === atgExercises ? "selected" : null}
        onClick={() => setProgram(atgExercises)}
      >
        ATG
      </button> */}
    </div>
  );
}
