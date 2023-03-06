import React from 'react'

const HeadCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* card */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
        <p className='px-2'>Through 8/26</p>
        <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-500 hover:text-white'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl ' src="https://images.pexels.com/photos/4553111/pexels-photo-4553111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
      {/* card */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
        <p className='px-2'>Added Daily</p>
        <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-500 hover:text-white'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
      {/* card */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts</p>
        <p className='px-2'>Flavourful</p>
        <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-500 hover:text-white'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
    </div>
  )
}

export default HeadCards
