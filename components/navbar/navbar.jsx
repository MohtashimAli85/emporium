import React, { useEffect, useRef, useContext, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import DisplayContext from '../../context/display-context';
import StoreContext from '../../context/store-context';
import { useRouter } from 'next/router';
import { quantity, sum } from '../../utils/helper-functions'
const NavBar = () => {
    const { updateCartViewDisplay } = useContext(DisplayContext)
    const { cart } = useContext(StoreContext)
    const [isCheckout, setIsCheckout] = useState(true)

    const router = useRouter()

    useEffect(() => {
        if (router.pathname === "/checkout" || router.pathname === "/payment") {
            setIsCheckout(true)
        } else {
            setIsCheckout(false)
        }
    }, [router.pathname]);
    const inputEl = useRef(null);
    const toggleCSSclasses = (el, cls) => cls.map(cl => el.classList.toggle(cl));
    const dropDownHandler = (id) => {
        const ID = document.querySelector(`#${id}`);
        const dropDowns = ['bedroom', 'livingroom', 'dining', 'office'];
        const classes = ['invisible', 'opacity-0', 'max-h-0', 'max-h-[500px]'];
        dropDowns.forEach(e => {
            if (e == id) {
                toggleCSSclasses(ID, classes);
            } else {
                let newId = document.querySelector(`#${e}`);
                classes.forEach(c => {
                    if (!newId.classList.contains(c)) {
                        newId.classList.add(c);
                    }
                })
            }
        })
    }
    const showSearchInputhandler = () => {

        const searchInput = document.querySelector('.search-input');
        let classes = ['w-0', 'h-0', 'invisible', 'opacity-0', 'w-[170px]'];
        toggleCSSclasses(searchInput, classes);
        setTimeout(() => {
            inputEl.current.focus();
        }, 500)
        // searchInput
    }
    // useEffect(()=>{
    //     const searchInput = document.querySelector('.search-input');
    //     if
    // })
    return (
        <nav className='flex items-center justify-between px-4 mr-3 md:px-5 lg:px-10 xl:px-20'>
            <Link href='/' passHref>
                <div className='invisible md:visible cursor-pointer'>
                    <Image src='/logo.svg' width={56} height={72} alt={'logo'} />
                </div>
            </Link>
            <ul className=' text-dark gap-x-8 items-center hidden md:flex'>
                <li className='bedroom inline-flex cursor-pointer items-center relative'>
                    <Link href='#'>
                        <a onClick={() => { dropDownHandler('bedroom'); }}>Bedroom
                            <Image src='/down-arrow.svg' width={15} height={7} alt='down arrow icon' />
                        </a>
                    </Link>
                    <ul id='bedroom' className='dropdown z-10 space-y-3 absolute top-8 invisible opacity-0 max-h-0  transition-all duration-500 bg-white py-5 pl-5 w-36 text-river-bed '>
                        <li>Beds</li>
                        <li>Bed Sets</li>
                        <li>Bridals</li>
                        <li>Chesters</li>
                        <li>Dresser</li>
                        <li>Shelves</li>
                        <li>Side Tables</li>
                        <li>Closets</li>
                    </ul>
                </li>
                <li className='inline-flex cursor-pointer items-center relative'>
                    <Link href='#'>
                        <a onClick={() => { dropDownHandler('livingroom'); }}>Living Room
                            <Image src='/down-arrow.svg' width={15} height={7} alt='down arrow icon' />
                        </a>
                    </Link>
                    <ul id='livingroom' className='dropdown z-10 space-y-3 absolute top-8 invisible opacity-0 max-h-0  transition-all duration-500 bg-white py-5 pl-5 w-36 text-river-bed '>
                        <li>Beds</li>
                        <li>Bed Sets</li>
                        <li>Bridals</li>
                        <li>Chesters</li>
                        <li>Dresser</li>
                        <li>Shelves</li>
                        <li>Side Tables</li>
                        <li>Closets</li>
                    </ul>
                </li>
                <li className='inline-flex cursor-pointer items-center relative'>
                    <Link href='#'>
                        <a onClick={() => { dropDownHandler('dining'); }}>Dining & Kitchen
                            <Image src='/down-arrow.svg' width={15} height={7} alt='down arrow icon' />
                        </a>
                    </Link>
                    <ul id='dining' className='dropdown z-10 space-y-3 absolute top-8 invisible opacity-0 max-h-0  transition-all duration-500 bg-white py-5 pl-5 w-36 text-river-bed '>
                        <li>Beds</li>
                        <li>Bed Sets</li>
                        <li>Bridals</li>
                        <li>Chesters</li>
                        <li>Dresser</li>
                        <li>Shelves</li>
                        <li>Side Tables</li>
                        <li>Closets</li>
                    </ul>
                </li>
                <li className='inline-flex cursor-pointer items-center relative'>
                    <Link href='#'>
                        <a onClick={() => { dropDownHandler('office'); }}>Office
                            <Image src='/down-arrow.svg' width={15} height={7} alt='down arrow icon' />
                        </a>
                    </Link>
                    <ul id='office' className='dropdown z-10 space-y-3 absolute top-8 invisible opacity-0 max-h-0  transition-all duration-500 bg-white py-5 pl-5 w-36 text-river-bed '>
                        <li>Beds</li>
                        <li>Bed Sets</li>
                        <li>Bridals</li>
                        <li>Chesters</li>
                        <li>Dresser</li>
                        <li>Shelves</li>
                        <li>Side Tables</li>
                        <li>Closets</li>
                    </ul>
                </li>
            </ul>
            <div className='flex gap-x-7'>
                <div className='relative'>
                    <input ref={inputEl} type='text' className='w-0 h-0 invisible opacity-0 search-input absolute right-6  -top-1 bottom-0
                    py-4 pl-4 rounded-tl-xl rounded-bl-xl outline-none 
                    border border-slate-200  transition-all duration-300'  />
                    <Image src='/search-icon.svg' width={20} height={20} alt='search icon' onClick={showSearchInputhandler} />
                </div>
                {!isCheckout ? (
                    <Link href='/cart' passHref>
                        <div className='relative self-center'>
                            <Image src='/cart-icon.svg' width={20} height={20} alt='cart icon' />
                            <span className='text-dark absolute -right-3 -top-3'>
                                {cart.items.length > 0 ? cart.items.map(quantity).reduce(sum) : 0}
                            </span>
                        </div>
                    </Link>
                ) : null}

            </div>
        </nav>
    )
}

export default NavBar