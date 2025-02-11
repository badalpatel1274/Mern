import React from 'react'

const HotstarHome = () => {
  return (
    <div style={{backgroundColor:'#14213d'}}>
      <h1 style={{textAlign:'center' ,fontFamily:'initial', backgroundColor:'#14213d' , color:"white"}}>Top Trendings</h1>

      <div class="card bg-dark text-white">
        <img class="card-img" src="https://i.pinimg.com/1200x/36/c8/d9/36c8d9424cb267074b526dc336de9daa.jpg" alt="Card image" style={{ height: '650px', objectFit: 'cover' }} />
        <div class="card-img-overlay">
          <h2 class="card-title">Zero</h2>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text">Last updated 3 mins ago</p>
        </div>
      </div>

      <div class="card bg-dark text-white">
        <img class="card-img" src="https://i.pinimg.com/1200x/8b/0f/be/8b0fbe82c3f5bb73eca9f557e8a9879c.jpg" alt="Card image" style={{ height: '650px', objectFit: 'cover' }} />
        <div class="card-img-overlay">
          <h2 class="card-title">The Batman</h2>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text">Last updated 3 mins ago</p>
        </div>
      </div>

    </div>
  )
}

export default HotstarHome




