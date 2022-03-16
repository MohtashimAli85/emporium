import React, { useContext } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { formatPrices } from '../../utils/prices';
import StoreContext from '../../context/store-context';
const RoundedCard = (props) => {
    const { cart } = useContext(StoreContext);
    return (
        <Link
            href={{ pathname: `/product/[id]`, query: { id: props.id } }}
            passHref
        >
            <div className='rounded-lg flex flex-col max-w-[345px] gap-6 lg:gap-8  cursor-pointer' >
                <Image className='mx-auto' src={props.thumb} width={295} height={345} objectFit='contain' alt={props.title} />
                <div className='flex justify-between px-4 sm:px-0 sm:w-10/12 sm:mx-auto md:w-full '>
                    <p className='text-river-bed font-medium'>{props.title}</p>
                    <h4 className='text-dark font-semibold'>{formatPrices(cart, props.variant)}</h4>
                </div>
            </div>
        </Link>
    )
}

export default RoundedCard