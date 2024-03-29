import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import MainWrap from "./components/MainWrap";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Questions from "./components/Questions";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScren from "./components/FinishScren";
const SECONDS_PRE_QUESTIONS = 10;
import Timer from "./components/Timer";
const initialState = {
  question: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  timer: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return (state = { ...state, question: action.payload, status: "ready" });
    case "dataFailed":
      return (state = { ...state, status: "error" });
    case "start":
      return (state = {
        ...state,
        status: "active",
        timer: state.question.length * SECONDS_PRE_QUESTIONS,
      });
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
      };
    }
    case "restart": {
      return { ...state, status: "ready", answer: null, index: 0, points: 0 };
    }
    case "tick": {
      return {
        ...state,
        timer: (state.timer -= 1),
        status: state.timer <= 0 ? "finish" : state.status,
      };
    }
    case "finish":
      return {
        ...state,
        status: "finish",
      };
    default:
      throw new Error("No such action");
  }
}

function App() {
  const [{ question, status, index, answer, points, timer }, dispatch] =
    useReducer(reducer, initialState);

  let numberOfQuestions = question.length;
  const totalQustionPoint =
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
            totalQustionPoint={totalQustionPoint}
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
        {status === "active" && <Timer timer={timer} dispatch={dispatch} />}
        {status === "active" && (
          <NextButton
            dispatch={dispatch}
            answer={answer}
            index={index}
            numberOfQuestions={numberOfQuestions}
          />
        )}
        {status === "finish" && (
          <FinishScren
            points={points}
            totalQustionPoint={totalQustionPoint}
            dispatch={dispatch}
          />
        )}
      </MainWrap>
    </div>
  );
}
export default App;
