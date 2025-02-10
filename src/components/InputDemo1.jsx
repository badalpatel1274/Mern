import React, { useState } from 'react'

const InputDemo1 = () => {
const [name, setname] = useState("")
const [email, setemail] = useState("")

const nameHandler = (e) =>{
    setname(e.target.value)
}

  return (
    <div style={{textAlign:'center'}}>
        <h1>Inpur Demo 1</h1>
      <div>
            <label>Name</label>
            {/* <input type="text" placeholder='Enter Your Name' onChange={(e) => setname(e.target.value)} /> */}

            <input type="text" placeholder='Enter Your Name' onChange={(e) => {nameHandler(e)}} />
            <h2>Name: {name}</h2>
      </div>
      <div>
    <label>Email</label>
    <input type="text" placeholder='Enter Your Email'  onChange={(e)=>{setemail(e.target.value)}} />
    <h2>Email:{email}</h2>
      </div>
        

    
    </div>
  )
}

export default InputDemo1
