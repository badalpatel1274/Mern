import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo6 = () => {
  const {register,handleSubmit} =useForm()
  const submitHandler =(data)=>{
      console.log(data)
  }
  
  return (
    <div style={{textAlign:'center'}}>
      <h1>Create Super Hero</h1>
     <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <label htmlFor="">SuperHero Name</label>
          <input type="text" placeholder='e.g. captain ,hulk,Ironman' />
          <br />
          <label htmlFor="">Choose Your Main Super Power</label>
          <select>
            <option value="power" {...register("speed")}>Speed</option>
            <option value="power" {...register("telepathy")}>Telepathy</option>
            <option value="power" {...register("invisibility")}>Invisibility</option>
            <option value="power" {...register("Flight")}>Flight</option>
            <option value="power" {...register("Strength")}>Strength</option>

          </select>
          <br />
          <label htmlFor="">Costume Color</label>
          <input type="text" {...register("Costume Color")} />
          <br />
          <label htmlFor="">Do you Have a MultiPower : </label>
         Yes <input type="radio"  value="Yes" {...register("Multipower")} />
         No <input type="radio"  value="NO" {...register("Multipower")} />
<br />
            <input type="submit" value="Create My Super Hero" />
        </form>
     </div>


    </div>
  )
}

export default FormDemo6
