import { useEffect, useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(5);
  const [timerStarted, setTimerStarted] = useState(false);
  const [heading, setHeading] = useState('Time Remaining');
  const [buttonContent, setButtonContent] = useState('Start');

  console.log(counter);

  function handleButton() {
    if (buttonContent === 'Start') {
      setTimerStarted(true);
      setButtonContent('Stop');
    } else if (buttonContent === 'Stop') {
      setTimerStarted(false);
      setButtonContent('Reset');
    } else {
      setCounter(5);
      setButtonContent('Start');
    }
  }

  useEffect(() => {
    timerStarted &&
      counter > 0 &&
      setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter, timerStarted]);

  return (
    <div>
      <div>{heading}</div>
      <div>{counter}</div>
      <button onClick={handleButton}>{buttonContent}</button>
    </div>
  );
}

export default Counter;
