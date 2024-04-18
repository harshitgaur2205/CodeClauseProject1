// "use client"
// import Image from 'next/image'
// import React from 'react'
// import Border from '../Border/Border'

// const CustomerCards = () => {
//   return (
//     <>
//       <div className='px-16 py-6 flex items-center justify-start gap-16 relative'>
        
//         <Image src="/assets/image.png" alt="Customer 1" width={100} height={100} />
        
//         <div className='flex flex-col gap-2'>
//           <span className='text-xl font-bold'>Nitish</span>
//           <svg width="183" height="35" viewBox="0 0 183 35" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M17.248 0.015625L21.0648 11.7623L33.416 11.7623L23.4237 19.0222L27.2404 30.7689L17.248 23.509L7.2557 30.7689L11.0724 19.0222L1.08009 11.7623L13.4313 11.7623L17.248 0.015625Z" fill="#FFE814"/>
//             <path d="M54.248 0.015625L58.0648 11.7623L70.416 11.7623L60.4237 19.0222L64.2404 30.7689L54.248 23.509L44.2557 30.7689L48.0724 19.0222L38.0801 11.7623L50.4313 11.7623L54.248 0.015625Z" fill="#FFE814"/>
//             <path d="M91.248 0.015625L95.0648 11.7623L107.416 11.7623L97.4237 19.0222L101.24 30.7689L91.248 23.509L81.2557 30.7689L85.0724 19.0222L75.0801 11.7623L87.4313 11.7623L91.248 0.015625Z" fill="#FFE814"/>
//             <path d="M128.248 0.015625L132.065 11.7623L144.416 11.7623L134.424 19.0222L138.24 30.7689L128.248 23.509L118.256 30.7689L122.072 19.0222L112.08 11.7623L124.431 11.7623L128.248 0.015625Z" fill="#FFE814"/>
//             <path d="M165.248 0.015625L169.065 11.7623L181.416 11.7623L171.424 19.0222L175.24 30.7689L165.248 23.509L155.256 30.7689L159.072 19.0222L149.08 11.7623L161.431 11.7623L165.248 0.015625Z" fill="#D9D9D9"/>
//           </svg>
//           <p className='text-sm font-semibold'>Nice one <br /> This product is useful for one-handed phone users</p>
//         </div>

//         <span className='absolute top-6 right-44 text-xl font-bold'>Product Name</span>
//         <button onClick={() => alert('Button Clicked')} className='absolute top-3 right-12'>
//           <svg width="9" height="25" viewBox="0 0 9 31" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 8.24805 0.015625)" fill="black"/>
//               <circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 8.24805 11.0156)" fill="black"/>
//               <circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 8.24805 22.0156)" fill="black"/>
//           </svg>
//         </button>
//       </div>
//       <Border/>
//     </>
//   )
// }

// export default CustomerCards


"use client"
import React from 'react'
import Image from 'next/image'
import Border from '../Border/Border'

const CustomerCards = () => {
  return (
    <>
      <div className='px-6 md:px-16 py-6 flex flex-col md:flex-row items-center md:justify-between relative'>
        <div className='mb-4 md:mb-0 flex items-center gap-4'> 
          <Image src="/assets/image.png" alt="Customer 1" width={100} height={100} />
          <div className='flex flex-col gap-2'>
            <span className='text-xs md:text-xl font-bold'>Nitish</span>
            <svg
  className="w-full h-auto"
  viewBox="0 0 183 35"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17.248 0.015625L21.0648 11.7623L33.416 11.7623L23.4237 19.0222L27.2404 30.7689L17.248 23.509L7.2557 30.7689L11.0724 19.0222L1.08009 11.7623L13.4313 11.7623L17.248 0.015625Z"
    fill="#FFE814"
  />
  <path
    d="M54.248 0.015625L58.0648 11.7623L70.416 11.7623L60.4237 19.0222L64.2404 30.7689L54.248 23.509L44.2557 30.7689L48.0724 19.0222L38.0801 11.7623L50.4313 11.7623L54.248 0.015625Z"
    fill="#FFE814"
  />
  <path
    d="M91.248 0.015625L95.0648 11.7623L107.416 11.7623L97.4237 19.0222L101.24 30.7689L91.248 23.509L81.2557 30.7689L85.0724 19.0222L75.0801 11.7623L87.4313 11.7623L91.248 0.015625Z"
    fill="#FFE814"
  />
  <path
    d="M128.248 0.015625L132.065 11.7623L144.416 11.7623L134.424 19.0222L138.24 30.7689L128.248 23.509L118.256 30.7689L122.072 19.0222L112.08 11.7623L124.431 11.7623L128.248 0.015625Z"
    fill="#FFE814"
  />
  <path
    d="M165.248 0.015625L169.065 11.7623L181.416 11.7623L171.424 19.0222L175.24 30.7689L165.248 23.509L155.256 30.7689L159.072 19.0222L149.08 11.7623L161.431 11.7623L165.248 0.015625Z"
    fill="#D9D9D9"
  />
</svg>


            <p className='text-sm font-semibold'>Nice one <br /> This product is useful for one-handed phone users</p>
          </div>
        </div>

        <span className='absolute top-6 right-0 md:right-30 text-xs md:text-xl font-bold'>Product Name</span>
        <button onClick={() => alert('Button Clicked')} className='absolute top-1 right-1 md:top-3 md:right-12'>
          <svg width="9" height="25" viewBox="0 0 9 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            
          </svg>
        </button>
      </div>
      <Border />
    </>
  )
}

export default CustomerCards