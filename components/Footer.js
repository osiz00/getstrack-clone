import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className='bg-neutral-900 text-white py-5 px-6 lg:px-16 pt-24 pb-20'>
     <div className="container">
        {/* footer header */}
        <div className='flex justify-between items-start pb-16'>
            <h1 className='text-4xl lg:text-5xl w-2/3 font-extrabold'>Made remotely with love by Stark Lab, Inc.</h1>
            <Image
            width={60}
            height={60}
            src='/images/footer-logo.svg'
            alt='logo'
            />
        </div>
        {/* footer main */}
        <div className='flex justify-between flex-wrap lg:pr-40'>
            <ul className='mb-10 mr-10'>
                <li className='font-semibold i mb-4'>PRODUCT</li>
                <li className='font-semibold mb-4'><a>Stack for Figma</a></li>
                <li className='font-semibold mb-4'><a>Stark for Figma</a></li>
                <li className='font-semibold mb-4'><a>Stark for Sketch</a></li>
                <li className='font-semibold mb-4'><a>Stark for Adobe XD</a></li>
                <li className='font-semibold mb-4'><a>Stark for Chrome</a></li>
                <li className='font-semibold mb-4'><a>Stark for Firefox</a></li>
                <li className='font-semibold mb-4'><a>Stark for Edge</a></li>
                <li className='font-semibold mb-4'><a>Stark for Safari</a></li>
                <li className='font-semibold mb-4'><a>Stark for Arc</a></li>
                <li className='font-semibold mb-4'><a>Stark for Brave</a></li>
            </ul>
            <ul className='mb-10 mr-10'>
                <li className='font-semibold i mb-4'>RESOURCES</li>
                <li className='font-semibold mb-4'><a>Blog</a></li>
                <li className='font-semibold mb-4'><a>Library</a></li>
                <li className='font-semibold mb-4'><a>Release Notes</a></li>
            </ul>
            <ul className='mb-10 mr-10'>
                <li className='font-semibold i mb-4'>HELP</li>
                <li className='font-semibold mb-4'><a>My Account</a></li>
                <li className='font-semibold mb-4'><a>Support Docs</a></li>
                <li className='font-semibold mb-4'><a>Contact Us</a></li>
                <li className='font-semibold mb-4'><a>Feature Requests</a></li>

            </ul>
            <ul className='mb-10 mr-10'>
                <li className='font-semibold i mb-4'>COMPANY</li>
                <li className='font-semibold mb-4'><a>Press Releases</a></li>
                <li className='font-semibold mb-4'><a>Privacy Policy</a></li>
                <li className='font-semibold mb-4'><a>Cookie Polciy</a></li>
                <li className='font-semibold mb-4'><a>Security Overview</a></li>
                <li className='font-semibold mb-4'><a>Status</a></li>
                <li className='font-semibold mb-4'><a>Terms of Service</a></li>
                <li className='font-semibold mb-4'><a>Code of Conduct</a></li>
            </ul>

        </div>
        {/* footer socials */}
        <section className='flex justify-between'>
            <ul className='flex gap-5'>
                <li>
                    <Image
                    className="hover:scale-125 cursor-pointer " 
                    src='https://images.getstark.co/marketing/social-media/twitter.png'
                    width={30}
                    height={40}
                    alt='twitter'
                    />
                </li>
                <li>
                    <Image
                    className="hover:scale-125 cursor-pointer " 
                    src='https://images.getstark.co/marketing/social-media/instagram.png'
                    width={30}
                    height={40}
                    alt='twitter'
                    />
                </li>
                <li>
                    <Image
                    className="hover:scale-125 cursor-pointer " 
                    src='https://images.getstark.co/marketing/social-media/slack.png'
                    width={30}
                    height={40}
                    alt='twitter'
                    />
                </li>
                <li>
                    <Image
                    className="hover:scale-125 cursor-pointer " 
                    src='https://images.getstark.co/marketing/social-media/share-linkedin.webp'
                    width={30}
                    height={40}
                    alt='twitter'
                    />
                </li>
                <li>
                    <Image
                    className="hover:scale-125 cursor-pointer " 
                    src='https://images.getstark.co/marketing/social-media/youtube.png'
                    width={30}
                    height={40}
                    alt='twitter'
                    />
                </li>
                <li>
                    <Image
                    className="hover:scale-125 cursor-pointer " 
                    src='https://images.getstark.co/marketing/social-media/dribbble.png'
                    width={30}
                    height={40}
                    alt='twitter'
                    />
                </li>
                <li>
                    <Image
                    className="hover:scale-125 cursor-pointer " 
                    src='https://images.getstark.co/marketing/social-media/meetup.png'
                    width={30}
                    height={40}
                    alt='twitter'
                    />
                </li>
            </ul>
            <p className='text-lg uppercase tracking-widest font-semibold text-clr-yellow'>
            Stark Lab, Inc. Copyright 2023
            </p>
        </section>
     </div>
    </footer>
  )
}

export default Footer
