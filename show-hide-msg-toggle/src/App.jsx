import React, { useState } from 'react'

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => setIsVisible(!isVisible);

  return (
    <div>
      <button onClick={handleClick}>{isVisible === false ? 'Show Message' : 'Hide Message'}</button>   
      {/* using logical AND */}
      {/* {isVisible === true && <p>I love Coding!</p>} */}
      {/* using Ternary operator */}
      {isVisible === true ? (<p>I love Coding!</p>) : ('')}
    </div>
  )
}

export default App
