import React from 'react'
import Image from 'next/image'
const HeroTwo = (props) => {

  const order2 = props.order ? `md:order-2` : '';
  return (
    <div className={`flex flex-col md:flex-row md:justify-between mb-20 gap-y-3 gap-x-3`}>
      <div className={order2}>
        <Image src={`/${props.img}`} width={624} height={400} alt='dv' />
      </div>
      <div className={`md:self-center md:${props.order} basis-2/5`}>
        <h1 className='text-dark sm:text-3xl md:text-4xl 
                font-semibold'>Lorem ipsum dolor sit amet</h1>
        <p className='text-river-bed mt-4 mb-6 md:mb-10' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <button className='bg-dark text-white rounded-xl px-4 py-3 xl:px-9 xl:py-6 xl:text-2xl
        w-10/12 md:w-max mx-auto flex justify-center md:justify-start'>Learn more</button>
      </div>
    </div >
  )
}

export default HeroTwo