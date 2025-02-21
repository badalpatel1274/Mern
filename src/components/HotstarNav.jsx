import React from 'react'
import { Link } from 'react-router-dom'

const HotstarNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">Hotstar</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/movies">Movies</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tvshow">Tv Shows</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/formdemo1">FormDemo1</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/formdemo2">FormDemo2</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/formdemo3">FormDemo3</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/formdemo4">FormDemo4</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/formdemo5">FormDemo5</Link>
        </li> <li className="nav-item">
          <Link className="nav-link" to="/formdemo6">FormDemo6</Link>
        </li> <li className="nav-item">
          <Link className="nav-link" to="/formdemo7">FormDemo7</Link>
        </li> <li className="nav-item">
          <Link className="nav-link" to="/formdemo8">FormDemo8</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/validate1">Validate1</Link>
        </li> */}
         <li className="nav-item">
          <Link className="nav-link" to="/formdemo4">FormDemo4</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/validate1">Validate1</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/formdemo2">FormDemo2</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/moviesearch">Movie Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/postapidemo1">PosApidemo1</Link>
        </li>        <li className="nav-item">
          <Link className="nav-link" to="/postapidemo2">PostApDemo2</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/apidemo1">Api demo1</Link>
        </li>
       
      </ul>
    </div>
  </nav>
  )
}

export default HotstarNav
