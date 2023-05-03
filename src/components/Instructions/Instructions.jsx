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
          The "Next Exercise" and "Previous Exercise" buttons navigate through
          your daily three exercises.
        </p>
      </div>
      <div>
        <p>
          Use the start button to start your timer - a 5 second "Get Ready"
          countdown allows you to get into position for the exercise.
        </p>
        <button onClick={() => setInstructionsShown(false)}>Close</button>
      </div>
    </div>
  );
}
