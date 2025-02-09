import React from 'react'

const ArrayDemo4 = () => {
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
      <h1>Employes Table</h1>

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
                <td style={{color: emp.name.startsWith("S")? 'green': 'black'}}>{emp.name}</td>
                <td style={{backgroundColor: emp.age >24 ? 'gray' :'black'}}>{emp.age}</td>
                <td style={{color : emp.Salary >22500 ? 'red' : 'black'}}>{emp.Salary}</td>
                <td style={{backgroundColor : emp.gender =="Male" ? 'silver': 'pink'}}>{emp.gender}</td>
 
               </tr>
        })
        }
    </tbody>

</table>

    </div>
  )
}

export default ArrayDemo4
