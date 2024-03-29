import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import MainWrap from "./components/MainWrap";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Questions from "./components/Questions";
import NextButon from "./components/NextButon";
import Progress from "./components/Progress";
const initialState = {
  question: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return (state = { ...state, question: action.payload, status: "ready" });
    case "dataFailed":
      return (state = { ...state, status: "error" });
    case "start":
      return (state = { ...state, status: "active" });
    case "answer": {
      return { ...state, answer: action.payload };
    }
    case "newAnswer": {
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        points:
          state.answer === state.question[state.index].correctOption
            ? state.points + state.question[state.index].points
            : state.points,
      }}
      case "finish":{
        return {...state,status:"finish"}
    }

    default:
      throw new Error("No such action");
  }
}

function App() {
  const [{ question, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numberOfQuestions = question.length;
  const totalOfQuestions =
    question.length > 0 && question.reduce((calc, b) => calc + b.points, 0);

  useEffect(() => {
    fetch(`http://localhost:7777/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />

      <MainWrap>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "active" && (
          <Progress
            index={index}
            numberOfQuestions={numberOfQuestions}
            points={points}
            totalOfQuestions={totalOfQuestions}
          />
        )}
        {status === "ready" && (
          <StartScreen
            numberOfQuestions={numberOfQuestions}
            dispatch={dispatch}
          />
        )}
        {status === "active" && (
          <Questions
            question={question[index]}
            dispatch={dispatch}
            answer={answer}
          />
        )}
        {status === "active" && (
          <NextButon dispatch={dispatch} answer={answer} index={numberOfQuestions}/>
        )}
        {status==="finish"}
      </MainWrap>
    </div>
  );
}
export default App;
