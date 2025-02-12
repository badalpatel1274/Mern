import React from 'react'
import { Link } from 'react-router-dom'

const HotstarMovies = () => {
  return (

    <div style={{ textAlign: 'center', backgroundColor: "black", color: 'white', fontFamily: 'initial' }}>
      <h1>Movie</h1>
      {/* <div className="flex" style={{display:'flex', justifyContent:'space-between'}}>

    <div class="card" style={{ width: '18.5rem' , backgroundColor:'black'}}>
      <img class="card-img-top" src="https://i.pinimg.com/736x/5f/65/1a/5f651ac6cbd342b3b700f6276975e7bc.jpg" alt="Card image cap" style={{height:'500px',objectFit:'cover'}} />
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div class="card" style={{ width: '18.5rem', backgroundColor:'black' }}>
      <img class="card-img-top" src="https://i.pinimg.com/736x/9c/f1/9c/9cf19c40df2598d150d6e5cd6f9d0b58.jpg" alt="Card image cap" style={{height:'500px' , objectFit:'cover'}} />
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div class="card" style={{ width: '18.5rem', backgroundColor:'black' }}>
      <img class="card-img-top" src="https://i.pinimg.com/736x/56/7b/c9/567bc9d7b5560d375d752f7b29b58714.jpg" alt="Card image cap" style={{height:'500px' , objectFit:'cover'}} />
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      
    </div>
    <div class="card" style={{ width: '18.5rem', backgroundColor:'black' }}>
      <img class="card-img-top" src="https://i.pinimg.com/736x/84/82/72/8482724d5fc8338565406eae9ee0ba50.jpg" alt="Card image cap" style={{height:'500px' , objectFit:'cover'}} />
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      
    </div>
    <div class="card" style={{ width: '18.5rem', backgroundColor:'black' }}>
      <img class="card-img-top" src="https://i.pinimg.com/736x/46/85/a9/4685a9848cb1f396b56dd9e2d889a11e.jpg" alt="Card image cap" style={{height:'500px' , objectFit:'cover'}} />
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      
    </div>
    </div> */}
      <ul>
        <li>
          <Link to="/play/scam1992">Scam1992</Link>
        </li>

        <li>

          <Link to="/play/Jawan">Jawan</Link>
        </li>
        <li>
          <Link to="/play/123-456">Pushpa</Link>

        </li>
      </ul>
    </div>

  )
}

export default HotstarMovies
