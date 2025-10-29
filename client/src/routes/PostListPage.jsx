import React from 'react'
import PostList from "../components/PostList.jsx"
import SideMenu from "../components/SideMenu.jsx"
import { useState } from 'react'

const PostListPage = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className=''>
            <h1 className='mb-8 text-2xl'>Development Blog</h1>
            <button onClick={() => setOpen(prev => !prev)} className='md:hidden bg-[rgba(255,119,119,1)] text-sm text-white px-4 py-2 rounded-2xl mb-4'>{open ? "Close" : "Filter or Search"}</button>
            <div className='flex gap-8 flex flex-col-reverse md:flex-row'>
                <div className=''>
                    <PostList />
                </div>
                <div className={`${open ? "block" : "hidden"} md:block`}>
                    < SideMenu />
                </div>
            </div>
        </div >
    )
}

export default PostListPage
