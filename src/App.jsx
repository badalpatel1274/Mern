import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HotstarNav from './components/HotstarNav'
import { Route, Router, Routes } from 'react-router-dom'
import HotstarHome from './components/hotstar/HotstarHome'
import HotstarMovies from './components/hotstar/HotstarMovies'
import HotstarWelcome from './components/hotstar/HotstarWelcome'
import Hotstar404 from './components/hotstar/Hotstar404'
import HotstarSports from './components/hotstar/HotstarSports'
import HotstarTvShows from './components/hotstar/HotstarTvShows'


function App() {

  return (
    <>
    <HotstarNav/>
    <Routes>
      {/* <Route path='/' element={<HotstarWelcome/>}></Route> */}
      <Route path='/' element={<HotstarHome/>}></Route>
      <Route path='/movies' element={<HotstarMovies/>}></Route>
      <Route path='/sports' element={<HotstarSports/>}></Route>
      <Route path='/tvshow' element={<HotstarTvShows/>}></Route>
      <Route path='/*' element={<Hotstar404/>}></Route>
    </Routes>
    </>
  )
}

export default App
