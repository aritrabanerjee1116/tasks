import React, { useState } from 'react'

const Task4 = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const toggle = () =>{
    setIsExpanded(!isExpanded);

  }
  return (
    <div>
      <div>
        <h3>What is the purpose of React?</h3>
        <button onClick={toggle}>{isExpanded?"Collapse" : "Expand"}</button>
        <p className={isExpanded?"":"hidden"}>Building and updating complex UIs with plain JavaScript is a mess.
          React brings structure, predictability, and efficiency to UI updates.</p>
      </div>
      <div>
        <h3>What is JavaScript?</h3>
         <button onClick={toggle}>{isExpanded?"Collapse" : "Expand"}</button>
        <p  className={isExpanded?"":"hidden"}>JavaScript is a programming language used to build dynamic web pages.</p>
      </div>
    </div>
  )
}

export default Task4