import React from 'react'

const ArrayDemo1 = () => {

    var users= ["badal","kartik","manav"]
  return (
    <div style={{textAlign:'center'}} >
      
      <h1>Array Demo 1</h1>

      {
        users.map((user)=>{
            return <li>{user}</li>
        })
      }
    </div>
  )
}

export default ArrayDemo1
