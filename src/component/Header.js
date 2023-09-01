import React, { memo } from 'react'
import Button from './Button'
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useCustomContext } from '../context/ContextProvider';

function Header() {
    const { toggle, handleToggle } = useCustomContext()
    
    return (
        <nav className='px-5 md:px-14 lg:px-32 xl:px-44 flex items-center justify-between h-16 lg:h-14 shadow-md bg-yellow-200'>
            <div className=''>
                <h1 className='italic text-2xl font-bold'>Space X</h1>
            </div>

            <div className='ml-auto lg:hidden z-50' onClick={handleToggle}>
                {
                    toggle === true ? 
                    (
                        <FaBars size='1.5em' />
                    ) : (
                        <ImCross size='1.5em' />
                    )
                }
            </div>

            <div className={'lg:hidden absolute px-7 top-0 left-0 w-full h-screen flex backdrop-brightness-75 transition ease-in-out delay-150 z-40 hidden' + (toggle === true ? ' block ' : null)}>
                <ul className='py-6 md:py-10 mt-20 bg-white h-2/5 md:h-2/6 rounded-lg flex flex-col gap-5 md:gap-7 items-center w-full text-lg md:text-xl text-Very-Dark-Blue font-bold'>
                    <li><a href="#" className='hover:text-Dark-Grayish-Blue'>Pricing</a></li>
                    <li><a href="#" className='hover:text-Dark-Grayish-Blue'>Product</a></li>
                    <li><a href="#" className='hover:text-Dark-Grayish-Blue'>About Us</a></li>
                    <li><a href="#" className='hover:text-Dark-Grayish-Blue'>Careers</a></li>
                    <li><a href="#" className='hover:text-Dark-Grayish-Blue'>Community</a></li>
                </ul>
            </div>

            <div className='flex items-center gap-7'>
                <ul className='hidden lg:flex items-center gap-7 text-xs text-Very-Dark-Blue font-semibold mx-auto'>
                    <li><a href="#" className='hover:text-Dark-Grayish-Blue'>Pricing</a></li>
                    <li><a href="#" className='hover:text-Dark-Grayish-Blue'>Product</a></li>
                    <li><a href="#" className='hover:text-Dark-Grayish-Blue'>About Us</a></li>
                    <li><a href="#" className='hover:text-Dark-Grayish-Blue'>Careers</a></li>
                    <li><a href="#" className='hover:text-Dark-Grayish-Blue'>Community</a></li>
                </ul>
                <div className='hidden lg:block z-40'>
                    <Button />
                </div>
            </div>
        </nav>
    )
}

export default memo(Header)