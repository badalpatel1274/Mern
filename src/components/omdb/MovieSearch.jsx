import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MovieSearch = () => {
  const [moviesData, setmoviesData] = useState([])
  const [searchName, setsearchName] = useState("")
  const GetMOvieData = async () => {
    // const res = await axios.get("http://www.omdbapi.com/?apikey=67d585d7&s=avatar")
    const res = await axios.get(`http://www.omdbapi.com/?apikey=67d585d7&s=${searchName}`)
    console.log(res.data)
    setmoviesData(res.data.Search)
   
  }

  return (
    <div>
      <h1>Movie search</h1>
      <input type="text" onChange={(e) => { setsearchName(e.target.value) }} />

      <button onClick={() => { GetMOvieData() }}>get data</button>




<div class="container mt-4">
        <div class="row">
          {moviesData?.map((movie) => {
            return (
              <div>
                <div class="card"style={{height:'500px', width:'250px'}} >
                    <Link to={`/moviedetail/${movie.imdbID}`}>
                    <img src={movie.Poster} class="card-img-top" alt="Image" style={{height:'400px', width:'250px', objectFit:'cover'}} />
                  </Link>

                  <div class="card-body">
                    <h5 style={{textAlign:'center'}} class="card-title">{movie.Title}</h5>
                    <p  style={{textAlign:'center'}} class="card-text">{movie.imdbID}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>


    </div>
  )
}

export default MovieSearch
