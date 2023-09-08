import React from 'react'
import {BiSolidDownArrow} from "react-icons/bi"
export default function Desktop_Menu() {
  return (
    <div className="hidden lg:block">
        <ul className='flex text-header-200 font-bold text-primary px-10'>
            <li className=' order-10 border-2 border-transparent  hover:border-primary cursor-pointer py-1 px-2 mx-3 rounded-md transition duration-100'>LOG IN</li>
            <li className='relative show_sub_menu flex items-center border-2 border-transparent  hover:border-primary cursor-pointer py-1 px-2 mx-3 rounded-md transition duration-100'>
                PRODUCT
                <div className='text-xs pl-1'><BiSolidDownArrow /></div>
                <ul className='absolute w-60 -top-1 -left-1 bg-white py-3 rounded-md shadow-md'>
                    <li className='py-1 pl-3 hover:bg-primary-hover'>Stark for Figma</li>
                    <li className='py-1 pl-3 hover:bg-primary-hover'>Stark for FigJam</li>
                    <li className='py-1 pl-3 hover:bg-primary-hover'>Stark for Sketch</li>
                    <li className='py-1 pl-3 hover:bg-primary-hover'>Stark for Chrome</li>
                    <li className='py-1 pl-3 hover:bg-primary-hover'>Stark for Firefox</li>
                    <li className='py-1 pl-3 hover:bg-primary-hover'>Stark for Edge</li>
                    <li className='py-1 pl-3 hover:bg-primary-hover'>Stark for Safari</li>
                    <li className='py-1 pl-3 hover:bg-primary-hover'>Stark for Arc</li>
                    <li className='py-1 pl-3 hover:bg-primary-hover'>Stark for Brave</li>
                </ul>
            </li>
            <li className='border-2 border-transparent  hover:border-primary cursor-pointer py-1 px-2 mx-3 rounded-md transition duration-100'>PRICING</li>
            <li className='border-2 border-transparent  hover:border-primary cursor-pointer py-1 px-2 mx-3 rounded-md transition duration-100'>BLOG</li>
            <li className='border-2 border-transparent  hover:border-primary cursor-pointer py-1 px-2 mx-3 rounded-md transition duration-100'>LIBRARY</li>
            <li className='order-1 border-2 border-transparent  hover:border-primary cursor-pointer py-1 px-2 mx-3 rounded-md transition duration-100'>SUPPORT</li>
        </ul>
    </div>
  )
}
