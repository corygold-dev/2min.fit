import React, { createContext, useState } from "react";
import { intermediate } from "../exercises/intermediate";

const ProgramContext = createContext();

function ProgramProvider({ children }) {
  const [program, setProgram] = useState(intermediate);

  return (
    <ProgramContext.Provider value={{ program, setProgram }}>
      {children}
    </ProgramContext.Provider>
  );
}

export { ProgramProvider, ProgramContext };
