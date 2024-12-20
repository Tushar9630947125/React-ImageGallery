import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Details from '../FetchApi/Details'
import Photo from '../FetchApi/photo'
const CustomRoute = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Photo/>} />
        <Route path='/Details/:id' element={<Details/>}></Route>
        
    </Routes>
    </BrowserRouter>


    </>
  )
}

export default CustomRoute