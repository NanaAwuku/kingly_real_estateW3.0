import React from 'react'

import kingly from '../assets/img/real2.jpg'

const Invest = () => {
  return (
    <section className='h-full w-full bg-blue-950 text-white pb-20'>
      <div className='flex flex-col gap-y-32'>
        <div className='flex flex-col justify-center items-center gap-y-12 pt-20 px-32'>
          <h2 className='text-5xl text-center px-[300px] font-bold'>Don't get left behind by the legacy real estate market</h2>
          <p className='text-2xl text-center px-[250px] text-gray-200 mb-1 font-semibold'>It's time for a change. Rising down payments, inflexible terms, and soaring property prices are locking all but the wealthy out from building wealth with real estate. KinGly helps anyone lay a path to financial freedom with fractional real estate investing.</p>
        </div>
        <div className='flex justify-center  gap-x-[200px]'>
          <div className='mt-10 flex flex-col gap-y-5'>
            <p className='text-3xl font-bold'>Start investing in KinGly properties</p>
            <p className='text-2xl font-semibold text-gray-200'>Buy fractional ownership in properties across Africa.</p>
          </div>
          <img src={kingly} className='w-[500px]' alt="" />
        </div>

        <div className='flex flex-col justify-center items-center gap-y-12'>
          <div className='mt-10 flex flex-col gap-y-5 px-28 items-center '>
            <p className='text-4xl font-bold'>Automatically receive rental income</p>
            <p className='text-2xl font-semibold px-44 text-center text-gray-200'>You’ll get your first rent payment that same day, and daily after that. Your holdings will grow along with the property value, too.</p>
          </div>
          <img src={kingly} className='w-[500px] flex-1' alt="" />
        </div>
      </div>
      
    </section>
  )
}

export default Invest