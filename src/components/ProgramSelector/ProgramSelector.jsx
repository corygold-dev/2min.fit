import React, { useContext } from "react";
import "./ProgramSelector.css";
import { ProgramContext } from "../../providers/ProgramProvider";
import { beginner } from "../../exercises/beginner";
import { intermediate } from "../../exercises/intermediate";
import { expert } from "../../exercises/expert";
// import { atgExercises } from "../../exercises/atg";

export default function ProgramSelector() {
  const { setProgram, program, setRandom, random } = useContext(ProgramContext);

  return (
    <>
      <div>
        <button
          id="random-button"
          className={random ? "selected" : "not-selected"}
          onClick={() => setRandom(!random)}
        >
          Random
        </button>
      </div>
      <div id="program-buttons">
        <button
          id="beginner-button"
          className={program === beginner ? "selected" : "not-selected"}
          onClick={() => setProgram(beginner)}
        >
          Beginner
        </button>
        <button
          id="intermediate-button"
          className={program === intermediate ? "selected" : "not-selected"}
          onClick={() => setProgram(intermediate)}
        >
          Intermediate
        </button>
        <button
          id="expert-button"
          className={program === expert ? "selected" : "not-selected"}
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
    </>
  );
}
