import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo4 = () => {

const {register,handleSubmit ,formState:{errors}} =useForm()
const submitHandler =(data)=>{
    console.log(data)
}

const validationSchema={
  name: {
    required: {
      value: true,
      message: "Name Is Required*"
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
    <h1>Simple Practice</h1>
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
          <input type="submit" />
        </div>
                <h1>Validation Is Completed</h1>

          
      </form>
    </div>
  </div>
  )
}

export default FormDemo4
