import React from 'react'
import Cards from './Cards'
import Image from 'next/image'
function Container() {
  return (
    <div>
      <section>
      <header className='pb-7'>
        <div className='flex justify-between items-center'>
            <h1 className='text-header-800 font-header-fw-900 text-header-clr'>New in the Library</h1>
            <a href="#" className='text-primary font-semibold underline font-robotomono'>VIEW ALL</a>
        </div>
        <p className='text-lg text-header-clr/80 font-semibold'>Newly added accessibility resources, guides, and more.</p>
      </header>
      <main className='grid grid-col-1 gap-8 lg:grid-cols-3'>
        <Cards icon={"https://res.cloudinary.com/stark-lab/image/upload/v1679345736/uni_profile_93228_9c84b19231.jpg"} link="#" title={"Making Accessible Books"} />
        <Cards icon={"https://res.cloudinary.com/stark-lab/image/upload/v1679345547/daisy_high_e2e14faca3.jpg"} link="#" title={"Making Accessible Books"} />
        <Cards icon={"https://res.cloudinary.com/stark-lab/image/upload/v1679345736/uni_profile_93228_9c84b19231.jpg"} link="#" title={"Making Accessible Books"} />
        <Cards icon={"https://res.cloudinary.com/stark-lab/image/upload/v1679345736/uni_profile_93228_9c84b19231.jpg"} link="#" title={"Making Accessible Books"} />
        <Cards icon={"https://res.cloudinary.com/stark-lab/image/upload/v1679345736/uni_profile_93228_9c84b19231.jpg"} link="#" title={"Making Accessible Books"} />
        <Cards icon={"https://res.cloudinary.com/stark-lab/image/upload/v1679345736/uni_profile_93228_9c84b19231.jpg"} link="#" title={"Making Accessible Books"} />
      </main>
      </section>
     <section>
      <header className='pb-7'>
          <div className='flex justify-between items-center'>
              <h1 className='text-header-800 font-header-fw-900 text-header-clr'>Featured Collections</h1>
              <a href="#" className='text-primary font-semibold underline font-robotomono'>VIEW ALL</a>
          </div>
          <p className='text-lg text-header-clr/80 font-semibold'>Handpicked and curated collections around accessibility.</p>
        </header>
        <div className='flex justify-between md:columns-2 lg:columns-3'>
        <a className='relative block w-64 rounded-md'>
          <p className='font-semibold text-2xl text-header-clr px-7 pt-10 pb-12'>Disability Employment</p>
        <img
        className='absolute top-0 left-0 -z-10'
        src={"https://res.cloudinary.com/stark-lab/image/upload/v1653845742/library_collection_Collection_Boundless_Disability_Employment_c297d236d9.png"}
        />
        </a>
        <a className='block w-64 h-fit  bg-accent-500 rounded-md'>
          <p className='font-semibold text-2xl  text-header-clr px-7 pt-8 pb-2'>Making Accessible Color Combos</p>
        <img
        src={"https://res.cloudinary.com/stark-lab/image/upload/v1653845743/library_collection_making_accessible_color_combos_42c8d90a99.png"}
        />
        </a>
        <a className='block w-64  bg-accent-400 rounded-md'>
          <p className='font-semibold text-2xl text-header-clr px-7 pt-8 pb-2'>Making Accessible Color Combos</p>
        <img
        src={"https://res.cloudinary.com/stark-lab/image/upload/v1653845743/library_collection_Inclusive_Social_Media_b9669e6d39.png"}
        />
        </a>
        </div>
     </section>
    </div>
  )
}

export default Container
