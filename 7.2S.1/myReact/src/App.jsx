import { useState } from "react";
import "./App.css";
import { addTodo, deleteTodo, updateTodo } from "./todo/TodoSlice";
function App({ addTodo, todo, deleteTodo, updateTodo }) {
  const [inputValue, setInputValue] = useState("");

  //update
  const handleUpdate = (user) => {
    updateTodo({ ...user, name: prompt("Ma'lumot kiriting", inputValue.trim()) });
    alert("Ma'lumot muvoffaqiyatli o'zgardi !")
  };
  //add
const addTodoList=()=>{
  if(inputValue.trim()){
     addTodo(inputValue)
  alert("Ma'lumot muvoffaqiyatli kiritildi !")
setInputValue("")
  }else alert("Ma'lumot notog'ri kiritildi !")
 
}

  return (
    <>
      <form className="form-control d-flex">
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <button
          type="button"
          className="btn btn-primary"
          onClick={addTodoList}
        >
          Add
        </button>
      </form>
      {todo.list && (
        <ul className="">
          {todo.list.map((user) => {
            return (
              <li key={user.id} className="card card-group mt-3 justify-content-between">
                <h1 className="card-titile p-1"> {user.name}</h1>
                <div className="buttons d-flex gap-2">
                  <button
                    className="btn btn-success"
                    onClick={() => handleUpdate(user)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(user.id)}
                  >
                    Delete
                  </button>
                </div>
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
    deleteTodo: (param) => dispatch(deleteTodo(param)),
    updateTodo: (param) => dispatch(updateTodo(param)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
