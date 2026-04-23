import { Menu, Search } from "lucide-react";

export default function Navbar({ onToggle }) {
  return (
    <header className="top-0 z-20 bg-white">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-gray-700"
            onClick={onToggle}
          >
            <Menu />
          </button>

          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring w-64"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600 hidden sm:block">
            Hi, <span className="font-semibold">user</span>
          </span>

          <form method="POST" action="/logout">
            <input
              type="hidden"
              name="_token"
              value={document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute('content')}
            />
            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition">Logout</button>
          </form>
        </div>
      </div>
    </header>
  );
}