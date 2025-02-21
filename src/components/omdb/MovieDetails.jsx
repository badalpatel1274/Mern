import axios from 'axios'
import '../omdb/detail.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const [detailsData, setdetailsData] = useState(null)
  const id = useParams().id

  useEffect(() => {
    const searchDetail = async () => {
      try {
        const res = await axios.get(`http://www.omdbapi.com/?apikey=67d585d7&i=${id}`)
        console.log(res.data)
        setdetailsData(res.data)
      } catch (error) {
        console.error("Error fetching movie details:", error)
      }
    }

    searchDetail()  
  }, [id]) 
  if (!detailsData) {
    return <h2 style={{textAlign:'center', backgroundColor:'rgba(60, 47, 47, 0.6), rgba(0, 0, 0, 0.9)', color:'white',height:'700px', alignContent:'center', fontSize:'40px'}}>Loading...</h2>
  }

  return (
    <div className="detail">
      <div className="upper">
        <div className="left">
          <h1 className='title'>{detailsData.Title}</h1>
          <div className="run-year">
            <p>{detailsData.Year}</p>
            <p>{detailsData.Runtime}</p>
          </div>
        </div>
        <div className="rating">
          <h5>IMDb RATING</h5>
          <h4>{detailsData.imdbRating}/10</h4>
        </div>
        <div className="votes">
          <h5>IMDb VOTES</h5>
          <h4>{detailsData.imdbVotes}</h4>
        </div>
      </div>
      <div className="cont">
        <div className="poster">
          <img src={detailsData.Poster} alt={detailsData.Title} />
        </div>
        <div className="box">
          <p>VIDEOS</p>
          <p>PHOTOS</p>
        </div>
      </div>

      <div className="genre">
        <p>{detailsData.Genre}</p>
      </div>

      <div className="cast">
        <p>{detailsData.Plot}</p>

        <div className="cast-part">
          <h4 style={{ color: 'white', fontWeight: '700' }}>Director</h4>
          <h4>{detailsData.Director}</h4>
        </div>

        <div className="cast-part">
          <h4 style={{ color: 'white', fontWeight: '700' }}>Writers</h4>
          <h4>{detailsData.Writer}</h4>
        </div>

        <div className="cast-part">
          <h4 style={{ color: 'white', fontWeight: '700' }}>Stars</h4>
          <h4>{detailsData.Actors}</h4>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails














// import axios from 'axios'
// import '../omdb/detail.css'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// const MovieDetails = () => {
//   const [detailsData, setdetailsData] = useState()
//   // const [showData, setshowData] = useState(false)
//   const id = useParams().id


  
//   const searchDetail = async () => {
//     const res = await axios.get(`http://www.omdbapi.com/?apikey=67d585d7&i=${id}`)
//     console.log(res.data)
//     setdetailsData(res.data)
//     // setshowData(true)


//   }

//   useEffect(() => {
//     searchDetail()  // Function ko yahan call karenge
//   }, [id])

//   return (
//     <>

//       {/* {!showData ? ( */}
//       {/* <div style={{ textAlign: 'center' }}>
//           <h1>Movie Details</h1>

//           <p className='btn' onClick={() => { searchDetail() }}>Click To More Details</p>
//         </div> */}
//       {/* ) : */}



//       {/* (detailsData && */}
//       {/* ( */}
//       <div className="detail">
//         <div className="upper">
//           <div className="left">

//             <h1 className='title'>{detailsData.Title}</h1>
//             <div className="run-year">
//               <p>{detailsData.Year}</p>
//               <p>{detailsData.Runtime}</p>
//             </div>
//           </div>
//           <div className="rating">
//             <h5>IMDb RATING</h5>
//             <h4>{detailsData.imdbRating}/10</h4>
//           </div>
//           <div className="votes">
//             <h5>IMDb VOTES</h5>
//             <h4>{detailsData.imdbVotes}</h4>
//           </div>
//         </div>
//         <div className="cont">

//           <div className="poster">
//             <img src={detailsData.Poster} alt="" />
//           </div>
//           <div className="box">
//             <p>VIDEOS</p>
//             <p>PHOTOS</p>
//           </div>
//         </div>

//         <div className="genre">
//           <p>{detailsData.Genre}</p>
//         </div>

//         <div className="cast">
//           <p>{detailsData.Plot}</p>

//           <div className="cast-part">
//             <h4 style={{ color: 'white', fontWeight: '700' }}>Director </h4>
//             <h4> {detailsData.Director}</h4>
//           </div>

//           <div className="cast-part">
//             <h4 style={{ color: 'white', fontWeight: '700' }}>Writers  </h4>
//             <h4>  {detailsData.Writer}</h4>
//           </div>

//           <div className="cast-part">
//             <h4 style={{ color: 'white', fontWeight: '700' }}>Stars  </h4>
//             <h4> {detailsData.Actors}</h4>
//           </div>

//         </div>






//       </div>
//       {/* )
//         )} */}

//     </>


//   )
// }

// export default MovieDetails
