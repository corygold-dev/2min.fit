import React, { createContext, useState } from "react";
import { intermediate } from "../exercises/intermediate";

const ProgramContext = createContext();

function ProgramProvider({ children }) {
  const [program, setProgram] = useState(intermediate);
  const [random, setRandom] = useState(false);

  const day = new Date().getDay();
  let exerciseBlock = program[day];

  if (day === 0 || day === 6 || random) {
    exerciseBlock = program[Math.floor(Math.random() * (5 - 1 + 1) + 1)];
  }

  return (
    <ProgramContext.Provider
      value={{ program, setProgram, exerciseBlock, setRandom, random }}
    >
      {children}
    </ProgramContext.Provider>
  );
}

export { ProgramProvider, ProgramContext };
