import { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addTodo,deleteTodo } from "./todo/TodoSlice";
function App(props) {
  const [inputValue, setInputValue] = useState(null);
  const { addTodo, todo,deleteTodo } = props;
 
  return (
    <>
      <form className="form-control d-flex">
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <br />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => addTodo(inputValue)}
        >
          Add
        </button>
      </form>{" "}
      {todo.list && (
        <ul className="card">
          {todo.list.map((user,index) => {
            return (
              <li key={user} className="card card-group">
                <h1 className="card-titile p-1"> {user}</h1>
                <div className="buttons d-flex gap-2">
                <button className="btn btn-success" >Update</button>
                <button className="btn btn-danger" onClick={()=>deleteTodo(inputValue)}>Delete</button></div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    addTodo: (param) => dispatch(addTodo(param)),
    deleteTodo:(param)=>dispatch(deleteTodo(param)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
