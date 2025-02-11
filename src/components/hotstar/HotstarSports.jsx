import React from 'react'

const HotstarSports = () => {
  return (
    <div style={{ textAlign: 'center', height: "400px", backgroundColor: "black", color:'white' , fontFamily:'serif'}}>
      <h1>Sports</h1>

      <div class="card-group" style={{color:'black'}}>
        <div class="card" >
          <img class="card-img-top" src="https://i.pinimg.com/736x/f2/d4/c4/f2d4c4481c12615ff8403f0ca33054c7.jpg" alt="Card image cap" style={{height:'500px', objectFit:'cover'}}/>
            <div class="card-body"   style={{ backgroundColor: "black", color:'white'}}>
              <h5 class="card-title">Ind vs Aus (odi)</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="https://i.pinimg.com/736x/e7/ab/70/e7ab70daedbfcc8c9f95ed0f36a45589.jpg" alt="Card image cap"  style={{height:'500px', objectFit:'cover'}}/>
            <div class="card-body" style={{ backgroundColor: "black", color:'white'}}>
              <h5 class="card-title">World Champions</h5>
              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="https://i.pinimg.com/736x/e4/3c/be/e43cbe12f5db0e4474a37078b22a0b93.jpg" alt="Card image cap"  style={{height:'500px', objectFit:'cover'}}/>
            <div class="card-body"   style={{ backgroundColor: "black", color:'white'}}>
              <h5 class="card-title">Ind vs Aus (Test)</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default HotstarSports
