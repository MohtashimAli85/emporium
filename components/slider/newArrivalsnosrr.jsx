import React from 'react'
import dynamic from 'next/dynamic'
const NewArrivalsNoSrr = dynamic(() => import('./newArrivals'), {
    srr: false
})

export default NewArrivalsNoSrr;