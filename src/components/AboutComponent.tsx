import React from 'react'

export const AboutComponent = () => {
  return (
    <div className='px-3 py-12 flex mx-10'>
      <img src="/about.jpg" alt="image about us" className='w-[500px] h-[500px] object-cover'/>
      <div className='pl-20 size-fit'>
        <div className='border-l-4 border-primarycolor h-32 flex flex-col'>
          <p className='text-primarycolor font-bold text-md pl-10'>ABOUT US</p>
          <p className='font-bold text-5xl pl-10'>WE KEEP YOUR PETS <br />HAPPY ALL TIME</p>
        </div>
        <p className='my-10 text-gray-500 text-xl font-bold'>Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no labore lorem sit clita duo justo magna dolore</p>
        <div className='size-fit bg-gray-200 p-5'>
          <button className='bg-primarycolor w-1/2 py-2 text-white text-xl'>
            OUR MISSION
          </button>
          <button className='text-primarycolor w-1/2 py-2 text-xl hover:text-primarycolor'>
            OUR VISSION
          </button>
          <p className='text-gray-500 mt-2'>
            Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna
          </p>
        </div>
      </div>
    </div>
  )
}
