import React from 'react'
import { Link } from 'react-router-dom'
import Image from './Image.jsx'

const PostListItem = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8">
            {/**Image */}
            <div className="md:hidden xl:block xl:w-1/3">
                <Image src="postImg.jpeg" className="rounded-2xl object-cover" w="735" />
            </div>
            {/**details */}
            <div className='flex flex-col gap-4 xl:w-2/3'>
                <Link to="/test" className="text-4xl font-semibold">Sample title</Link>
                <div className="flex items-center gap-2 text-white text-sm">
                    <span>Written by</span>
                    <Link className="text-[rgba(255,119,119,1)]">Shuchith</Link>
                    <span>on</span>
                    <Link className='text-[rgba(255,119,119,1)]'>Web Design</Link>
                    <span>2 days ago</span>
                </div>
                <p>
                    Same detail summary
                </p>
                <Link to="/test" className='underline text-[rgba(255,119,119,1)] text-sm'>Read More</Link>
            </div>
        </div>
    )
}

export default PostListItem
