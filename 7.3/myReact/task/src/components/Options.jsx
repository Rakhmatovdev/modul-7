import React from 'react'

const Options = ({options}) => {
  return (
    <div className="options">
    {options.map((option, index) => {
      return (
        <div key={index} className="btn btn-option">
          {option}
        </div>
      );
    })}
  </div>
  )
}

export default Options
