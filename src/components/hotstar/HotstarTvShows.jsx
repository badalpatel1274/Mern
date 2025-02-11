import React from 'react'

const HotstarTvShows = () => {
    return (
        <div style={{backgroundColor:'black', color:'white'}}>
            <h1 style={{textAlign:'center', fontFamily:'sans-serif',paddingTop:'10px'}}>Tv Shows</h1>
            <div className="flex" style={{display:'flex', justifyContent:'space-between', marginTop:'50px'}}>

                <div class="card" style={{ width: "18rem" }}>
                    <img class="card-img-top" src="https://i.pinimg.com/736x/46/4e/2a/464e2a939dd1e56d509e80d0a3ed7d95.jpg" alt="Card image cap" style={{ height: '500px', objectFit: 'cover' }} />
                    <div class="card-body"  style={{ backgroundColor:'black'}}>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img class="card-img-top" src="https://i.pinimg.com/736x/2c/53/54/2c53541c43545d8903e13979f9734d68.jpg" alt="Card image cap" style={{ height: '500px', objectFit: 'cover' }} />
                    <div class="card-body"  style={{ backgroundColor:'black'}}>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img class="card-img-top" src="https://i.pinimg.com/736x/00/dd/61/00dd611ef2b72eba0ff92837ccb2c9e2.jpg" alt="Card image cap" style={{ height: '500px', objectFit: 'cover' }} />
                    <div class="card-body"  style={{ backgroundColor:'black'}}>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img class="card-img-top" src="https://i.pinimg.com/736x/46/13/41/461341b3679f9d3f7cbac0857066f22d.jpg" alt="Card image cap" style={{ height: '500px', objectFit: 'cover' }} />
                    <div class="card-body"  style={{ backgroundColor:'black'}}>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HotstarTvShows
