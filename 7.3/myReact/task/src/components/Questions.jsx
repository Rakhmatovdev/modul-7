import { useState } from "react";
import Options from "./Options";

const Questions = ({ question }) => {
  return (
    <div>
      <h4>{question.question}</h4>
   <Options options={question.options}/>
    </div>
  );
};

export default Questions;
