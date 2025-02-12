import React from 'react'

const FormDemo8 = () => {

  const {register,handleSubmit} =useForm()
  const submitHandler =(data)=>{
      console.log(data)
  }
  
  return (
    <div style={{textAlign:'center'}}>
    <div>
       <form onSubmit={handleSubmit(submitHandler)}>


       </form>
    </div>


   </div>
  )
}

export default FormDemo8
