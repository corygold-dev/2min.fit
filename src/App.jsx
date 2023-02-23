import { useState } from "react";
import Counter from "./components/Counter";
import { ExerciseDisplay } from "./components/ExerciseDisplay";

function App() {
  const [exerciseNum, setExerciseNum] = useState(1);
  const [timerStarted, setTimerStarted] = useState(false);

  return (
    <div id="main-app">
      <ExerciseDisplay
        timerStarted={timerStarted}
        exerciseNum={exerciseNum}
        setExerciseNum={setExerciseNum}
      />
      <Counter
        exerciseNum={exerciseNum}
        setExerciseNum={setExerciseNum}
        timerStarted={timerStarted}
        setTimerStarted={setTimerStarted}
      />
    </div>
  );
}

export default App;
