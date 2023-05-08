import React, { useState } from "react";
import "./Instructions.css";
import { FaYoutube } from "react-icons/fa";

export default function Instructions() {
  const [instructionsShown, setInstructionsShown] = useState(true);

  return (
    <div id={instructionsShown ? "instructions" : "hiddenInstructions"}>
      <div>
        <p>
          The <strong>Next Exercise</strong> and{" "}
          <strong>Previous Exercise</strong> buttons navigate through your 3
          daily exercises.
        </p>
      </div>
      <div>
        <p>
          Use the{" "}
          <strong>
            <FaYoutube />
          </strong>{" "}
          button to open a video of how to do the exercise.
        </p>
      </div>
      <div>
        <p>
          The <strong>Start</strong> button starts your timer - a 5 second "Get
          Ready" countdown allows you to get into position for the exercise.
        </p>
        <button onClick={() => setInstructionsShown(false)}>Close</button>
      </div>
    </div>
  );
}
