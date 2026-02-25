import { Users, BedDouble, ClipboardList, UserCog } from "lucide-react";

export default function DashboardCards({ kamar, user, pesanan }) {
  const cards = [
    {
      title: "Total Kamar",
      value: kamar,
      icon: BedDouble,
      link: "/kamar",
      color: "bg-blue-500",
    },
    {
      title: "Total User",
      value: user,
      icon: Users,
      link: "/user",
      color: "bg-green-500",
    },
    {
      title: "Total Pesanan",
      value: pesanan,
      icon: ClipboardList,
      link: "/pesanan",
      color: "bg-purple-500",
    },
    // {
    //   title: "Total Pegawai",
    //   value: pegawai,
    //   icon: UserCog,
    //   link: "/pegawai",
    //   color: "bg-orange-500",
    // },
  ];

  return (
    <div className="px-4 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{card.title}</p>
                <h2 className="text-3xl font-bold text-gray-800">
                  {card.value}
                </h2>
              </div>

              <div
                className={`p-3 rounded-full text-white ${card.color}`}
              >
                <card.icon size={28} />
              </div>
            </div>

            <a
              href={card.link}
              className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
            >
              More details →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}