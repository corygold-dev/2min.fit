import Counter from "./components/Counter/Counter";
import ExerciseDisplay from "./components/ExerciseDisplay/ExerciseDisplay";
import ExerciseSelector from "./components/ExerciseSelector/ExerciseSelector";
import Instructions from "./components/Instructions/Instructions";
import ProgramSelector from "./components/ProgramSelector/ProgramSelector";

export default function App() {
  return (
    <div id="main-app">
      <Instructions />
      <ProgramSelector />
      <ExerciseDisplay />
      <Counter />
      <ExerciseSelector />
    </div>
  );
}
