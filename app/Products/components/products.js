import React from 'react'
import Card from "../components/card"
import { MdStarOutline } from "react-icons/md";


const products = () => {
    var data = [{
        img : "image.png",
        title:"Phone Holder",
        stars:4,
        para:`Nice one👌🏻  This product is useful for one-handed phone users👍🏻👍🏻👍🏻`
    },
    {
        img : "selling-products12.jpg",
        title:"Cello Kettle",
        stars:2,
        para:`The bottle is super at this price tag and the grip they gave is so good. Don’t look for other bottles in this price tag blindly you can take this.`
    },
    {
        img : "cello.png",
        title:"Cello Bottle",
        stars:3,
        para:`Quality is okay...looks good ...not leaking...value for money..good for the cost`
    }
]
  return (
    <div className='product min-h-screen w-full px-8 py-8'>
        <h1 className='heading  text-5xl h-36 w-11/12 px-10 py-2.5'>Products</h1>
        <hr/>
        {data.map((x) => {
            return(
                <>
                <Card img = {x.img} title = {x.title} stars = {x.stars} para = {x.para} />
                <hr/>
                </>
            )
        })}
    </div>
  )
}

export default products