import React from "react";

const Options = ({ options, dispatch, correctOption, answer }) => {
    const hasAnswer=answer !==null
  return (
    <div className="options">
      {options.map((option, index) => {
        const isAnswer = answer;
        
        return (
          <button
            key={index}
            className={`btn btn-option ${ answer ==  index ? "answer":""} ${
              hasAnswer ? ( correctOption == index? "correct" : "wrong") : ""
            }`}
            onClick={() => dispatch({ type: "answer", payload: index })}
            disabled={hasAnswer}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Options;
