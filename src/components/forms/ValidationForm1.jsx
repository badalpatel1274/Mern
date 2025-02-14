import React from 'react'
import { useForm } from 'react-hook-form'

const ValidationForm1 = () => {
       const {register,handleSubmit,formState:{errors}}= useForm()
const submithabdler = (data)=>{
    console.log(data)
}

    const  validationSchema = {
        nameValidaton:{
            required:{
                value:true,
                message:"Name is required"
            }
        },
        ageValidator:{
            required:{
                value:true,
                message:"age is required",
            
            },
            
        },
        contactValidator:{
            required:{
                    value: true,
                    message:"contact is required"
            },
            pattern:{
                value:/[6-9][0-9]{9}/,
                message:"contact is invalid"
            }
        }
        
    }


  return (
    <div style={{textAlign:'center'}}>
      <form onSubmit={handleSubmit(submithabdler)}>
        <div>
            <label htmlFor="">Name</label>
            <input type="text" {...register("name",validationSchema.nameValidaton)} />
            <span  style={{color:"red"}}>
                {
                    errors.name?.message
                }
            </span>
        </div>
        <div>
            <label htmlFor="">Age</label>
            <input type="text" {...register("age",validationSchema.ageValidator)} />
            <span  style={{color:"red"}}>
                {
                    errors.age?.message
                }
            </span>
        </div>
        <div>
            <label htmlFor="">Contact</label>
            <input type="number" {...register("contact",validationSchema.contactValidator)} />
            <span  style={{color:"red"}}>
                {
                    errors.contact?.message
                }
            </span>
        </div>
        <div>
            <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default ValidationForm1
