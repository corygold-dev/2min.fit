import React, { useState } from "react";
import "./Instructions.css";

export default function Instructions() {
  const [instructionsShown, setInstructionsShown] = useState(true);

  return (
    <div id={instructionsShown ? "instructions" : "hiddenInstructions"}>
      <div>
        <p>
          Click the exercise name for a how-to video. The "Next Exercise" and
          "Previous Exercise" buttons navigate through your daily three
          exercises (two strength exercises and one stretching).
        </p>
      </div>
      <div>
        <p>
          Use the start button to start your timer - a three second "Get Ready"
          countdown allows you to get into position for your exercise!
        </p>
        <button onClick={() => setInstructionsShown(false)}>Close</button>
      </div>
    </div>
  );
}
