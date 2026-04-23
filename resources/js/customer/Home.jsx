import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Caraousel from './components/Caraousel'
import heroImage from './assets/caraousel2.png'
import teamImg from "./assets/caraousel3.png"
import villaImg from "./assets/caraousel4.png"
import serviceImg from "./assets/caraousel5.png"
import 'remixicon/fonts/remixicon.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

function Home() {

    const data = [
        {
            title: "DEDICATED AND FRIENDLY TEAM",
            desc: "The Young Villas team is dedicated to making your vacation run as smoothly as possible. Leave the stress with us and enjoy your tailor-made experience.",
            img: teamImg
        },
        {
            title: "BREATHTAKING PROPERTIES",
            desc: "We pride ourselves on providing clean and comfortable modern villas that meet the highest quality requirements.",
            img: villaImg
        },
        {
            title: "EXCLUSIVE SERVICES",
            desc: "Our team will make sure you have everything for your stay including private massages, scooter rentals, and floating breakfasts.",
            img: serviceImg
        }
    ]

    return (
        <>
            <section id='hero' className="relative w-full h-[625px] mb-12">

                <img
                    src={heroImage}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Villa"
                />
                <div className="absolute inset-0 bg-black/50"></div>

                <Navbar />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">

                    <p className="tracking-[0.3em] text-xs md:text-xl mb-4 font-bold">
                        DISCOVER
                    </p>

                    <h1 className="
          font-serif
          text-3xl
          sm:text-4xl
          md:text-6xl
          lg:text-7xl
          font-light
        ">
                        Tropical Modern Bali Villas
                    </h1>
                </div>
            </section>

            <section>
                <div className='wrapper'>
                    <p className="tracking-widest text-xl md:text- font-bold text-amber-600 text-center">
                        BROWSE
                    </p>
                    <p className="tracking-normal text-2xl md:text-4xl mb-4 font-semibold text-zinc text-center">
                        Our Villas
                    </p>

                </div>
                <Caraousel />
            </section>

            <div className="grid md:grid-cols-2 items-center mt-8">

                {/* LEFT - IMAGE */}
                <div className="w-full h-[400px] overflow-hidden shadow-lg">
                    <img
                        src={heroImage}
                        alt="Villa"
                        className="w-full h-full object-cover hover:scale-110 transition duration-500"
                    />
                </div>

                {/* RIGHT - TEXT */}
                <div className="text-justify items-center px-[10%]">
                    <h2 className="text-3xl font-semibold my-4 ">
                        Experience the Beauty of Bali
                    </h2>

                    <p className="text-gray-600 mb-6 leading-sm mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quod dicta veniam aliquid nisi a iusto voluptates neque, sunt ducimus reiciendis eum eligendi sequi officia autem aperiam totam. Perspiciatis voluptatibus asperiores nemo non perferendis sapiente.
                    </p>

                    <p className="text-gray-600 mb-6 leading-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, perferendis modi vero doloremque quidem voluptatum harum voluptate sunt iusto id odio in, facilis culpa, sequi inventore non provident ut explicabo?
                    </p>

                    {/* CTA */}
                    <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition">
                        Explore Rooms
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 items-center mt-12">
                <div className="text-justify items-center px-[10%] order-2 md:order-1">
                    <h2 className="text-3xl font-semibold my-4 ">
                        Experience the Beauty of Bali
                    </h2>

                    <p className="text-gray-600 mb-6 leading-sm mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quod dicta veniam aliquid nisi a iusto voluptates neque, sunt ducimus reiciendis eum eligendi sequi officia autem aperiam totam. Perspiciatis voluptatibus asperiores nemo non perferendis sapiente.
                    </p>

                    <p className="text-gray-600 mb-6 leading-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, perferendis modi vero doloremque quidem voluptatum harum voluptate sunt iusto id odio in, facilis culpa, sequi inventore non provident ut explicabo?
                    </p>

                    {/* CTA */}
                    <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition">
                        Explore Rooms
                    </button>
                </div>

                <div className="w-full h-[400px] overflow-hidden shadow-lg mt-10 order-1 md:order-2">
                    <img
                        src={heroImage}
                        alt="Villa"
                        className="w-full h-full object-cover hover:scale-110 transition duration-500"
                    />
                </div>
            </div>

            <section className="py-20 px-[5%] md:px-[10%] bg-neutral-100 text-center justify-center items-center">

            <div className="grid md:grid-cols-3 gap-8">

                {data.map((item, index) => (
                    <div
            key={index}
            className={`
                items-center bg-white rounded-t-[200px] rounded-b-2xl shadow-lg overflow-hidden group
                hover:-translate-y-2 transition duration-300 mx-auto max-w-[280px] mb-auto
                
                ${index === 1 ? "md:mt-[50%]" : ""}
                ${index === 2 ? "md:mt-[100%]" : ""}
            `}
        >

                        {/* IMAGE */}
                        <div className="h-[260px] overflow-hidden">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="p-6 text-center">
                            <h3 className="text-sm tracking-wider font-semibold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-justify text-gray-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>

                    </div>
                ))}

            </div>

        </section>

            <div className='wrapper md:w-full px-[5%] pt-12'>
                <div className='wrapper mb-6'>
                    <p className="tracking-widest text-xl md:text- font-bold text-amber-600 text-center">
                        FOLLOW US
                    </p>
                    <p className="tracking-normal text-2xl md:text-4xl mb-4 font-semibold text-zinc text-center">
                        Our Instagram
                    </p>

                </div>
                <script src="https://elfsightcdn.com/platform.js" async></script>
                <div class="elfsight-app-8871202f-4aac-4f6f-8930-b03dd84dbf51" data-elfsight-app-lazy></div>
            </div>

            <div className='wrapper md:w-full px-[5%] pt-12'>
                <div className='wrapper mb-2'>
                    <p className="tracking-wide text-xl md:text- font-bold text-amber-600 text-center">
                        What Our Customers Say
                    </p>
                    <p className="tracking-normal text-2xl md:text-4xl font-semibold text-zinc text-center">
                        On Google
                    </p>
                </div>
                <script src="https://elfsightcdn.com/platform.js" async></script>
                <div class="elfsight-app-e2b45866-6216-4796-b838-bee3518da18c" data-elfsight-app-lazy></div>
            </div>

        </>

    )
}

export default Home;