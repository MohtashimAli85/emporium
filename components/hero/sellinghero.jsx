import React from 'react'
import HeroTwo from '../ui/herotwo'

const SellingHero = () => {
    return (
        <div className='px-4 md:px-5 lg:px-10 xl:px-20'>
            <h1 className='text-dark text-xl sm:text-2xl md:text-4xl text-center md:text-left font-semibold mb-8 md:mb-16'>Top Selling Items</h1>
            <HeroTwo img='prettybed.png' />
            <HeroTwo img='prettyoffice.png' order='order-1' />
        </div>
    )
}

export default SellingHero