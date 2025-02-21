import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const FormDemo4 = () => {

  const [output, setoutput] = useState({})
  const [isSubmitted, setisSubmitted] = useState(false)
const {register,handleSubmit ,formState:{errors}} =useForm()
const submitHandler =(data)=>{
    console.log(data)
    setoutput(data)
    setisSubmitted(true)
}

const validationSchema={
  name: {
    required: {
      value: true,
      message: "ItemName Is Required*"
    },
    minLength:{
      value:3,
      message:"length size is 2"
    },
    maxLength:{
      value:8,
      message:"max length is 8"
    }
  },
  age: {
    required: {
      value: true,
      message: "age Is Required*"
    },
    min:{
      value:18,
      message:"above 18 are allowed*"
    },
    max:{
      value:60,
      message:"age is restricated"
    }
  },
  email: {
    required: {
      value: true,
      message: "email Is Required*"
    }
  },

}

  return (
    <div style={{textAlign:'center'}}>
    <h1>Validation Form</h1>
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>

        <div>
          <label htmlFor="">Name</label>
          <input type="text" {...register("name",validationSchema.name)} />
          <span style={{color:'red'}}>
            {
              errors.name?.message 
            }
          </span>
          <br />
          <label htmlFor="">Age</label>
          <input type="text" {...register("age",validationSchema.age)} />
          <span style={{color:'red'}}>
            {
              errors.age?.message 
            }
          </span>
          <br />
          <label htmlFor="">Email</label>
          <input type="email" {...register("email",validationSchema.email)} />
          <span style={{color:'red'}}>
            {
              errors.email?.message 
            }
          </span>
          <br />
              <label htmlFor="">Color</label>
              <input type="color" {...register("color")} />
          <br />
          <input type="submit" />
        </div>

          
      </form>
        {isSubmitted == true ?( <div style={{color:output.color}}>
        <h1>name={output?.name}</h1>
        <h1>age={output?.age}</h1>
        <h1>email={output?.email}</h1>
      </div>):""}
     
    </div>
    <h1>Validation Is Completed</h1>
  </div>
  )
}

export default FormDemo4
