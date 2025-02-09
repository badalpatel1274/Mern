import React from 'react'

const ArrayDemo2 = () => {
    var students= [

        {
            name: "Badal",
            age: 20,
            grade: "A"
        },{
            name: "Kartik",
            age: 21,
            grade: "B"
        },{
            name: "Manav",
            age: 22,
            grade: "C"
        }
    ]
  return (
    <div style={{textAlign:'center', marginTop:'100px'}}>
      <h1 style={{marginBottom:'50px'}}>Array Demo 2</h1>
      {
        students.map((stu)=>{
            return <div>
                <h2>Name: {stu.name}</h2>
                <h2>Age: {stu.age}</h2>
                <h2>Grade: {stu.grade}</h2>
                <br/>
            </div>
        })
      }
    </div>
  )
}

export default ArrayDemo2
