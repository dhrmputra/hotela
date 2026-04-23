import { useState, useEffect } from "react"

import slide1 from "../assets/caraousel1.png"
import slide2 from "../assets/caraousel2.png"
import slide3 from "../assets/caraousel3.png"
import slide4 from "../assets/caraousel4.png"
import slide5 from "../assets/caraousel5.png"

const images = [slide1, slide2, slide3, slide4, slide5]

export default function Carousel() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[420px] sm:h-[500px] md:h-[500px] overflow-hidden mt-12">

      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-full flex-shrink-0 object-cover"
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
        
        {/* CONTENT */}
        <div className="
          w-full
          px-6
          text-center
          md:text-left
          md:pl-[10%]
          md:w-[60%]
          text-white
        ">

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Welcome to Hotela
          </h1>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Lepaskan penat dan manjakan diri Anda di TheVillas.
            Dirancang dengan perpaduan desain modern dan unsur alam,
            kami menawarkan pengalaman menginap yang privat,
            tenang, dan tak terlupakan.
          </p>

          <button className="mt-5 bg-amber-700 font-semibold text-sm md:text-base px-5 py-2 md:px-6 md:py-3 rounded-lg hover:bg-amber-600 transition">
            Book Now
          </button>
        </div>
      </div>

      {/* Prev */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 md:p-3 rounded-full hover:bg-black/60 transition"
      >
        ❮
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 md:p-3 rounded-full hover:bg-black/60 transition"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}