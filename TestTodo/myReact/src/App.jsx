import { v4 as uid } from "uuid";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, setStatus, updateTodo } from "./todo/TodoSlice";
function App() {
  const [show, setShow] = useState(false);
  const { todo } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  console.log(todo);
  //open
  const openAdd = () => {
    setShow(true);
    dispatch(setStatus("open"));
  };

  //inprogres
  const inprogressAdd = () => {
    setShow(true); 
    dispatch(setStatus("inprogres"));
  };

  //complete
  const compliteAdd = () => {
    setShow(true);
    dispatch(setStatus("complite"));
  };

  //task
  const handleTasc = () => {
    if(inputValue.trim()){
    const newobj = {
      name: inputValue,
      id: uid(),
    };
    dispatch(addTodo(newobj));
    setShow(false);
    setInputValue("")  
    }else{
    alert("Ma'lumot kiriting !!!")}
  };

  const upOpen = (id) => {
    dispatch(updateTodo({ ...id, name: prompt("Uzgartiring") }));
  };

  const upProgres = (id) => {
    dispatch(updateTodo({ ...id, name: prompt("Uzgartiring") }));
  };

  const upCompleted = (id) => {
    dispatch(updateTodo({ ...id, name: prompt("Uzgartiring") }));
  };


  return (
    <div className="container">
      <div className="card p-4 mt-3 text-center">Umumiy tasklar soni:{todo.list1.length + todo.list2.length + todo.list3.length}</div>
      {!show && (
        <div className="card-wraper d-flex gap-2 mt-2">
          <div className="card card-open col-4 ">
            <div className="nav card-group justify-content-between p-3">
              {" "}
              <div>Open</div>
              <span className="bg-danger p-1 text-white">{todo.list1.length}</span>
            </div>
            <ul className="list-group">
              {todo.list1 &&
                todo.list1.map((item) => {
                  return (
                    <li
                      className="list-group-item d-flex align-items-center justify-content-between"
                      key={item.id}
                    >
                      <p> {item.name}</p>
                      <div className="d-flex gap-3">
                        <button className="btn" onClick={()=>upOpen(item)}>✏️</button>
                        <button className="btn" onClick={()=>dispatch(deleteTodo(item))}>✖️</button>
                      </div>
                    </li>
                  );
                })}
            </ul>
            <button className="btn btn-secondary" onClick={openAdd}>
              Add
            </button>
          </div>
          <div className="card card-inprogress col-4 ">
            <div className="nav d-flex card-group justify-content-between p-3">
              {" "}
              Inprogress <span className="bg-danger p-1 text-white">{todo.list2.length}</span>
            </div>
            <ul className="list-group">
              {todo.list2 &&
                todo.list2.map((item) => {
                  return (
                    <li
                      className="list-group-item d-flex align-items-center justify-content-between"
                      key={item.id}
                    >
                      <p> {item.name}</p>
                      <div className="d-flex gap-3">
                        <button className="btn" onClick={()=>upProgres(item)}>✏️</button>
                        <button className="btn" onClick={()=>dispatch(deleteTodo(item))}>✖️</button>
                      </div>
                    </li>
                  );
                })}
            </ul>
            <button className="btn btn-secondary " onClick={inprogressAdd}>
              Add
            </button>
          </div>
          <div className="card card-completed w-100 ">
            <div className="nav d-flex card-group justify-content-between p-3">
              {" "}
              Completed <span className="bg-danger p-1 text-white">{todo.list3.length}</span>
            </div>
            <ul className="list-group">
              {todo.list3 &&
                todo.list3.map((item) => {
                  return (
                    <li
                      className="list-group-item d-flex align-items-center justify-content-between"
                      key={item.id}
                    >
                      <p> {item.name}</p>
                      <div className="d-flex gap-3">
                        <button className="btn" onClick={()=>upCompleted(item)}>✏️</button>
                        <button className="btn" onClick={()=>dispatch(deleteTodo(item))}>✖️</button>
                      </div>
                    </li>
                  );
                })}
            </ul>
            <button className="btn btn-secondary " onClick={compliteAdd}>Add</button>
          </div>
        </div>
      )}
      {show && (
        <div className="modall mt-2">
          <form className="form-control d-flex">
            <input
              type="text"
              className="form-control"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="button" className="btn btn-info" onClick={handleTasc}>
              Submit
            </button>
          </form>{" "}
        </div>
      )}
    </div>
  );
}
export default App;
