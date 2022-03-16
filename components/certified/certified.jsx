import React from 'react'
import Image from 'next/image'
export const Certified = () => {
    return (
        <div className='px-4 md:px-5 lg:px-10 xl:px-20'>
            <h1 className='text-dark text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 md:mb-16'>Certified</h1>
            <ul className='flex flex-col gap-y-3 items-center sm:flex-row flex-wrap justify-between'>
                <li><Image src='/cf.png' width={99} height={40} alt='logo' /></li>
                <li><Image src='/ug.png' width={99} height={40} alt='logo' /></li>
                <li><Image src='/ul.png' width={99} height={40} alt='logo' /></li>
                <li><Image src='/ft.png' width={99} height={40} alt='logo' /></li>
                <li><Image src='/hb.png' width={99} height={40} alt='logo' /></li>
            </ul>
        </div>
    )
}
