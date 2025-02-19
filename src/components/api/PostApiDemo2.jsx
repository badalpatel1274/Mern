import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const PostApiDemo2 = () => {

  const { register, handleSubmit } = useForm()

  const submithandler = async (data) => {
    console.log(data)
    const res = await axios.post("https://node5.onrender.com/user/user", data)
    console.log(res.data.message)
    if (res.status == 201) {
      alert("add dataa...")
    }
  }
  return (
    <div>
      <h1>Post api demo 2 with using form</h1>
      <form onSubmit={handleSubmit(submithandler)}>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label htmlFor="">Age</label>
          <input type="text"  {...register("age")} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" {...register("email")} />
        </div>
        <div>
          <label htmlFor="">status</label>
          <input type="text"{...register("isActive")} />
        </div>

        <input type="submit" />

      </form>


    </div>
  )
}

export default PostApiDemo2


