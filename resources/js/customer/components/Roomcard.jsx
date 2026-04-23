import React from "react"

export default function RoomCard({
  image,
  title,
  details,
  location,
  price
}) {
  return (
    <div className="group">

      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={image}
          className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="mt-6">

        <h3 className="text-[22px] font-bold tracking-wide leading-snug">
          {title}
        </h3>

        <p className="text-sm font-bold tracking-widest text-zinc-800 mt-3 uppercase">
          {details}
        </p>

        <p className="text-md text-gray-600 mt-1 uppercase">
          {location}
        </p>

        <p className="text-[17px] mt-4 text-gray-700">
          Prices start at:
          <span className="underline ml-1">
            {price}
          </span>
        </p>

        <button className="mt-5 text-amber-600 tracking-widest text-lg font-bold hover:cursor-pointer">
          VIEW DETAILS
        </button>

      </div>

    </div>
  )
}