import RoomCard from "../customer/components/Roomcard"

import room1 from "./assets/caraousel1.png"
import room2 from "./assets/caraousel2.png"
import room3 from "./assets/caraousel3.png"
import room4 from "./assets/caraousel4.png"
import room5 from "./assets/caraousel5.png"
import room6 from "./assets/kejora18.jpg"

const rooms = [
    {
        image: room1,
        title:
            "KEJORA 8 BEACHFRONT FAMILY VILLA",
        details: "3 Bedrooms | 3 Bathrooms | 6 Occupancy",
        location: "Sanur",
        price: "Rp4,500,000 per night"
    },

    {
        image: room2,
        title:
            "KEJORA 5 BEACHFRONT FAMILY VILLA WHEELCHAIR FRIENDLY",
        details: "4 Bedrooms | 4 Bathrooms | 4 Occupancy",
        location: "Sanur",
        price: "Rp5,200,000 per night"
    },

    {
        image: room3,
        title:
            "KEJORA 12",
        details: "3 Bedrooms | 3 Bathrooms | 3 Occupancy",
        location: "Sanur",
        price: "Rp5,500,000 per night"
    },
    {
        image: room4,
        title:
            "KEJORA 3 BEACHFRONT 5 BEDROOM FAMILY VILLA",
        details: "5 Bedrooms | 4 Bathrooms | 10 Pax with Children Occupancy",
        location: "Sanur",
        price: "Rp5,200,000 per night"
    },

    {
        image: room5,
        title:
            "KEJORA 15A 2 BEDROOM LUXURY BEACHFRONT PRIVATE POOL VILLA",
        details: "2 Bedrooms | 2 Bathrooms | 4 Occupancy",
        location: "Sanur",
        price: "Rp4,560,000 per night"
    },

    {
        image: room6,
        title:
            "KEJORA VILLA 18 BEACHFRONT 4 BEDROOM FAMILY VILLA",
        details: "4 Bedrooms | 4 Bathrooms | 8 Occupancy",
        location: "Sanur",
        price: "Rp5,500,000 per night"
    },

]


export default function Rooms() {

    return (
        <section className="pt-28 px-[10%] m-auto">
            <span className="flex items-center text-lg"><h1 className="text-amber-600 font-semibold ">Home</h1> <i class="ri-arrow-right-double-line text mt-1 px-1"></i> Rooms
            </span>
            <h1 className="md:text-5xl text-3xl font-semibold text-center mb-10 mt-20">
                Our Villas
            </h1>

            <div className="
            mb-24
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-12
            ">

                {rooms.map((room, index) => (
                    <RoomCard key={index} {...room} />
                ))}

            </div>

        </section>
    )
}