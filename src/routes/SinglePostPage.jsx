import React from 'react'
import Image from '../components/Image'
import { Link } from 'react-router-dom'
import PostMenuActions from "../components/PostMenuActions.jsx"
import Search from "../components/Search.jsx"
import Comments from '../components/Comments.jsx'
import Comment from '../components/Comment.jsx'

const SinglePostPage = () => {
    return (
        <div className='flex flex-col gap-8'>
            {/**details*/}
            <div className='flex gap-8'>
                <div className='lg:w-3/5 flex flex-col gap-8'>
                    <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>
                        Title sample
                    </h1>
                    <div className='flex items-center gap-2 text-white text-sm'>
                        <span>
                            Written by
                        </span>
                        <Link className='text-[rgba(255,119,119,1)] '>Shuchith</Link>
                        <span>on</span>
                        <Link>Web Design</Link>
                        <span>2 days ago</span>
                    </div>
                    <p className='text-white font-medium'>
                        Sampe paragraph summary
                    </p>
                </div>
                <div className='hidden lg:block w-2/5'>
                    <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
                </div>
            </div>
            {/**Content */}
            <div className='flex flex-col md:flex-row gap-12'>
                {/**text */}
                <div className='lg:text-lg flex flex-col gap-6 text-justify'>
                    <p>
                        Random text Random text Random text Random text Random text Random text Random text Random text Random text Random text Random text Random text Random text Random text Random text Random text Random text Random text Random text Random text Random text Random text
                    </p>
                    <p>
                        Random text be like aukghbakpjgdhbf;lsajghbal;jfghk;afjgha;fkjhgRandom text be like aukghbakpjgdhbf;lsajghbal;jfghk;afjgha;fkjhgRandom text be like aukghbakpjgdhbf;lsajghbal;jfghk;afjgha;fkjhgRandom text be like aukghbakpjgdhbf;lsajghbal;jfghk;afjgha;fkjhgRandom text be like aukghbakpjgdhbf;lsajghbal;jfghk;afjgha;fkjhgRandom text be like aukghbakpjgdhbf;lsajghbal;jfghk;afjgha;fkjhg
                    </p>
                    <p>
                        Random text be like aukghbakpjgdhbf;lsajghbal;jfghk;afjgha;fkjhgRandom text be like aukghbakpjgdhbf;lsajghbal;jfghk;afjgha;fkjhgRandom text be like aukghbakpjgdhbf;lsajghbal;jfghk;afjgha;fkjhgRandom text be like aukghbakpjgdhbf;lsajghbal;jfghk;afjgha;fkjhgRandom text be like aukghbakpjgdhbf;lsajghbal;jfghk;afjgha;fkjhgRandom text be like aukghbakpjgdhbf;lsajghbal;jfghk;afjgha;fkjhg
                    </p>
                </div>
                {/**menu */}
                <div className='px-4 h-max sticky top-8'>
                    <h1 className='mb-4 text-sm font-medium'>
                        Author
                    </h1>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-8'>
                            <Image src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover" w="48" h="48" />
                            <Link className='text-[rgba(255,119,119,1)]'>Shuchith</Link>
                        </div>
                        <p className='text-sm text-white'>
                            User description be like sameple txext
                        </p>
                        <div className='flex gap-2'>
                            <Link><Image src="facebook.svg" /></Link>
                            <Link><Image src="instagram.svg" /></Link>
                        </div>
                    </div>
                    <PostMenuActions />
                    <h1 className='mt-8 mb-4 text-sm font-medium'>
                        Categories
                    </h1>
                    <div className='flex flex-col gap-2 text-sm'>
                        <Link className='underline'>All</Link>
                        <Link className='underline' to="/">Web Design</Link>
                        <Link className='underline' to="/">Development</Link>
                        <Link className='underline' to="/">Databases</Link>
                        <Link className='underline' to="/">Search Engine</Link>
                        <Link className='underline' to="/">Marketing</Link>
                    </div>
                    <h1 className='mt-8 mb-4 text-sm font-medium'>
                        Search
                    </h1>
                    <Search />
                </div>
            </div>
            <Comments />
        </div>
    )
}

export default SinglePostPage
