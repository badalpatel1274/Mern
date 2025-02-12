import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo3 = () => {

 const {register,handleSubmit} =useForm()
const submitHandler =(data)=>{
    console.log(data)
}
  return (
    <div style={{textAlign:'center'}}>
    <h1>Khana Khajana</h1>
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
<div>
  <label htmlFor="">Item Name</label>
  <input type="text" {...register("ItemName")} />
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
  <input type="text" {...register("Time")} />

<input type="submit"  value="Create"/>

</div>



          
      </form>
    </div>
  </div>
  )
}

export default FormDemo3
