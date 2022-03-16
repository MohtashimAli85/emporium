import React from 'react'
import CircularCard from '../ui/circularcard'

const ChooseUs = () => {
    return (
        <div className='flex flex-col md:flex-row gap-y-9 items-center justify-around  py-10  mx-auto px-4 md:px-5 lg:px-10 xl:px-20'>
            <h1 className="text-dark  text-xl sm:text-3xl md:text-4xl font-semibold ">Why Choose Us?</h1>
            <div className='flex flex-col items-center gap-y-8'>
                <CircularCard img='shipping' title='SAFE SHIPPING' hover='group-hover:bg-light-teal' borderColor='#81E7D9' bgColor='bg-eggShell-blue' desc='In all major cities across the country' />
                <div className='flex flex-col sm:flex-row gap-x-4 gap-y-8 md:gap-x-16  items-center justify-center md:gap-y-2'>
                    <CircularCard img='dollar' title='COMPETITIVE PRICES' bgColor='bg-pearl' hover='group-hover:bg-rosy-pink' borderColor='#FB6695' desc='Quality with affordability ensured' />
                    <CircularCard img='support' title='CUSTOMER SUPPORT' bgColor='bg-buttery-white' hover='group-hover:bg-bright-orange' borderColor='#FF5E18' desc='Call us anytime:
111-111-1111' />
                </div>
            </div>
        </div>
    )
}

export default ChooseUs