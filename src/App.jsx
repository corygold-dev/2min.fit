import Counter from "./components/Counter";
import { ExerciseDisplay } from "./components/ExerciseDisplay";
import ExerciseSelector from "./components/ExerciseSelector";

function App() {
  return (
    <div id="main-app">
      <ExerciseDisplay />
      <Counter />
      <ExerciseSelector />
    </div>
  );
}

export default App;
