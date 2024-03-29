import React from "react";

function NextButton({ dispatch, answer, numberOfQuestions, index }) {
  if (index + 1 === numberOfQuestions) {
    return (
      <div className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
        Finish
      </div>
    );
  }
  if (answer !== null) {
    return (
      <div className="btn btn-ui" onClick={() => dispatch({ type: "newAnswer" })}>
        Next
      </div>
    );
  }
  return null;
}

export default NextButton;
