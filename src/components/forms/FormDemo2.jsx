import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo2 = () => {

 const {register,handleSubmit} =useForm()
const submitHandler =(data)=>{
    console.log(data)
}

  return (
    <div style={{textAlign:'center'}}>
    <h1>Prayagraj</h1>
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
      <div>
<label htmlFor="">Name</label>
<input type="text" {...register("name")} /> <br />
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



          
      </form>
    </div>
  </div>
  )
}

export default FormDemo2
