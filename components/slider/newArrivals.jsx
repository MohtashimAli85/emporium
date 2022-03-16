import React, { Fragment } from 'react'


import RoundedCard from '../ui/roundeCard';
const NewArrivals = (props) => {
    const products = props.products;
    const newProducts = products.sort((a, b,) => {

        const createdAtA = new Date(a.created_at);
        const createdAtB = new Date(b.created_at);
        if (createdAtA < createdAtB) return -1;
        if (createdAtA > createdAtB) return 1;
        return 0;
    })
    return (
        <Fragment>
            <div className="px-3 md:px-5 lg:px-10 xl:px-20">
                <h1 className='text-xl sm:text-2xl md:text-4xl mb-6 md:mb-8 lg:mb-16 text-dark font-semibold text-center md:text-left'>NewArrivals</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'>
                    {newProducts && newProducts.map((e, i) => {
                        if (i < 4) {
                            return (
                                <RoundedCard key={e.id} title={e.title} thumb={e.thumbnail} variant={e.variants[0]} id={e.id} />
                            )
                        }

                    })}
                </div>

            </div>
        </Fragment>
    )
}

export default NewArrivals