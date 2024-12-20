import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import ImageCard from './ImageCard';

const FetchApi = () => {
   const [state,setState] = useState([])
  const fetchApi = async()=>{
    try{
      const res = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?limit=20");
      // console.log(res.data.photos)
      setState(res.data.photos)

    }catch(error){
      console.error("Error getting",error)
      alert("Error getting")
    }

  }
  useEffect(()=>{
    fetchApi();
  },[])
  return (
  <>
  <div className=''>
    <h1 className='text-center text-5xl shadow-md p-5 '>Home</h1>
  </div>
    <div className='flex flex-wrap gap-10 p-20  '>
       {state.map((e)=>{
        console.log(e)
        return <ImageCard  key={e.id}  url={e.url} id={e.id} />
       })}
    </div>
    </>
  )
}

export default FetchApi