import React from 'react'

export default function Mobile_Menu({showMenu}) {
  return (
    <div className={showMenu ? "fixed translate-x-0 top-18 left-0 right-0 transition ease-out duration-700" :  "fixed translate-x-full top-18 left-0 right-0 transition ease-out duration-700"} >
        <ul className=' text-md font-bold bg-accent-400 text-primary  pt-6 pl-7'>
            <li className='border-b border-neutral-300 py-5'>LOG IN</li>
            <li className='border-b border-neutral-300 py-5'>
                PRODUCT
                <ul className='text-md font-semibold border-l border-neutral-300 pl-4'>
                    <li className='py-3'>Stark for Figma</li>
                    <li className='py-3'>Stark for FigJam</li>
                    <li className='py-3'>Stark for Sketch</li>
                    <li className='py-3'>Stark for Chrome</li>
                    <li className='py-3'>Stark for Firefox</li>
                    <li className='py-3'>Stark for Edge</li>
                    <li className='py-3'>Stark for Safari</li>
                    <li className='py-3'>Stark for Arc</li>
                    <li className='py-3'>Stark for Brave</li>
                </ul>
            </li>
            <li className='border-b border-neutral-300 py-5'>PRICING</li>
            <li className='border-b border-neutral-300 py-5'>BLOG</li>
            <li className='border-b border-neutral-300 py-5'>LIBRARY</li>
            <li className='border-b border-neutral-300 py-5'>SUPPORT</li>
        </ul>
    </div>
  )
}
