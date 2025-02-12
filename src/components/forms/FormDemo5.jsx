import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo5 = () => {

     const {register,handleSubmit} =useForm()
    const submitHandler =(data)=>{
        console.log(data)
    }
    
  return (
     <div style={{textAlign:'center'}}>
        <h1>Hotel Booking</h1>
     <div>
        <form onSubmit={handleSubmit(submitHandler)}>
            <label htmlFor="">Full Name</label>
            <input type="text" {...register("name")} />
            <br />
            <label htmlFor="">Check In</label>
            <input type="date" {...register("checkin")} />
            <br />
            <label htmlFor="">Check out</label>
            <input type="date"  {...register("checkout")} />
            <br />
            <label htmlFor="">Room Type</label>
            <select>
                <option value="room"   {...register("single")}>Single Room</option>
                <option value="room"   {...register("double")}>Double Room</option>
                <option value="room"   {...register("suite")}>Suite</option>

            </select>
            <br />
            <label htmlFor="">NO.of Guest</label>
            <input type="number" {...register("guest")} />
            <br />
            <input type="submit" value="Book Now" />


        </form>
     </div>


    </div>
  )
}

export default FormDemo5
