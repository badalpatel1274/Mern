import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo8 = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const submitHandler = (data) => {
    console.log(data)
  }

  const validationSchema = {
   
    
    cityValidation: {
      required: {
        value: true,
        message: "City Name is Required"
      }
    },
    nameValidation: {
      required: {
        value: true,
        message: "movie Name is Required"
      }
    },

   
    bookValidation: {
      required: {
        value: true,
        message: "movie Name is Required"
      }
    },
    minpriceValidation:{
              required:{
                value:true,
                message:"min value is required"
              },
              min:{
                value:100,
                message:"min price is 100"
              }
    },
    maxpriceValidation:{
      required:{
        value:true,
        message:"max value is required"
      },
      max:{
        value:700,
        message:"max price is 700"
      }
}


  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Movie Ticket </h1>

      <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <label htmlFor="">Movie Name</label>
          <input type="text" {...register("moviename",validationSchema.nameValidation)} />
          <span style={{ color: 'red' }}>
            {
              errors.moviename?.message
            }
          </span>
          <br />
          <label htmlFor="">city name</label>
          <input type="text" {...register("city",validationSchema.cityValidation)} />
          <span style={{ color: 'red' }}>
            {
              errors.city?.message
            }
          </span>
          <br />
          <label htmlFor="">Theatre</label>
          <select>
            <option value="pvr" {...register("Theatre")} >PVR</option>
            <option value="cineworld" {...register("Theatre")} >CineWorld</option>
            <option value="conplex" {...register("Theatre")} >Conplex</option>
            <option value="INOX" {...register("Theatre")} >INOX</option>
            <option value="mukta A2" {...register("Theatre")} >Mukta A2</option>
            <option value="citygold" {...register("Theatre")} >CityGold</option>

          </select>
          <br />
          <label htmlFor="">No of BookTicket</label>
          <input type="number" {...register("bookticket",validationSchema.bookValidation)} />
          <span style={{ color: 'red' }}>
           {
            errors.bookticket?.message
           }
          </span>
          <br />
          <label htmlFor="">Min Price</label>
          <input type="number" {...register("minPrice",validationSchema.minpriceValidation)} />
         <span style={{color:'red'}}>
          {
            errors.minPrice?.message
          }
          </span>
          <label htmlFor="">Max Price</label>
          <input type="number" {...register("Maxprice",validationSchema.maxpriceValidation)} />
          <span style={{color:'red'}}>
          {
            errors.Maxprice?.message
          }
          </span>
          <br />
          <input type="submit" value="Book Ticket" />

        </form>
      </div>
<h1>Validation Is Completed</h1>

    </div>
  )
}

export default FormDemo8
