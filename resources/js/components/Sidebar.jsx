import {
  Home,
  BedDouble,
  Users,
  ClipboardList,
  UserCog,
  X,
} from "lucide-react";

export default function Sidebar({ open, onClose }) {
  const menus = [
    { name: "Kamar", icon: BedDouble, href: "/admin/kamar" },
    { name: "User", icon: Users, href: "/admin/user" },
    { name: "Pesanan", icon: ClipboardList, href: "/admin/pesanan" },
    { name: "Pegawai", icon: UserCog, href: "/admin/pegawai" },
  ];

  return (
    <>
      {/* Overlay (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed z-40 inset-y-0 left-0 w-64 bg-zinc-800 text-white transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-slate-700">
          <a href="/admin" className="text-decoration-none text-white text-center px-4"><span className="text-xl font-bold tracking-wide">HOTELA</span></a>
          <button className="md:hidden" onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Menu */}
        <nav className="px-4 py-6 space-y-2">
          {menus.map((menu) => (
            <a
              key={menu.name}
              href={menu.href}
              className="flex items-center text-decoration-none text-white gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 transition"
            >
              <menu.icon size={20} />
              <span>{menu.name}</span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}