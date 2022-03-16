import React from 'react'
import Image from 'next/image'

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row  items-center justify-center  md:py-20 py-10  mx-auto px-4 md:px-5 lg:px-10 xl:px-20'>
            <div className='mt-20 md:mt-0 text-center md:text-left hidden md:block'>
                <h1 className="text-dark text-xl sm:text-2xl md:text-4xl font-semibold px-4 sm:px-0
                 mb-4 sm:mb-6 md:mb-8 lg:mb-12 md:w-4/5">Dining Chair Rocco in Bottle Green Velvet</h1>
                <button className='bg-dark text-white rounded-xl p-[14px] md:py-5 md:px-8 
                text-sm sm:text-base md:text-xl xl:text-2xl'>Add to Cart</button>
            </div>
            <h1 className="text-dark text-xl sm:text-2xl md:text-4xl font-semibold px-4 sm:px-0
                 mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-center md:hidden">Dining Chair Rocco in Bottle Green Velvet</h1>
            <div className='flex items-center gap-y-2 relative mt-5 md:mt-5  max-w-[190px] sm:max-w-max'>
                <Image src='/product2.png' width={370} height={337} alt='product' />
                <div className='absolute -z-10 top-8 '>
                    <Image src='/semiCircle.svg' width={448} height={446} alt='product' />
                </div>
            </div>
            <button className='bg-dark text-white rounded-[4px] p-[14px] md:py-5 md:px-8 
                text-sm sm:text-base md:text-xl xl:text-2xl mt-20 w-10/12 md:hidden'>Add to Cart</button>
        </div>
    )
}

export default Banner