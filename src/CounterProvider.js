import React, { createContext, useState } from "react";

const CounterContext = createContext();

function CounterProvider({ children }) {
  const [counter, setCounter] = useState(30);
  const [timerStarted, setTimerStarted] = useState(false);

  return (
    <CounterProvider.Provider
      value={{ counter, setCounter, timerStarted, setTimerStarted }}
    >
      {children}
    </CounterProvider.Provider>
  );
}

export { CounterProvider, CounterContext };
