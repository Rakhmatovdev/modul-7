import { useState } from "react";
import "./App.css";
import { addTodo, deleteTodo, updateTodo } from "./todo/TodoSlice";
import { connect } from "react-redux";
function App({addTodo, deleteTodo, updateTodo,todo}) {
 const [inputValue, setInputValue] = useState("")

 const handlerAdd=()=>{
  
 }
  return (<div className="container">
<div className="App">
<h1>Todo CRUD</h1>
<form className="form-control d-flex">
  <input type="text" className="form-control" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
  <button type="button" className="btn btn-primary" onClick={handlerAdd}>ADD</button>
</form>
</div>
  </div>);
}
function mapStateToProps(state){
  return state
}
function mapDispatchToProps(dispatch){
  return{
  addTodo:(param)=>dispatch(addTodo(param)),
  deleteTodo:(param)=>dispatch(deleteTodo(param)),
  updateTodo:(param)=>dispatch(updateTodo(param)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)