import React from 'react'

const Content = () => {

     var name = "Badal"
            var age ="20"
            var isActive = false;
  return (
    <div style={{backgroundColor:"GrayText",color:"blue",textAlign:"center"}}>
      <h1>Hello</h1>
{name}
<h1>Name = {name} </h1>
<h2>Age = {age} </h2>
<h2>Active ? {isActive}</h2>
<h2>Actuve = {isActive == true ? "Actuve" : "Not Active"}</h2>
    </div>
  )
}

export default Content
