import React from 'react'
import { Link } from 'react-router-dom'
const ImageCard = ({url,id}) => {
  console.log(url,id)
  return (
    <div className='border 2xl p-10 shadow-md bg-slate-100'>
      <Link to={`/Details/${id}`}><img className='max-w-64 shadow-2xl' src={url} alt={id} /></Link>
       
    </div>
  )
}

export default ImageCard