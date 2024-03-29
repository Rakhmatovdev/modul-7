import React from 'react'

const Progress = ({index,numberOfQuestions,points,totalOfQuestions}) => {
  return (<>
  <progress value={index} max={numberOfQuestions}/>
    <header className='progress'>
      <p>{index+1}/{numberOfQuestions}</p>
      <p>{points}/{totalOfQuestions}</p>
    </header>
 </> )
}

export default Progress
