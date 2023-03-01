import Counter from "./components/Counter/Counter";
import ExerciseDisplay from "./components/ExerciseDisplay/ExerciseDisplay";
import ExerciseSelector from "./components/ExerciseSelector/ExerciseSelector";
import Instructions from "./components/Instructions/Instructions";

export default function App() {
  return (
    <div id="main-app">
      <Instructions />
      <ExerciseDisplay />
      <Counter />
      <ExerciseSelector />
    </div>
  );
}
