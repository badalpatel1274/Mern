import axios from 'axios'
import React from 'react'
import { get } from 'react-hook-form'

const PostApiDemo1 = () => {

    let userobj = {
        name:"badal",
        age:20,
        email:"badal@gmail.com",
        isActive:true
    }
    const getdata =async()=>{

        const res =await axios.post("https://node5.onrender.com/user/user",userobj);
        console.log(res);
        console.log(res.data)
        if(res.status==201){
            alert("add data...")
        }

    }

  return (
    <div>
      <h1>post Api Demo 1</h1>
      <button onClick={()=>{getdata()}}>Add data</button>
    </div>
  )
}

export default PostApiDemo1
