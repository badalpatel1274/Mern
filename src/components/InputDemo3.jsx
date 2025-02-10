import React, { useState } from 'react'

const InputDemo3 = () => {

    const [firstName, setfirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")


  return (
    <div style={{textAlign: 'center'}}>
      <h1>Input Demo 3</h1>
      <label htmlFor="">First Name</label>
      <input type="text" placeholder='enter your name' onChange={(e)=>{setfirstName(e.target.value)}}/> 
      <label htmlFor="">Last Name</label>
      <input type="text" placeholder='enter your last name' onChange={(e)=>{setLastName(e.target.value)}}/><br />
    
      <label htmlFor="">Age</label>
      <input type="number" placeholder='enter your age' onChange={(e)=>{setAge(e.target.value)}}/>
      <label htmlFor="">Email</label>
      <input type="email" placeholder='enter your email' onChange={(e)=>{setEmail(e.target.value)}}/> <br />
      <label htmlFor="">City</label>
      <input type="text" placeholder='enter your city' onChange={(e)=>{setCity(e.target.value)}}/>
      <label htmlFor="">State</label>
      <input type="text" placeholder='enter your state' onChange={(e)=>{setState(e.target.value)}}/>

      <h2>First Name : {firstName}</h2>

      <h2>Last Name : {lastName}</h2>
      <h2>Full Name : {firstName} {lastName} </h2>
      <h2>Age : {age}</h2>
      <h2>Email : {email}</h2>
      <h2>City : {city}</h2>
      <h2>State : {state}</h2>
    </div>
  )
}

export default InputDemo3
