import { useEffect, useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(30);
  const [timerStarted, setTimerStarted] = useState(false);
  const [buttonContent, setButtonContent] = useState('Start');

  function handleButton() {
    if (buttonContent === 'Start') {
      setTimerStarted(true);
      setButtonContent('Stop');
    } else if (buttonContent === 'Stop') {
      setTimerStarted(false);
      setButtonContent('Reset');
    } else {
      setTimerStarted(false);
      setCounter(30);
      setButtonContent('Start');
    }
  }

  useEffect(() => {
    function handleButtonContent() {
      if (counter < 1) setButtonContent('Reset');
    }
    handleButtonContent();
    timerStarted &&
      counter > 0 &&
      setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter, timerStarted]);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleButton}>{buttonContent}</button>
    </div>
  );
}

export default Counter;
