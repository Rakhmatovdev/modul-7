import React from "react";

const NextButon = ({ dispatch, answer, numberOfQuestions, index }) => {
  if (index + 1 == numberOfQuestions) {
    console.log(1);
  }
  if (answer !== null) {
    return (
      <div
        className="btn btn-ui"
        onClick={() => dispatch({ type: "newAnswer" })}
      >
        Next
      </div>
    );
  }
};

export default NextButon;
