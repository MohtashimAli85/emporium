import React from 'react'
import Image from 'next/image';
const CircularCard = (props) => {
    const grow = props.grow || '';
    return (
        <div className='relative w-[162px] h-[162px] md:w-[208px] md:h-[208px]'>
            {/* <Image src='/border-dashed.svg' width={208} height={208} alt='dashed border' className="absolute"  /> */}


            <svg className='absolute inset-0' viewBox="0 0 208 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="104" cy="104" r="103.5" stroke={`${props.borderColor}`} strokeDasharray="5 6" >
                </circle>
            </svg>

            <div className={`absolute left-1 top-1 ${props.bgColor} z-10 ${props.hover} transition  rounded-[50%] w-[154px] h-[154px] md:w-[200px] md:h-[200px] flex flex-col justify-center text-center mx-auto`}>
                <Image src={`/${props.img}.svg`} width={22} height={18} alt='shipping icon' />
                <h3 className='text-dark text-sm md:text-base font-medium mt-4'>{props.title}</h3>
                <p className='text-sm px-5  text-river-bed mt-2'>{props.desc}</p>
            </div>
        </div>
    )
    {/* <div className={`group border-2 cursor-pointer hover:border-4 transition-all border-dashed ${props.borderColor} m-1 rounded-[50%]  w-[210px] h-[210px] grid items-center`}>
            <div className={` ${props.bgColor} ${props.hover} transition  rounded-[50%]  w-[200px] h-[200px] flex flex-col justify-center text-center mx-auto`}>
                <Image src={`/${props.img}.svg`} width={22} height={18} alt='shipping icon' />
                <h3 className='text-dark font-medium mt-4'>{props.title}</h3>
                <p className='text-sm px-4 text-river-bed mt-2'>{props.desc}</p>
            </div>
        </div> */}
}

export default CircularCard