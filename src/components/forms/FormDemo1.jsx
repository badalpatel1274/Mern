import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo1 = () => {

    const {register,handleSubmit} =useForm()
const submitHandler =(data)=>{
    console.log(data)
}
  return (
    <div style={{textAlign:'center'}}>
      <h1>Goa</h1>
      <div>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" {...register("name")} />
                <label htmlFor="">Age</label>
                <input type="text" {...register("age")} />

                <label htmlFor="">Budget</label>
                <input type="text" {...register("Budget")} />


                <input type="submit" />
            </div>




        </form>
      </div>
    </div>
  )
}

export default FormDemo1
