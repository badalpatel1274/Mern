import React from 'react'

const ArrayDemo3 = () => {
var Employe = [
    {
        id:1,
        name:"Badal",
        age:22,
        Salary : 20000,
        gender : "Male",
    },
    {
        id:2,
        name:"Isha",
        age:25,
        Salary : 25000,
        gender : "Female"
    },
    {
        id:3,
        name:"Rajesh",
        age:23,
        Salary : 22000,
        gender : "Male"
    },
    {
        id:4,
        name:"Seeta",
        age:24,
        Salary : 23000,
        gender : "Female"
    },
    {
        id:5,
        name:"Suresh",
        age:26,
        Salary : 26000,
        gender : "Male"
        
    }
]

  return (
    <div style={{textAlign:'center'}}>
      <h1>Array Demo 3</h1>

<table class='table table-hover'>

    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Gender</th>
        </tr>
    </thead>
    <tbody>
        {
        Employe.map((emp)=>{
               return <tr>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.Salary}</td>
                <td>{emp.gender}</td>
               </tr>
        })
        }
    </tbody>

</table>

    </div>
  )
}

export default ArrayDemo3
