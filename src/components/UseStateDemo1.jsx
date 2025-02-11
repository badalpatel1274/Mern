import React, { useState } from 'react'

const UseStateDemo1 = () => {

  const [Count, setCount] = useState(0)

  const increment = () => {
    setCount(Count + 1)

  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Use State Demo 1</h1>
      <h1>count : {Count}</h1>
      <button onClick={() => increment()}>Increment</button>

    </div>
  )
}

export default UseStateDemo1
