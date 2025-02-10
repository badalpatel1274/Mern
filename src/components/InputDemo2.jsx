import React, { useState } from 'react'

const InputDemo2 = () => {
    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [email, setemail] = useState("")
    const [contact, setcontact] = useState()
     const [password, setPassword] = useState("")
  return (
    <div style={{textAlign : 'center'}}>
      <h1>Input demo 2</h1>
      <label htmlFor="">First Name</label>
    <input type="text" placeholder='Enter First Name' onChange={(e)=>{setFirstName(e.target.value)}} />

    <label htmlFor="">Last Name</label>
    <input type="text" placeholder='Enter Last Name' onChange={(e)=>{setSecondName(e.target.value)}} />


    <label htmlFor="">Email</label>
    <input type="text" placeholder='Enter Email' onChange={(e)=>{setemail(e.target.value)}} />

    <label htmlFor="">Contact</label>
    <input type="number" placeholder='Enter Contact' onChange={(e)=>{setcontact(e.target.value)}} />

    <label htmlFor="">Password</label>
    <input type="text" placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}}/>

    <h2>First Name : {firstName}</h2>
    <h2>Second Name : {secondName}</h2>
    <h2>Password : {password}</h2>
    <h2>Email : {email}</h2>
    <h2>Contact : {contact}</h2>
    </div>
  )
}

export default InputDemo2
