import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import MainWrap from "./components/MainWrap";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Questions from "./components/Questions";
const initialState = {
  question: [],
  status: "loading",
  index:0
};
function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return (state = { ...state, question: action.payload, status: "ready" });
    case "dataFailed":
      return (state = { ...state, status: "error" });
    case "start":
      return (state = { ...state, status: "active" });
    default:throw new Error("No such action");
  }
}

function App() {
  const [{ question, status,index }, dispatch] = useReducer(reducer, initialState);

  let numberOfQuestions = question.length;

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
        {status === "ready" && (
          <StartScreen
            numberOfQuestions={numberOfQuestions}
            dispatch={dispatch}
          />
        )}
        {status === "active" && <Questions question={question[index]}/>}
      </MainWrap>
    </div>
  );
}
export default App;
