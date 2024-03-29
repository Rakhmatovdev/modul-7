import { useState } from "react";
import "./App.css";
import { addTodo ,deleteTodo,updateTodo } from "./todo/TodoSlice";
import { connect, useDispatch } from "react-redux";
function App({ todo, deleteTodo,updateTodo }) {
  const [inputValue, setInputValue] = useState("");
const dispatch=useDispatch()

  //add
  const addTodoList = () => {
    if (inputValue.trim()) {
     dispatch(addTodo(inputValue)) ;
      setInputValue("");
    } else alert("Ma'lumot notog'ri kiritildi !");
  };

//update
const handleUpdate=(user)=>{
updateTodo({...user,name:prompt("Ma'lumotkiriting: ",inputValue)})
}
  return (
    <div className="container">
      <h1>user Jasur</h1>
      <form className="form-control d-flex">
        <input
        className="form-control"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-success" type="button" onClick={addTodoList}>
          Add
        </button>
      </form>
      {todo.list && (
        <ul className="cd ">
          {todo.list.map((user) => {
            return (
              <li key={user.id} className="card card-group mt-2 justify-content-between">
                <h3>{user.name}</h3>
                <div className="buttons d-flex gap-2">
                <button className="btn btn-secondary" onClick={()=>handleUpdate(user)}>Update</button>
                <button className="btn btn-danger" onClick={()=>deleteTodo(user)}>Delete</button></div>
              </li> 
            );
          })}
        </ul>
      )}
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    // addTodo: (param) => dispatch(addTodo(param)),
    deleteTodo: (param) => dispatch(deleteTodo(param)),
    updateTodo: (param) => dispatch(updateTodo(param)),
  };
}
export default connect(state=>state, mapDispatchToProps)(App);
