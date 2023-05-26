import { useState } from "react";
import SetExercises from "../SetExercises/SetExercises";

export default function PlayingCards() {
  const [cards, setCards] = useState([]);

  function handleStart() {
    const suits = ["h", "d", "c", "s"];
    const ranks = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];

    const newDeck = [];

    for (const suit of suits) {
      for (const rank of ranks) {
        newDeck.push(rank + suit);
      }
    }
    setCards(newDeck);
    localStorage.setItem("cards", JSON.stringify(cards));
  }

  function handleGetRandomCard() {
    const cards = JSON.parse(localStorage.getItem("cards"));
    const randomCardIndex = Math.floor(Math.random() * cards.length - 1);
    console.log(cards.splice(randomCardIndex, 1));
    localStorage.setItem("cards", JSON.stringify(cards));
    console.log(JSON.parse(localStorage.getItem("cards")));
  }

  console.log(JSON.parse(localStorage.getItem("cards")));
  return (
    <div>
      <h1>PlayingCards</h1>
      <button onClick={handleStart}>Start New Game</button>
      <button onClick={() => localStorage.clear()}>Clear</button>
      <button onClick={handleGetRandomCard}>Grab Card</button>
      <SetExercises />
    </div>
  );
}
