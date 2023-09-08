'use client'
import Image from 'next/image'
import { useState } from 'react'
import {RxHamburgerMenu} from "react-icons/rx"
import {RxCross2} from "react-icons/rx"
import Mobile_Menu from './Mobile_Menu'
import Desktop_Menu from "./Desktop_Menu"
function Header() {
    const [showMenu,  setShowMenu] = useState(false)
    const handleMenuClick = () => {
        const showmenu = !showMenu
        setShowMenu(showmenu)
    }
  return (
    <header className='relative flex justify-between lg:justify-center items-center border-b border-neutral-300  bg-accent-400 py-5 px-6 lg:py-0 lg:h-16'>
        <div>
            <Image
            src="/images/logo.svg"
            width="31"
            height="31"
            />
        </div>
        <div>
            <Desktop_Menu />
        </div>
        <div className='flex gap-5'>
            <button className='bg-primary rounded-md px-5 py-1 text-white font-bold text-sm lg:text-md'>
                30-DAY FREE TEAM TRIAL
            </button>
            <div className='menu-btn text-xl flex items-center cursor-pointer lg:hidden' onClick={handleMenuClick}>
                <RxHamburgerMenu className={showMenu ? "h-0 w-0" : ""} />
                <RxCross2 className={showMenu ? "" : "h-0 w-0"}/>
            </div>
        </div>
        <Mobile_Menu className="lg:hidden" showMenu={showMenu} />
    </header>
  )
}

export default Header
