import { useReducer } from 'react'
import './App.css'

const reducer=(state,action)=>{
switch(action.type){
case "hidden":return{show:action.type}
case "show":return{show:action.type}
}

}
const initValue={
  show:"show"
}

function App() {
  const [value,dispatch]=useReducer(reducer,initValue)
  console.log(value);
  return (
    <>
    <button onClick={()=>dispatch({type:"show"})}>show</button>

    <div className={`${value.show}`}>
      <h1>Modal...</h1>
      <button onClick={()=>dispatch({type:"hidden"})}>hide</button>
    </div>
    </>
  )
}
export default App

// console.log(1234);
//import {createStore} from "redux"
// function reducer(state,action){
//     console.log(state);
//     console.log(action);
// }
// const store = createStore(reducer,{count:0})

// console.log(store.getState);

// const store = createStore(reducer,{count:0})
// function reducer(state,action){
//    switch(action.type){
//    case "inc":
//       return state ={count:action.payload}  
//    case "dec":
//       return state ={count:action.payload}
//    case "res":
//       return state ={count:0}
//     default: console.log({...state})

// }
// }
// store.dispatch({type:"inc",payload:2})
// console.log(store.getState());
// store.dispatch({type:"dec",payload:-1})
// console.log(store.getState());
// store.dispatch({type:"res"})
// console.log(store.getState());