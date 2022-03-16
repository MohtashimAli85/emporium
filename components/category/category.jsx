import React from 'react'
import PrettyCard from '../ui/prettyCard'

const Category = () => {
    return (
        <div className='px-4 md:px-5 lg:px-10 xl:px-20 my-10 md:my-0'>
            <h1 className='text-dark text-xl sm:text-2xl md:text-4xl font-semibold mb-8 md:mb-16'>Shop by Category</h1>
            <div className='hidden md:grid   grid-cols-3 gap-8  grid-rows-[400px] odd:row-span-2 '>
                <PrettyCard title="Beds" img="bed" height={'642'} odd='row-span-2' bgColor='bg-buttery-white' />
                <PrettyCard title="Dining" img="dining" height={'237'} bgColor='bg-alice-blue' />
                <PrettyCard title="Chairs" img="chairs" height={'642'} odd='row-span-2' bgColor='bg-white-lilac' />
                <PrettyCard title="Closets" img="bed" height={'642'} odd='row-span-2' bgColor='bg-[#FFF5FE]' />
                <PrettyCard title="Sofas" img="sofa" height={'237'} bgColor='bg-white-lilac' />
                <PrettyCard title="Sofas" img="sofa" height={'237'} bgColor='bg-rose-white' />
            </div>
            <div className='grid  md:hidden grid-cols-2 md:gap-8 gap-4  grid-rows-[200px] xl:grid-rows-[400px] odd:row-span-2 '>
                <PrettyCard title="Beds" img="bed" height={'642'} odd='row-span-2' bgColor='bg-buttery-white' />
                <PrettyCard title="Sofas" img="sofa" height={'237'} bgColor='bg-white-lilac' />
                <PrettyCard title="Dining" img="dining" height={'237'} bgColor='bg-alice-blue' />
                <PrettyCard title="Sofas" img="sofa" height={'237'} bgColor='bg-rose-white' />
                <PrettyCard title="Closets" img="bed" height={'642'} odd='row-span-2' bgColor='bg-[#FFF5FE]' />
                <PrettyCard title="Sofas" img="sofa" height={'237'} bgColor='bg-rose-white' />
            </div>
        </div>
    )
}

export default Category