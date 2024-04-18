"use client"
import React from 'react'
import Globe from '@/app/Components/Globe'

const Card2 = () => {
  const detail = [
    {
      "id": "AFG",
      "value": 279128
    },
    {
      "id": "IND",
      "value": 332155
    },
    {
      "id": "USA",
      "value": 166422
    }
  ]
  return (
    <div className="lg:w-[40%] w-[90%] rounded-2xl drop-shadow-2xl overflow-hidden  my-2 bg-white px-5 py-5">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Your Travel</div>
    </div>
    <img className="w-full max-h-[297px] max-lg: flex items-center" src="/mapping.png" alt="Placeholder" />
    
  </div>
  )
}

export default Card2