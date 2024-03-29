import { useState } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "./redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const App = ({ todos, addTodo, removeTodo, updateTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }else  alert("Siz ma'lumot kiritmadingiz !!!")
  };

  return (
    <div>
      <h1>Todo List redux</h1>
      <form className="form-control ">
        <label>
          <input
            className="form-control form-group"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </label>
        <label>
          <button className="btn btn-primary btn-group" onClick={handleAddTodo}>
            Add Todo
          </button>
        </label>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="card card-group justify-content-between mt-2 p-4"
          >
            <h4 className="text-secondary">{todo.text}</h4>
            <div className="buttons d-flex gap-2">
              <button
                className="btn btn-info"
                onClick={() =>
                  updateTodo(todo.id, prompt("Update todo:", todo.text))
                }
              >
                Update
              </button>
              <button
                className="btn btn-danger"
                onClick={() => removeTodo(todo.id)}
              >
                Remove
              </button>
            </div>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});

const mapDispatchToProps = {
  addTodo,
  removeTodo,
  updateTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
