import React from 'react'
import heroVid from '../asset/video.mp4'

const Hero = () => {
  return (
    <div className='w-full lg:h-[90vh]'>
        <video 
            className='-z-10 absolute'
            width="100%"
            src={heroVid}
            loop
            muted
            autoPlay
        />
        <div className='flex justify-center items-center lg:h-[90%]'>
            <div className='flex flex-col gap-2 md:gap-5 justify-center items-center py-5 md:py-20 lg:h-[90%] w-[95%] lg:w-[50%]'>
                <h1 className='text-white font-bold text-xl md:text-2xl lg:text-4xl xl:text-5xl'>Decenteralized</h1>
                <h1 className='text-white font-bold text-xl md:text-2xl lg:text-4xl xl:text-5xl'>Trading <span className='italic bg-gray-500 py-1 px-2 rounded'>Space X</span></h1>
                <p className='text-white text-sm md:text-base lg:text-xl xl:text-2xl font-light text-center'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero;
