import React from 'react'
import Image from '../components/Image.jsx'
import { Link } from 'react-router-dom'
import PostMenuActions from "../components/PostMenuActions.jsx"
import Search from "../components/Search.jsx"
import Comments from '../components/Comments.jsx'
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useParams } from 'react-router-dom'
import DOMPurify from 'dompurify'
import { format } from "timeago.js"

const fetchPost = async (slug) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
    return res.data;
}

const SinglePostPage = () => {

    const { slug } = useParams();
    const { isPending, error, data } = useQuery({
        queryKey: ["post", slug],
        queryFn: () => fetchPost(slug),
        enabled: !!slug
    });
    if (isPending) return "Loading..."
    if (error) return "Something went wrong..." + error.message
    if (!data) return "Post not found!";

    return (
        <div className='flex flex-col gap-8'>
            {/**details*/}
            <div className='flex gap-8'>
                <div className='lg:w-3/5 flex flex-col gap-8'>
                    <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>
                        {data.title}
                    </h1>
                    <div className='flex items-center gap-2 text-white text-sm'>
                        <span>
                            Written by
                        </span>
                        <Link className='text-[rgba(255,119,119,1)] '>{data.user.username}</Link>
                        <span>on</span>
                        <Link>{data.category}</Link>
                        <span>{format(data.createdAt)}</span>
                    </div>
                    <p className='text-white font-medium'>
                        {data.desc}
                    </p>
                </div>
                {data.img && <div className='hidden lg:block w-2/5'>
                    <Image src={data.img} w="600" className="rounded-2xl" />
                </div>}
            </div>
            {/**Content */}
            <div className='flex flex-col md:flex-row gap-12 justify-between'>
                {/**text */}
                <div className='lg:text-lg flex flex-col gap-6 text-justify' dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data.content)
                }} />
                {/**menu */}
                <div className='px-4 h-max sticky top-8'>
                    <h1 className='mb-4 text-sm font-medium'>
                        Author
                    </h1>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-8'>
                            {data.user.img && (
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={data.user.img}
                                        className="w-full h-full object-cover"
                                        w="48"
                                        h="48"
                                    />
                                </div>
                            )}
                            <Link className='text-[rgba(255,119,119,1)]'>{data.user.username}</Link>
                        </div>
                        <p className='text-sm text-white'>
                            User description be like sameple txext
                        </p>
                        <div className='flex gap-2'>
                            <Link><Image src="facebook.svg" /></Link>
                            <Link><Image src="instagram.svg" /></Link>
                        </div>
                    </div>
                    <PostMenuActions post={data} />
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
            <Comments postId={data._id} />
        </div>
    )
}

export default SinglePostPage
