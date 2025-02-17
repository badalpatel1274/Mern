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
import Play from './components/hotstar/Play'
import FormDemo1 from './components/forms/FormDemo1'
import FormDemo2 from './components/forms/FormDemo2'
import FormDemo3 from './components/forms/FormDemo3'
import FormDemo4 from './components/forms/FormDemo4'
import FormDemo5 from './components/forms/FormDemo5'
import FormDemo6 from './components/forms/FormDemo6'
import FormDemo7 from './components/forms/FormDemo7'
import FormDemo8 from './components/forms/FormDemo8'
import ValidationForm1 from './components/forms/ValidationForm1'
import Footer from './components/Footer'
import Header from './components/Header'
import ArrayDemo4 from './components/ArrayDemo4'
import ArrayDemo3 from './components/ArrayDemo3'
import ArrayDemo5 from './components/ArrayDemo5'
import InputDemo1 from './components/InputDemo1'
import ApiDemo1 from './components/api/ApiDemo1'


function App() {

  return (
    <>
    <Navbar/>
    <ApiDemo1/>
   {/* <InputDemo1/> */}
    {/* <HotstarNav/>
    <Routes>
      <Route path='/' element={<HotstarHome/>}></Route>
      <Route path='/play/:id' element={<Play/>}></Route>
      <Route path='/movies' element={<HotstarMovies/>}></Route>
      <Route path='/sports' element={<HotstarSports/>}></Route>
      <Route path='/tvshow' element={<HotstarTvShows/>}></Route>
      <Route path='/formdemo1' element={<FormDemo1/>}></Route>
      <Route path='/formdemo2' element={<FormDemo2/>}></Route>
      <Route path='/formdemo3' element={<FormDemo3/>}></Route>
      <Route path='/formdemo4' element={<FormDemo4/>}></Route>
      <Route path='/formdemo5' element={<FormDemo5/>}></Route>
      <Route path='/formdemo6' element={<FormDemo6/>}></Route>
      <Route path='/formdemo7' element={<FormDemo7/>}></Route>
      <Route path='/formdemo8' element={<FormDemo8/>}></Route>
      <Route path='/validate1' element={<ValidationForm1/>}></Route>


      <Route path='/*' element={<Hotstar404/>}></Route>
    </Routes> */}
    </>
  )
}

export default App
