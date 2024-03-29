import { Fragment, useState } from "react"

const Questions = ({question}) => {
  const [state,setState]=useState(true)
  const test =(key,question1 )=>{
    let ball=0;
  if(key===question1.correctOption){
     ball+=question1.points
     alert("Siz tanlagan javob to'g'ri.")
  }else alert("Siz notog'ri belgiladingiz !!!")
  }
  return (
    <div>
    {question && question.map((question1,num)=>{
      return (<Fragment key={question1.id}>
<h3>{num+1}.{question1.question}</h3>


{question1.options.map((user,keys)=>{
 return (<Fragment key={keys}>
    <a className="btn btn-option btn-my" onClick={()=>test(keys+1,question1)}> { user}
    </a>
  </Fragment>)
})}
      </Fragment>)
    })}
    </div>
  )
}

export default Questions
