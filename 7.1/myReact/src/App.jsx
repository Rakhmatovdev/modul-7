import "./App.css";
import { connect } from "react-redux";
function App(props) {
  const { counter, increment, decrement,reset } = props;
  return (
    <>
      <button onClick={(e)=>console.log(increment(e.target.value)) }>Increment</button>
      <button onClick={decrement}>Increment</button>
      <button onClick={reset}>Reset</button>
      <h1>{props.counter.count}</h1>
    </>
  );
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: "counter/increment" }),
    decrement: () => dispatch({ type: "counter/decrement" }),
    reset: () => dispatch({ type: "counter/reset" }),

  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
