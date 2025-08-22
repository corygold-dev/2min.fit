import React, { createContext, useState } from "react";

const CounterContext = createContext();

function CounterProvider({ children }) {
  const [counter, setCounter] = useState(30);
  const [timerStarted, setTimerStarted] = useState(false);

  return (
    <CounterContext.Provider
      value={{ counter, setCounter, timerStarted, setTimerStarted }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export { CounterProvider, CounterContext };
