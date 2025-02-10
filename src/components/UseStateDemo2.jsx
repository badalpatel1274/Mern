import React, { useState } from 'react'

const UseStateDemo2 = () => {
    const [isLoading, setIsLoading] = useState(true)

    const stopLoading = () => {
        setIsLoading(false)
  
    }

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Use State demo 2</h1>
      <h1>
        {isLoading == true ? "Loading..." : ""}
      </h1>
      <button onClick={()=>{stopLoading()}}>Stop</button>
    </div>
  )
}

export default UseStateDemo2
