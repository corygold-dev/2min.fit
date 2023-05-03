import React, { createContext, useState } from "react";
import { exercises } from "../exercises";

const ProgramContext = createContext();

function ProgramProvider({ children }) {
  const [program, setProgram] = useState(exercises);

  return (
    <ProgramContext.Provider value={{ program, setProgram }}>
      {children}
    </ProgramContext.Provider>
  );
}

export { ProgramProvider, ProgramContext };