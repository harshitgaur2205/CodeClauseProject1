"use client"
import React from 'react'
import Globe from '@/app/Components/Globe'

const Card3 = () => {
  const detail = [
    {
      "id": "step_sent",
      "value": 81291,
      "label": "Sent"
    },
    {
      "id": "step_viewed",
      "value": 71838,
      "label": "Viewed"
    },
    {
      "id": "step_clicked",
      "value": 46061,
      "label": "Clicked"
    },
    {
      "id": "step_add_to_card",
      "value": 33170,
      "label": "Add To Card"
    },
    {
      "id": "step_purchased",
      "value": 20300,
      "label": "Purchased"
    }
  ]
  return (
    <div className="lg:w-[40%] w-[90%] rounded-2xl drop-shadow-2xl overflow-hidden px-5 py-5 my-2 bg-white">
    <div className="px-6 py-6">
      <div className="font-bold text-xl mb-2">Healthy Vs Junk Level</div>
    </div>
    <div style={{height:"40vh"}}>
      <Globe data={detail} />
    </div>
    {/* <img className="w-full max-h-[200px] max-lg: flex items-center" src="/bargraph.png" alt="Placeholder" /> */}

    <div className="flex justify-between ">
  <div className="flex items-center  pr-2">
    <p className="mr-2 ">Healthy <br/>1,135</p>
  </div>
  <div className='border-gray-200 border-r'>

  </div>
  <div className="flex items-center pl-2">
    <p className="ml-2">Junk<br/>635</p>
  </div>
</div>

  </div>
  )
}

export default Card3