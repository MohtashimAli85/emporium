import React from 'react'
import Image from 'next/image';
const PrettyCard = (props) => {
    return (
        <div className={`${props.odd}  rounded-xl ${props.bgColor}   flex flex-col items-center  gap-y-14  `}>
            <div className='shadow-custom-2 w-[47px] h-[37px] md:w-24 md:h-[76px] relative bg-white text-center pt-2 md:pt-[26px] self-start ml-2 md:ml-[3.25rem]
            after:content-[""] after:absolute after:w-0 after:h-0 after:border-r-[24px] md:after:border-r-[48px] 
                after:border-t-[10px] after:border-l-[24px] md:after:border-l-[48px] after:border-t-white 
                after:drop-shadow-[0px_3px_2px_rgba(0,0,0,0.07)] after:z-0
                after:border-l-transparent after:border-r-transparent
                after:left-[0rem] after:top-[2.3rem] md:after:top-[4.75rem]'>
                {/* props.title */}
                <h6 className='font-medium text-sm md:text-xl'>{props.title}</h6>
            </div>
            <div className=' px-2  md:px-4 xl:px-0'>
                <Image src={`/${props.img}.png`} width={325} height={props.height} alt='beds img' objectFit='contain' />
            </div>
        </div>
    )
}

export default PrettyCard