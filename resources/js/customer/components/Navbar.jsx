import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import LogoWhite from '../assets/logokejora.png'
import LogoDark from '../assets/kejora.png'

export default function Navbar() {

    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const location = useLocation()
    const isHome = location.pathname === "/"

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 600)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navbarWhite = scrolled || !isHome

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-20 transition-all duration-300
            ${navbarWhite
                    ? "bg-white shadow-md translate-y-0"
                    : "bg-transparent md:-translate-y-full md:translate-y-0"
                }
        `}
        >

            <div className="flex items-center justify-between px-6 md:px-16 py-4">

                {/* LOGO */}
                <Link to="/" className="p-2">
                    <img
                        src={navbarWhite ? LogoDark : LogoWhite}
                        className="w-50 transition-all duration-300"
                    />
                </Link>

                <div className="flex items-center gap-6 ml-auto">

                    {/* DESKTOP MENU */}
                    <nav className="hidden md:flex items-center gap-8 tracking-widest font-semibold">

                        <Link
                            to="/"
                            className={`transition-colors duration-300 hover:text-amber-600 ${navbarWhite ? "text-black" : "text-white"}`}
                        >
                            Home
                        </Link>

                        <a
                            href="/about"
                            className={`transition-colors duration-300 ${navbarWhite ? "text-black" : "text-white"}`}
                        >
                            About
                        </a>

                        <Link
                            to="/rooms"
                            className={`transition-colors duration-300 ${navbarWhite ? "text-black" : "text-white"}`}
                        >
                            Rooms
                        </Link>

                        <a
                            href="/contact"
                            className={`transition-colors duration-300 ${navbarWhite ? "text-black" : "text-white"}`}
                        >
                            Contact
                        </a>

                        <a href="#book">
                            <button className="bg-amber-600 font-semibold text-white px-5 h-10 rounded-lg cursor-pointer">
                                Book Now
                            </button>
                        </a>

                    </nav>
                </div>

                {/* MOBILE BUTTON */}
                <button
                    onClick={() => setOpen(prev => !prev)}
                    className={`md:hidden relative w-8 h-8 flex items-center justify-center 
  transition-colors duration-300
  ${navbarWhite ? "text-black" : "text-white"}
  `}
                >
                    {/* TOP */}
                    <span
                        className={`absolute w-6 h-[2px] bg-current origin-center transform transition-all duration-300
    ${open ? "rotate-45" : "-translate-y-2"}
    `}
                    />

                    {/* MIDDLE */}
                    <span
                        className={`absolute w-6 h-[2px] bg-current transition-all duration-300
    ${open ? "opacity-0" : "opacity-100"}
    `}
                    />

                    {/* BOTTOM */}
                    <span
                        className={`absolute w-6 h-[2px] bg-current origin-center transform transition-all duration-300
    ${open ? "-rotate-45" : "translate-y-2"}
    `}
                    />
                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="flex flex-col gap-4 px-6 pb-6 font-bold bg-white dark:bg-white text-black dark:text-black py-5">
                    <Link onClick={() => setOpen(false)} to="/">
                        Home
                    </Link>

                    <a onClick={() => setOpen(false)} href="#about">
                        About
                    </a>

                    <Link onClick={() => setOpen(false)} to="/rooms">
                        Rooms
                    </Link>

                    <a onClick={() => setOpen(false)} href="#contact">
                        Contact
                    </a>

                </nav>
            </div>

        </nav>
    )
}