import React from 'react'
import { useForm } from 'react-hook-form'
import '../forms/css/kingdom.css'

const FormDemo7 = () => {
  const { register, handleSubmit,formState:{errors} } = useForm()
  const submitHandler = (data) => {
    console.log(data)
  }

  const validationSchema ={

      name :{
            required:{
              value:true,
              message:"name is required"
            }
      },
      color :{
        required:{
          value:true,
          message:"Color is required"
        }
  },
  }

  return (
    <div className='bg' style={{ textAlign: 'center' }}>
      <img src="https://t4.ftcdn.net/jpg/06/46/07/31/360_F_646073123_S8G52gc8ZI8tvsVgd9ft65xIM86efkuJ.jpg" alt="" />

      <div className='info'>
        <h1>Create Your Own Kingdom</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <label htmlFor="">Name Your Kingdom:</label>
          <input type="text" {...register("kingdomName",validationSchema.name)} />
          <span style={{color:'red'}}>
            {
              errors.kingdomName?.message 
            }
          </span>
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
          <input type="text" {...register("flagColor",validationSchema.color)} />
          <span style={{color:'red'}}>
            {
              errors.flagColor?.message 
            }
          </span>
          <br />
          <label htmlFor=""> What is your kingdom’s greatest strength?</label><br />
          Ancient Magic<input type="checkbox" value="strength" {...register("ancientMagic")} /> <br />
          Fearless Warriors<input type="checkbox" value="strength" {...register("Fearless Warrior")} /> <br />
          Endless Treasure<input type="checkbox" value="strength" {...register("Endless Treasure")} /> <br />
          Supreme Wisdom<input type="checkbox" value="strength" {...register("Supreme Wisdom ")} />
          <br />
          <br />
          <input type="submit" class="btn btn-danger" value="Create My Kingdom" />
        </form>
                <h1>Validation is Completed</h1>
      </div>

    </div>
  )
}

export default FormDemo7
