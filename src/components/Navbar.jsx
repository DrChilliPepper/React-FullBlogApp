import React, { useState } from 'react'
import { IKImage } from 'imagekitio-react'
import Image from "./Image"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='w-full h-16 md:h-20 flex items-center justify-between'>
            {/*LOGO*/}
            <Link to="/" className='flex items-center gap-4 text-2xl font-bold'>
                <Image src="logo.png" alt="Blog logo" w={32} h={32} />
                <span>Shulog</span>
            </Link>
            {/*Mobile Menu*/}
            <div className='md:hidden'>
                {/*MOBILE BUTTON*/}
                <div className='cursor-pointer text-3xl' onClick={() => setOpen((prev) => !prev)}>
                    {open ? "X" : "☰"}
                </div>
                {/*Mobile link list*/}
                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 ${open ? "-right-0" : "-right-[100%]"} transition-all ease-in-out bg-[rgba(68,68,68,1)]`}>
                    <Link to="/">Home</Link>
                    <Link to="/">Trending</Link>
                    <Link to="/">Most Popular</Link>
                    <Link to="/">About</Link>
                    <a href="">
                        <button className='py-2 px-4 rounded-3xl bg-white text-black'>
                            Login
                        </button>
                    </a>
                </div>
            </div>
            {/*Desltop Menu*/}
            <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
                <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most Popular</Link>
                <Link to="/">About</Link>
                <a href="">
                    <button className='py-2 px-4 rounded-3xl bg-white text-black'>
                        Login
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Navbar
