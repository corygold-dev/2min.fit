import { useEffect, useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(5);
  const [timerStarted, setTimerStarted] = useState(false);
  const [heading, setHeading] = useState('Time Remaining');
  const [buttonContent, setButtonContent] = useState('Start Timer');

  useEffect(() => {
    timerStarted &&
      counter > 0 &&
      setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter, timerStarted]);

  return (
    <div>
      <div>{heading}</div>
      <div>{counter}</div>
      <button onClick={setTimerStarted}>{buttonContent}</button>
    </div>
  );
}

export default Counter;
