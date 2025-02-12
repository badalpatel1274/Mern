import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo4 = () => {

const {register,handleSubmit} =useForm()
const submitHandler =(data)=>{
    console.log(data)
}

  return (
    <div style={{textAlign:'center'}}>
    <h1>Simple Practice</h1>
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>

        <div>
          <label htmlFor="">Name</label>
          <input type="text" {...register("name")} />
          <br />
          <label htmlFor="">Age</label>
          <input type="text" {...register("age")} />
          <br />
          <label htmlFor="">Email</label>
          <input type="email" {...register("email")} />
          <br />
          <input type="submit" />
        </div>


          
      </form>
    </div>
  </div>
  )
}

export default FormDemo4
