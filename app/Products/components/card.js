import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import Rating from '@mui/material/Rating';

const card = (props) => {
  return (
    <div className='card-component flex'>
      <div className='card  flex w-full h-72 items-start gap-2.5' >
        <div className='image w-64  overflow-hidden h-60 max-w-full object-cover object-center	'>
          <img src={props.img} alt='image' className="h-full w-full" />
        </div>
        <div className='card_right h-64 w-4/5 flex flex-col items-start justify-center gap-5'>
          <h1 className='text-4xl'>{props.title}</h1>
          <div>
            <Rating name="read-only" value={props.stars} readOnly />
          </div>
          <h4>{props.para}</h4>
        </div>
        
      </div>
      <div className='icon text-3xl mt-2 cursor-pointer'>
          <HiDotsVertical />
        </div>
    </div>
    
  )
}

export default card