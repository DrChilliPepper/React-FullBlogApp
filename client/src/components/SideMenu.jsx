import React from 'react'
import Search from "./Search.jsx"
import { Link, useSearchParams } from 'react-router-dom'

const SideMenu = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const handleFilterChange = (e) => {
        if (searchParams.get("sort") !== e.target.value) {
            setSearchParams({
                ...Object.fromEntries(searchParams.entries()),
                sort: e.target.value
            })
        }
    }
    const handleCategoryChange = (category) => {
        if (searchParams.get("cat") !== category) {
            setSearchParams({
                ...Object.fromEntries(searchParams.entries()),
                cat: category
            })
        }
    }


    return (
        <div className='px-4 h-max sticky top-8'>
            <h1 className='mb-4 text-sm font-medium'>
                <Search />
            </h1>
            <h1 className='mt-4 mb-4 text-sm font-medium'>
                Filter
            </h1>
            <div className='flex flex-col gap-2 text-sm'>
                <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                    <input type="radio" name="sort" onChange={handleFilterChange} value="newest" className='appearance-none w-4 h-4 border-[1.5px] border-red-500 cursor-pointer rounded-sm checked:bg-red-500 shadow-md' />
                    Newest
                </label>
                <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                    <input type="radio" name="sort" onChange={handleFilterChange} value="popular" className='appearance-none w-4 h-4 border-[1.5px] border-red-500 cursor-pointer rounded-sm checked:bg-red-500 shadow-md' />
                    Most Popular
                </label>
                <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                    <input type="radio" name="sort" onChange={handleFilterChange} value="trending" className='appearance-none w-4 h-4 border-[1.5px] border-red-500 cursor-pointer rounded-sm checked:bg-red-500 shadow-md' />
                    Trending
                </label>
                <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                    <input type="radio" name="sort" onChange={handleFilterChange} value="oldest" className='appearance-none w-4 h-4 border-[1.5px] border-red-500 cursor-pointer rounded-sm checked:bg-red-500 shadow-md' />
                    Oldest
                </label>
            </div>
            <h1 className='mt-4 mb-4 text-sm font-medium'>
                Categories
            </h1>
            <div className='flex flex-col gap-4 text-sm'>
                <span className='underline cursor-pointer' onClick={() => handleCategoryChange("general")}>All</span>
                <span className='underline cursor-pointer' onClick={() => handleCategoryChange("web-design")}>Web Design</span>
                <span className='underline cursor-pointer' onClick={() => handleCategoryChange("development")}>Development</span>
                <span className='underline cursor-pointer' onClick={() => handleCategoryChange("piracy-talks")}>Piracy</span>
                <span className='underline cursor-pointer' onClick={() => handleCategoryChange("brainrot")}>Brainrot</span>
                <span className='underline cursor-pointer' onClick={() => handleCategoryChange("marketing")}>Marketing</span>
            </div>
        </div>
    )
}

export default SideMenu
