import React from 'react'
import Image from './Image.jsx'
import { Link } from 'react-router-dom'

const FeaturedPosts = () => {
    return (
        <div className='mt-8 flex flex-col lg:flex-row gap-8'>
            {/**First posts */}
            <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                {/**image */}
                <Image src="featured1.jpeg" className='rounded-3xl object-cover' />
                {/**details */}
                <div className='flex items-center gap-4'>
                    <h1 className='font-semibold lg:text-lg'>01.</h1>
                    <Link className='text-[rgba(255,119,119,1)] lg:text-lg'>Web Design</Link>
                    <span className='text-white'>2 days ago</span>
                </div>
                {/**title */}
                <Link to='/test' className='text-xl lg:text-3xl font-semibold lg:font-bold'>Sample title</Link>
            </div>
            {/**Others */}
            <div className='w-full lg:w-1/2 flex flex-col gap-4 aspect-video'>
                {/**Second */}
                <div className='lg:h-1/3 flex justify-between gap-4'>
                    <Image src='featured2.jpeg' className='rounded-3xl object-cover w-1/3' />
                    {/**details and title */}
                    <div className='w-2/3'>
                        {/**details */}
                        <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                            <h1 className='font-semibold'>02.</h1>
                            <Link to='/test' className='text-[rgba(255,119,119,1)]'>Web Design</Link>
                            <span className='text-white text-sm'>2 daysago</span>
                        </div>
                        {/**title */}
                        <Link to='/test' className='text-base sm:text-lg md:text-2xl lg:test-xl xl:text-2xl font-medium'>Sample title</Link>
                    </div>
                </div>
                {/*third */}
                <div className='lg:h-1/3 flex justify-between gap-4'>
                    <Image src='featured2.jpeg' className='rounded-3xl object-cover w-1/3' />
                    {/**details and title */}
                    <div className='w-2/3'>
                        {/**details */}
                        <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                            <h1 className='font-semibold'>02.</h1>
                            <Link to='/test' className='text-[rgba(255,119,119,1)]'>Web Design</Link>
                            <span className='text-white text-sm'>2 daysago</span>
                        </div>
                        {/**title */}
                        <Link to='/test' className='text-base sm:text-lg md:text-2xl lg:test-xl xl:text-2xl font-medium'>Sample title</Link>
                    </div>
                </div>
                {/*fourth*/}
                <div className='lg:h-1/3 flex justify-between gap-4'>
                    <Image src='featured2.jpeg' className='rounded-3xl object-cover w-1/3' />
                    {/**details and title */}
                    <div className='w-2/3'>
                        {/**details */}
                        <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                            <h1 className='font-semibold'>02.</h1>
                            <Link to='/test' className='text-[rgba(255,119,119,1)]'>Web Design</Link>
                            <span className='text-white text-sm'>2 daysago</span>
                        </div>
                        {/**title */}
                        <Link to='/test' className='text-base sm:text-lg md:text-2xl lg:test-xl xl:text-2xl font-medium'>Sample title</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPosts
