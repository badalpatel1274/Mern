import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo5 = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const submitHandler = (data) => {
    console.log(data)
  }
  const validationSchema = {
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
    checkIN: {
      required: {
        value: true,
        message: "Check IN date Is Required*"
      }
    },
    checkOUt: {
      required: {
        value: true,
        message: "Check OUT date Is Required*"
      }
    },
    Guest:{
      required:{
        value:true,
        message:"Fill this details*"
      }
},
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Hotel Booking</h1>
      <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <label htmlFor="">Full Name</label>
          <input type="text" {...register("name",validationSchema.name)} />
          <span style={{color:'red'}}>
            {
              errors.name?.message 
            }
          </span>
          <br />
          <label htmlFor="">Check In</label>
          <input type="date" {...register("checkin",validationSchema.checkIN)} />
          <span style={{color:'red'}}>
            {
              errors.checkin?.message 
            }
          </span>
          <br />
          <label htmlFor="">Check out</label>
          <input type="date"  {...register("checkout",validationSchema.checkOUt)} />
          <span style={{color:'red'}}>
            {
              errors.checkout?.message 
            }
          </span>
          <br />
          <label htmlFor="">Room Type</label>
          <select>
            <option value="single"   {...register("room")}>Single Room</option>
            <option value="double"   {...register("room")}>Double Room</option>
            <option value="suite"   {...register("room")}>Suite</option>

          </select>
          <br />
          <label htmlFor="">NO.of Guest</label>
          <input type="number" {...register("guest",validationSchema.Guest)} />
          <span style={{color:'red'}}>
            {
              errors.guest?.message 
            }
          </span>
          <br />
          <input type="submit" value="Book Now" />


        </form>
      </div>

              <h1>Validation is Completed</h1>
    </div>
  )
}

export default FormDemo5
