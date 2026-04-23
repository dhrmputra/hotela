import React from "react";
import LogoWhite from "../assets/logokejora.png";

export default function Footer() {
    return (
        <footer className="mt-28 w-full bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 transition-colors duration-300">

            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

                {/* LOGO */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <img
                        src={LogoWhite}
                        alt="Logo"
                        className="w-32 mb-4"
                    />
                    <p className="text-base text-neutral-600 dark:text-neutral-400">
                        Jl. Danau Tamblingan, Sanur, Bali <br />
                        Tel:+62 888-09992055 <br />
                        +62 (0) 361 472 1699 Office hours <br />
                        E-mail: bookings@starvillasbali.com <br />
                    </p>
                </div>

                {/* MENU */}
                <div className="text-center md:text-left">
                    <h1 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-white">
                        Menu
                    </h1>
                    <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 ">
                        <li><a href="#hero" className="text-white font-semibold hover:text-amber-600">Home</a></li>
                        <li><a href="#about" className="text-white font-semibold hover:text-amber-600">About</a></li>
                        <li><a href="#rooms" className="text-white font-semibold hover:text-amber-600">Rooms</a></li>
                        <li><a href="#contact" className="text-white font-semibold hover:text-amber-600">Contact</a></li>
                    </ul>
                </div>

                {/* SOCIAL */}
                <div className="text-center md:text-left">
                    <h1 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-white">
                        Follow Us
                    </h1>
                    <div className="flex justify-center md:justify-start gap-5 text-3xl text-neutral-600 dark:text-neutral-400">
                        <a href="https://github.com/dhrmputra" target="_blank" rel="noopener noreferrer" className="nav-link">
                            <i className="ri-github-fill"></i>
                        </a>
                        <a href="https://instagram.com/dhrmputra" target="_blank" rel="noopener noreferrer" className="nav-link">
                            <i className="ri-instagram-fill"></i>
                        </a>
                        <a href="https://linkedin.com/in/dhrmputra" target="_blank" rel="noopener noreferrer" className="nav-link">
                            <i className="ri-linkedin-fill"></i>
                        </a>
                        <a href="https://wa.me/628993102710" target="_blank" rel="noopener noreferrer" className="nav-link">
                            <i className="ri-whatsapp-fill"></i>
                        </a>
                    </div>
                </div>

            </div>

            {/* COPYRIGHT */}
            <div className="text-center text-sm py-4 border-t border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400">
                © {new Date().getFullYear()} Dharma. All rights reserved.
            </div>
        </footer>
    );
}