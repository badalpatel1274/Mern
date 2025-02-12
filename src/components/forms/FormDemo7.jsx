import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo7 = () => {
  const {register,handleSubmit} =useForm()
  const submitHandler =(data)=>{
      console.log(data)
  }
  
  return (
    <div style={{textAlign:'center'}}>
      <h1>Create Your Own Kingdom</h1>
     <div>
        <form onSubmit={handleSubmit(submitHandler)}>
      <label htmlFor="">Name Your Kingdom:</label>
      <input type="text" {...register("kingdom name")} />
      <br />
      <label htmlFor="">Your Royal Title:</label>
      <select>
        <option value="Royal Title" {...register("king")} >King</option>
        <option value="Royal Title" {...register("Queen")} >Queen</option>
        <option value="Royal Title" {...register("emperor")} >Emperor</option>
        <option value="Royal Title" {...register("warlord")} >Warlord</option>
        <option value="Royal Title" {...register("mystic")} >Mystic</option>
       

      </select>
      <br />
      <label htmlFor="">Kingdom Flag Color</label>
      <input type="text" {...register("flagColor")} />
      <br />
      <label htmlFor=""> What is your kingdom’s greatest strength?</label><br />
      Ancient Magic<input type="checkbox" value="strength" {...register("ancientMagic")} /> <br />
      Fearless Warriors<input type="checkbox" value="strength" {...register("Fearless Warrior")} /> <br />
      Endless Treasure<input type="checkbox" value="strength" {...register("Endless Treasure")} /> <br />
      Supreme Wisdom c<input type="checkbox" value="strength" {...register("Supreme Wisdom ")} />
 <br />
<input type="submit" value="Create My Kingdom" />
        </form>
     </div>


    </div>
  )
}

export default FormDemo7
