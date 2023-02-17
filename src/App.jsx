import { useState } from "react";
import Counter from "./components/Counter";
import { ExerciseDisplay } from "./components/ExerciseDisplay";
import exercises from "./exercises";

function App() {
  const [exerciseNum, setExerciseNum] = useState(1);
  return (
    <div>
      <ExerciseDisplay
        exerciseNum={exerciseNum}
        setExerciseNum={setExerciseNum}
      />
      <Counter />
    </div>
  );
}

export default App;
