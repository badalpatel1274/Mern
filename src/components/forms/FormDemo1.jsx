import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo1 = () => {

    const {register,handleSubmit,formState:{errors}} =useForm()
const submitHandler =(data)=>{
    console.log(data)

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
      Budget: {
        required: {
          value: true,
          message: "Budget Is Required*"
        }, 
        min:{
          value:5000,
          message:"minimum budget is 5000*"
        },
       
      },
      contact: {
        required: {
          value: true,
          message: "contact Is Required*"
        },
        pattern:{
          value:/[6-9][0-9]{9}/
,
          message:"Invalid Contact*"
        }
      },
    
    }
    

  return (
    <div style={{textAlign:'center'}}>
      <h1>Goa</h1>
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
                <label htmlFor="">Age</label>
                <input type="text" {...register("age",validationSchema.age)} />
                <span style={{color:'red'}}>
            {
              errors.age?.message 
            }
          </span>

                <label htmlFor="">Budget</label>
                <input type="text" {...register("Budget",validationSchema.Budget)} />
                <span style={{color:'red'}}>
            {
              errors.Budget?.message 
            }
          </span>

          <br />
          <label htmlFor="">Contact</label>
                <input type="number" {...register("number",validationSchema.contact)} />
                <span style={{color:'red'}}>
            {
              errors.number?.message 
            }
          </span>
<br />
                <input type="submit" />
            </div>




        </form>
      </div>
    </div>
  )
}

export default FormDemo1
