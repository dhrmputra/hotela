import { useState, useEffect } from 'react'
import content1 from './assets/caraousel2.png'
import content2 from './assets/caraousel3.png'
import 'remixicon/fonts/remixicon.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

export default function About() {
    return (
        <section className="pt-28 m-auto">

            {/* Breadcrumb */}
            <span className="flex items-center text-lg px-[10%]">
                <h1 className="text-amber-600 font-semibold">Home</h1>
                <i className="ri-arrow-right-double-line mt-1 px-1"></i>
                About
            </span>

            {/* Title */}
            <h1 className="md:text-5xl text-3xl font-semibold text-center mt-10">
                About Us
            </h1>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 items-center mt-10">

                {/* LEFT - IMAGE */}
                <div className="w-full h-[400px] overflow-hidden shadow-lg">
                    <img
                        src={content1}
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
                        src={content2}
                        alt="Villa"
                        className="w-full h-full object-cover hover:scale-110 transition duration-500"
                    />
                </div>
            </div>

            {/* FEATURES */}
            <div className="grid md:grid-cols-3 gap-8 mt-20 px-[10%]">

                <div className="p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                    <i className="ri-hotel-line text-4xl text-amber-600 mb-3"></i>
                    <h3 className="font-semibold text-xl mb-2">Luxury Rooms</h3>
                    <p className="text-gray-500">
                        Kamar nyaman dengan fasilitas modern dan desain elegan.
                    </p>
                </div>

                <div className="p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                    <i className="ri-map-pin-line text-4xl text-amber-600 mb-3"></i>
                    <h3 className="font-semibold text-xl mb-2">Strategic Location</h3>
                    <p className="text-gray-500">
                        Dekat dengan pantai Sanur, restoran, dan destinasi wisata populer.
                    </p>
                </div>

                <div className="p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                    <i className="ri-customer-service-2-line text-4xl text-amber-600 mb-3"></i>
                    <h3 className="font-semibold text-xl mb-2">Best Service</h3>
                    <p className="text-gray-500">
                        Pelayanan ramah dan profesional selama Anda menginap.
                    </p>
                </div>

            </div>

        </section>
    )
}