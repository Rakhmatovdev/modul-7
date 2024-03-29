import { useEffect, useState } from "react";

const Timer = ({ timer, dispatch}) => {
//   const totalSecund = numberOfQuestions * time; 
//   const [secund, setSecund] = useState(timer)
useEffect(()=>{
const id=setInterval(()=>{
    dispatch({type:"tick"});
},100);
return ()=>{
    clearInterval(id)
}
},[dispatch])
  return (
    <div>
      <button className="btn btn-ui timer">
        {Math.floor(timer/60)}:{timer%60}
      </button>
    </div>
  );
};

export default Timer;
