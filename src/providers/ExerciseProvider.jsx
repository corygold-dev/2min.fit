import React, { createContext, useState } from "react";

const ExerciseContext = createContext();

function ExerciseProvider({ children }) {
  const [exerciseNum, setExerciseNum] = useState(1);

  return (
    <ExerciseContext.Provider value={{ exerciseNum, setExerciseNum }}>
      {children}
    </ExerciseContext.Provider>
  );
}

export { ExerciseProvider, ExerciseContext };
