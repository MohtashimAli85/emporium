import React from 'react'
import Image from 'next/image';
const Hero = () => {
    return (
        <div className='bg-pearl
        flex flex-col md:flex-row 
        py-6  md:px-5 lg:px-10 xl:px-20 xl:py-20
        justify-center items-center xl:gap-x-32'>
            <div className='basis-1/2  text-center md:text-left mt-5 sm:mt-0'>
                <h1 className='text-dark text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                font-semibold'>The Glory Cambalk furniture</h1>
                <p className='text-river-bed mt-4 mb-10 text-sm sm:text-base px-4 md:px-0' >Avoid the hassle of physically visiting a store and order your
                    favorite product with a few clicks online for the best wood furniture design. Free delivery is available.</p>
                <div className=' my-6 md:mt-0  max-w-[190px] sm:max-w-max  md:hidden mx-auto'>
                    <Image src='/hero.png' width={549} height={491} alt='hero' objectFit='cover' />
                </div>
                <button className='bg-dark w-10/12 md:w-max text-white rounded-[4px] md:rounded-xl p-[14px] text-base md:px-10 md:py-7 md:text-2xl font-medium'>Shop Now</button>
            </div>
            <div className='basis-1/2 mt-5 md:mt-0  max-w-[190px] sm:max-w-max hidden md:block'>
                <Image src='/hero.png' width={549} height={491} alt='hero' objectFit='cover' />
            </div>
        </div>
    )
}

export default Hero