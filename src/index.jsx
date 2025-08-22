import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CounterProvider } from "./providers/CounterProvider";
import { ExerciseProvider } from "./providers/ExerciseProvider";
import { ProgramProvider } from "./providers/ProgramProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProgramProvider>
    <ExerciseProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </ExerciseProvider>
  </ProgramProvider>,
);
