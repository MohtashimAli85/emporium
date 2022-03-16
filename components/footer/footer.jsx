import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
    return (
        <footer className=" mt-20 flex flex-col gap-y-4 md:gap-y-0 sm:flex-row flex-wrap justify-between bg-alabaster py-8 sm:py-12  px-4 md:px-5 lg:px-10 xl:px-20">
            <div className="">
                <h5 className="text-2xl font-medium mb-6">Information</h5>
                <ul className="list-none text-river-bed">
                    <li className="mb-2">
                        <Link href='/'>
                            <a className="">Laptops & Computers</a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href='/'>
                            <a className="">Cameras & Photography</a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href='/'>
                            <a className="">Smart Phones & Tablets</a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href='/'>
                            <a className="">Video Games & Consoles</a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href='/'>
                            <a className="">Waterproof Headphones</a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href='/'>
                            <a className="">Last time</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="">
                <h5 className="text-2xl font-medium mb-6">Contact Info</h5>


                <ul className="list-none text-river-bed">
                    <li className="mb-2">
                        <Link href='mailto:complaint@myfurniture.com'>
                            <a>complaint@myfurniture.com</a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="tel:+1111111111">
                            <a >111-111-111</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="">
                <h5 className="text-2xl font-medium mb-6">Follow Us</h5>
                <ul className="flex  gap-x-4 md:justify-between list-none text-river-bed">
                    <li className="mb-2">
                        <Link href='/'>
                            <a className="">
                                <Image src='/logo-facebook.svg' width={20} height={20} alt='fb icon' />
                            </a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href='/'>
                            <a className="">
                                <Image src='/logo-instagram.svg' width={20} height={20} alt='insta icon' />

                            </a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href='/'>
                            <a className="">
                                <Image src='/logo-twitter.svg' width={20} height={20} alt='twitter icon' />
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="basis-1/3">
                <h5 className="text-2xl font-medium mb-6">Newsletter</h5>
                <p className='mt-8 mb-10 text-river-bed '>Subscribe to our newsletter to get the latest news and product updates directly to your email. Just a second to subscribe today</p>
                <div className="flex">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your email address"
                        className='py-5 pl-5 rounded-tl-xl rounded-bl-xl outline-none border border-slate-200'
                    />
                    <button className="bg-dark rounded-tr-xl rounded-br-xl text-black font-normal  w-14 justify-center flex items-center">
                        <Image src='/submit-arrow.svg' width={25} height={25} alt='submit-arrow-icon' />
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer