import React from 'react'
import { Link } from 'react-router-dom'

const MainCategories = () => {
    return (
        <div className='hidden md:flex bg-[rgba(68,68,68,1)] rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8'>
            {/**Links */}
            <div className='flex-1 flex items-center justify-between flex-wrap'>
                <Link to="/posts" className='bg-[rgb(41,41,41)] text-white rounded-full px-4 py-2'>All posts</Link>
                <Link to="/posts?cat=web-design" className='hover:bg-[rgba(53,53,53,1)] text-white rounded-full px-4 py-2'>Web Design</Link>
                <Link to="/posts?cat=development" className='hover:bg-[rgba(53,53,53,1)] text-white rounded-full px-4 py-2'>Development</Link>
                <Link to="/posts?cat=databases" className='hover:bg-[rgba(53,53,53,1)] text-white rounded-full px-4 py-2'>Databases</Link>
                <Link to="/posts?cat=seo" className='hover:bg-[rgba(53,53,53,1)] text-white rounded-full px-4 py-2'>Search Engines</Link>
                <Link to="/posts?cat=marketing" className='hover:bg-[rgba(53,53,53,1)] text-white rounded-full px-4 py-2'>Marketing</Link>
            </div>
            {/**Search */}
            <div>
                Search
            </div>
        </div>
    )
}

export default MainCategories
