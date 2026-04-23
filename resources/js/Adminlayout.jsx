import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main area */}
      <div className="flex-1 ml-64">
        <Navbar />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}