import Counter from "../Counter/Counter";
import ExerciseDisplay from "../ExerciseDisplay/ExerciseDisplay";
import ExerciseSelector from "../ExerciseSelector/ExerciseSelector";
import Instructions from "../Instructions/Instructions";
import ProgramSelector from "../ProgramSelector/ProgramSelector";

export default function TwoMinuteFit() {
  return (
    <>
      <Instructions />
      <ProgramSelector />
      <ExerciseDisplay />
      <Counter />
      <ExerciseSelector />
    </>
  );
}
