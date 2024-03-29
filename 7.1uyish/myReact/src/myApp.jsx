import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "./redux-toolkit/todoSlice";

 export const MyApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (newTodo.trim() !== "") {
      dispatch(addTodo({ text: newTodo }));
      setNewTodo("")
    } else alert("Ma'lumot notogri kiritildi !!!")
  };

  return (
    <div className="container">
      <h1>Todo List toolkit</h1>
       <div className="form-control d-flex">
        <input
        className="form-control form-group"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}

        />
        <button className="btn btn-primary btn-group" onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="card card-group justify-content-between mt-2 p-4">
            <h4>{todo.text}</h4>
            <div className="buttons d-flex gap-1">
            <button
            className="btn btn-info"
              onClick={() =>
                dispatch(
                  updateTodo({
                    id: todo.id,
                    text: prompt("Update todo:", todo.text),
                  })
                )
              }
            >
              Update
            </button>
            <button className="btn btn-light" onClick={() => dispatch(removeTodo({ id: todo.id }))}>
              Remove
            </button>
         </div> </li>
        ))}
      </ul>
     
    </div>
  );
};

export default MyApp;
