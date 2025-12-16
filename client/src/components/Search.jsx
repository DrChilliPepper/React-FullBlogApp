import React from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

const Search = () => {
    const location = useLocation
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            const query = e.target.value;
            if (location.pathname === '/posts') {
                setSearchParams({ ...Object.fromEntries(searchParams), search: query })
            } else {
                navigate(`/posts?search=${query}`)
            }
        }
    }
    return (
        <div className='bg-[rgb(41,41,41)] p-2 rounded-full flex items-center gap-2 border border-white'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='20'
                height='20'
                fill='none'
                stroke='white'
            >
                <circle cx='10.5' cy='10.5' r='7.5' />
                <line x1='16.5' y1='16.5' x2='22' y2='22' />
            </svg>
            <input type="text" placeholder='Search a post' className='bg-transparent' onKeyDown={handleKeyPress} />
        </div>
    )
}

export default Search
