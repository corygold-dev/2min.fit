import { playingCardExercises } from "../../../exercises/playingCardExercises";
import { useState } from "react";

export default function SetExercises() {
  const [heartExercise, setHeartExercise] = useState({});
  const [diamondExercise, setDiamondExercise] = useState({});
  const [spadeExercise, setSpadeExercise] = useState({});
  const [clubExercise, setClubExercise] = useState({});

  function handleSetExercises() {
    const lowerExercises = playingCardExercises.filter(
      (exercise) => exercise.type === "lower"
    );

    const randomLowerExerciseIndex = Math.floor(
      Math.random() * lowerExercises.length - 1
    );
    const upperExercises = playingCardExercises.filter(
      (exercise) => exercise.type === "upper"
    );

    const randomUpperExerciseIndex = Math.floor(
      Math.random() * upperExercises.length - 1
    );

    const randomHeart = lowerExercises.splice(randomLowerExerciseIndex, 1)[0];
    const randomDiamond = lowerExercises.splice(randomLowerExerciseIndex, 1)[0];
    const randomSpade = upperExercises.splice(randomUpperExerciseIndex, 1)[0];
    const randomClub = upperExercises.splice(randomUpperExerciseIndex, 1)[0];
    setHeartExercise(randomHeart);
    setDiamondExercise(randomDiamond);
    setSpadeExercise(randomSpade);
    setClubExercise(randomClub);
  }

  return (
    <div>
      <button onClick={handleSetExercises}>Set Random Exercises</button>
      <div>Hearts: {heartExercise.exerciseName}</div>
      <div>Diamonds: {diamondExercise.exerciseName}</div>
      <div>Spades: {spadeExercise.exerciseName}</div>
      <div>Clubs: {clubExercise.exerciseName}</div>
    </div>
  );
}
