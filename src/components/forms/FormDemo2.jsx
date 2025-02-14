import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo2 = () => {

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
}

  return (
    <div style={{textAlign:'center'}}>
    <h1>Prayagraj</h1>
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

<label htmlFor="">Gender</label><br />

Male:<input type="radio" value="male" name='male' {...register("gender")} />
Female:<input type="radio" value="female" name='female' {...register("gender")} />
<br />
<label htmlFor="">Transport</label><br />

Train<input type="radio" value="train"  {...register("transport")}/>
Flight<input type="radio"  value="flight" {...register("transport")}/>
Bus<input type="radio" value="bus" {...register("transport")}/>

<br />
<label htmlFor="">choices</label> <br />
swim : <input type="checkbox"  value="swim" {...register("choices")}/>
20kmRun: <input type="checkbox"  value="run" {...register("choices")}/>
return : <input type="checkbox"  value="return" {...register("choices")}/>
<br />
<label htmlFor="">City</label>
<select>
    <option value="delhi">delhi</option>
    <option value="Mumbai">Mumbai</option>
    <option value="Pune">Pune</option>
 
</select>

<br />
<input type="submit" />

      </div>

      <h1>Validation Is Completed</h1>


          
      </form>
    </div>
  </div>
  )
}

export default FormDemo2
