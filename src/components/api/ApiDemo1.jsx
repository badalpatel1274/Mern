import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoaderFile from './LoaderFile'
import { Flip, toast, ToastContainer } from 'react-toastify'

const ApiDemo1 = () => {
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const [loader, setloader] = useState(false)
    const getUserData =async ()=>{
        setloader(true)
        const res = await axios.get("https://node5.onrender.com/user/user");
        // console.log(res)
        console.log(res.data)
        console.log(res.data.message)
        console.log(res.data.data)
        setmessage(res.data.message)
        setusers(res.data.data)
        setloader(false)
    }
    useEffect(()=>{
        getUserData()
    },[])

    const deleteUser =async (id)=>{
        const res  = await axios.delete(`https://node5.onrender.com/user/user/${id}`)
        console.log(res);
        if(res.status === 204){
            // alert("data is delete")
            toast.success('🦄 Data is Deleted!', {
                position: "top-center",
                autoClose: 3,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Flip,
                });
                
        }
    getUserData();
    }

  return (
    <div style={{textAlign:'center'}}>
        <ToastContainer
position="top-center"
autoClose={1}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Flip}
/>
        {/* {
            loader === true && <h1>Loading</h1>
        } */}

        {
            loader == true && <LoaderFile/>
        }
     {/* <h1>ApiDemo 1</h1>  */}
     {/* <button onClick={()=>{getUserData()}}>GET</button> */}
    {message}
    {
        users.length>0 ? 
    
    (<table className='table table-dark'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Active</th>
                <th>Action</th>
            </tr>

        </thead>
        <tbody>
            {
                users?.map((user)=>{
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                        <td>{user.isActive==true?"yes":"no"}</td>
                        <td>
                            <button className='btn btn-danger' onClick={()=>(deleteUser(user._id))}>Delete</button>
                        </td>
                        </tr>
                })
            }
        </tbody>
    </table>):""}
    </div>
  )
}

export default ApiDemo1
