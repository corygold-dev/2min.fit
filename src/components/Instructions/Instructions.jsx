import React, { useState } from "react";
import "./Instructions.css";

export default function Instructions() {
  const [instructionsShown, setInstructionsShown] = useState(true);

  return (
    <div id={instructionsShown ? "instructions" : "hiddenInstructions"}>
      <div>
        <p>
          Clicking the exercise name opens a separate tab with an instructional
          video on how to perform the exercise.
        </p>
      </div>
      <div>
        <p>
          The <strong>Next Exercise</strong> and <strong>Previous Exercise</strong> buttons navigate through
          your 3 daily exercises.
        </p>
      </div>
      <div>
        <p>
          The <strong>Start</strong> button starts your timer - a 5 second "Get Ready"
          countdown allows you to get into position for the exercise.
        </p>
        <button onClick={() => setInstructionsShown(false)}>Close</button>
      </div>
    </div>
  );
}
