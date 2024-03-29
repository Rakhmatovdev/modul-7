import { useEffect, useState } from "react";

const Timer = ({ time, numberOfQuestions }) => {
  const fullTime = numberOfQuestions * time; //15*20=300 /60%10
  const res = (fullTime / 60) % 10;
  const [start, setStart] = useState(res);
  const [minut, setMinut] = useState(res);
  const [secund, setSecund] = useState(0);

//   const Start = () => {
//     start == res
//       ? setStart(
//           setInterval(() => {
//             setSecund((prev) => (prev -= 1));
//           }, 10)
//         )
//       : 0;
//   };
//   if (secund == 0) {
//     setSecund((prev) => (prev = 60));
//     setMinut((prev) => (prev -= 1));
//   }
//   const Pause = () => {
//     clearInterval(start);
//     setStart(res);
//   };

useEffect(()=>{
const timer=setInterval(()=>{
    setSecund
})
},[])
  return (
    <div>
      <button className="btn btn-ui timer">
        {minut}:{secund}
      </button>
    </div>
  );
};

export default Timer;
