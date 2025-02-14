import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo6 = () => {
  const {register,handleSubmit,formState:{errors}} =useForm()
  const submitHandler =(data)=>{
      console.log(data)
  }
  const ValidationSchema ={

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
                color:{
                  required:{
                    value:true,
                    message:"Color Is Required*"
                  }
          },



  }
  
  return (
    <div style={{textAlign:'center'}}>
      <h1>Create Super Hero</h1>
     <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <label htmlFor="">SuperHero Name</label>
          <input type="text" placeholder='e.g. captain ,hulk,Ironman' {...register("heroname",ValidationSchema.name)}/>
          <span style={{color:'red'}}>
            {
              errors.heroname?.message 
            }
          </span>
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
          <input type="text" {...register("CostumeColor",ValidationSchema.color)} />
          <span style={{color:'red'}}>
            {
              errors.CostumeColor?.message 
            }
          </span>
          <br />
          <label htmlFor="">Do you Have a MultiPower : </label>
         Yes <input type="radio"  value="Yes" {...register("Multipower")} />
         No <input type="radio"  value="NO" {...register("Multipower")} />
<br />
            <input type="submit" value="Create My Super Hero" />
        </form>
     </div>

                <h1>Validation Is Completed</h1>
    </div>
  )
}

export default FormDemo6
