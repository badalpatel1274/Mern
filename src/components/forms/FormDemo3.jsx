import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo3 = () => {

 const {register,handleSubmit,formState:{errors}} =useForm()
const submitHandler =(data)=>{
    console.log(data)
}

const validationSchema={
  name: {
    required: {
      value: true,
      message: "ItemName Is Required*"
    }
  },
  time: {
    required: {
      value: true,
      message: "Time Is Required*"
    }
  },
}
  return (
    <div style={{textAlign:'center'}}>
    <h1>Khana Khajana</h1>
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
<div>
  <label htmlFor="">Item Name</label>
  <input type="text" {...register("ItemName",validationSchema.name)} />
  <span style={{color:'red'}}>
            {
              errors.ItemName?.message 
            }
          </span>
  <br />
<label htmlFor="">Item-Type:</label> <br />
VEG <input type="radio" value="veg" {...register("type")} />
NON-VEG <input type="radio" value="non-veg" {...register("type")} />

  <br />
  <label htmlFor="">Topping</label>
  Cheese<input type="checkbox" value="cheese"{...register("Topping")}  />
Sezwan<input type="checkbox" value="Sezwan"{...register("Topping")}  />
  Onion<input type="checkbox" value="cheese"{...register("Topping")}  />
<br />
  <label htmlFor="">Time</label>
  <input type="text" {...register("Time",validationSchema.time)} />
  <span style={{color:'red'}}>
            {
              errors.Time?.message 
            }
          </span>
<br />
<input type="submit"  value="Create"/>

</div>
<h1>Validation Is Completed</h1>



          
      </form>
    </div>
  </div>
  )
}

export default FormDemo3
