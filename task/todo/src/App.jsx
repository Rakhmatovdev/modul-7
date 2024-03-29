import "./App.css";
import { connect } from "react-redux";

import { addTodo,deleteTodo,updateTodo } from "./todo/todoSlice";
import { useState } from "react";
function App({ addTodo, todo,deleteTodo,updateTodo }) {
  
  const [inputValue, setInputValue] = useState("");

  //add
const addTodoList=()=>{
  if(inputValue.trim()){
   addTodo(inputValue)
setInputValue("")
  } else alert("Ma'lumot yo'q")
  
}

//update
const handleUpdate=(user)=>{
updateTodo({...user,name:prompt("Ma'lumot kiriting: ",inputValue)})
}
  return (
    <div className="App">
      <form className="form-control form-group d-flex">
          <input
          className="form-control "
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="button" className="btn btn-primary" onClick={ addTodoList}>
            Add
          </button> </form>
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
                    onClick={() => deleteTodo(user)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
     
    </div>
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
