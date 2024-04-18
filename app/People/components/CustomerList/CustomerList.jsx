import React from 'react'
import CustomerCards from '../CustomerCards/CustomerCards'
import Border from '../Border/Border'

const CustomerList = () => {
  return (
    <section className='customers w-[65%] py-2 bg-white text-black'>
      <h1 className='mt-10 px-16 pb-16 text-2xl font-bold'>Customers</h1>
      <Border/>
      <CustomerCards/>
      <CustomerCards/>
      <CustomerCards/>
      <CustomerCards/>
    </section>
  )
}

export default CustomerList