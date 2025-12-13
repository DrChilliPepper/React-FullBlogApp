import React from 'react'
import { Link } from 'react-router-dom'
import MainCategories from '../components/MainCategories.jsx'
import FeaturedPosts from '../components/FeaturedPosts.jsx'
import PostList from '../components/PostList.jsx'

const Homepage = () => {
    return (
        <div className='mt-4 flex flex-col gap-4'>
            {/*BREADCRUMB*/}
            <div className='flex gap-4'>
                <Link to="/">Home</Link>
                <span>•</span>
                <span className='text-white'>
                    Articles and Posts
                </span>
            </div>
            {/*INTRODUCTION*/}
            <div className='flex items-center justify-between'>
                {/* titles */}
                <div className=''>
                    <h1 className='text-2xl md:text-5xl lg:text-6xl font-bold'>
                        Sample text keklet lmao
                    </h1>
                    <p className='mt-8 text-md md:text-xl'>
                        Sample para lmao kek
                    </p>
                </div>
                {/**Animated Buttons */}
                <Link to="write" className='hidden md:block relative'>
                    <svg
                        viewBox="0 0 200 200"
                        width="200"
                        height="200"
                        className='text-lg tracking-widest'
                    >
                        <path
                            id="circlePath"
                            fill='none'
                            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                        />
                        <text className='fill-white'>
                            <textPath href='#circlePath' startOffset="0%">
                                Write your story
                            </textPath>
                            <textPath href='#circlePath' startOffset="50%">
                                Share experience
                            </textPath>
                        </text>
                    </svg>
                    <button className='absolute top-0 left-0 right-0 m-auto w-20 h-20 bottom-0 bg-white rounded-full flex items-center justify-center'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width="50"
                            height="50"
                            fill='none'
                            stroke='gray'
                            strokeWidth="2"
                        >
                            <line x1="6" y1="18" x2="18" y2="6" />
                            <polyline points="9 6 18 6 18 15" />
                        </svg>
                    </button>
                </Link>
            </div>
            {/**CATEGORIES */}
            <MainCategories />
            {/*FEATURED*/}
            <FeaturedPosts />
            {/*POSTLIST*/}
            <div>
                <h1 className='my-8 text-2xl text-white'>Recent Posts</h1>
                <PostList />
            </div>
        </div>
    )
}

export default Homepage
