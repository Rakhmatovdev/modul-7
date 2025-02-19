import Options from "./Options";

const Questions = ({ question ,dispatch,answer}) => {
  
  return (
    <div>
      <h4>{question.question}</h4>
   <Options options={question.options} dispatch={dispatch} answer={answer} correctOption={question.correctOption}/>
    </div>
  );
};

export default Questions;
