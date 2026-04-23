import React, { useEffect, useState, useRef } from "react"
import { createRoot } from "react-dom/client"

import AdminLayout from "./Adminlayout"
import Dashboard from "./components/Dashboard"
import DashboardCards from "./components/DashboardCards"

function App() {
  const [data, setData] = useState(null)
  const bladeSlotRef = useRef(null)

  const page = document.body.dataset.page
  const isDashboard = page === "dashboard"

  // pindahkan blade konten (untuk halaman selain dashboard)
  useEffect(() => {
    const bladeRoot = document.getElementById("blade-root")
    if (bladeRoot && bladeSlotRef.current && !isDashboard) {
      bladeSlotRef.current.appendChild(bladeRoot)
      bladeRoot.classList.remove("hidden")
    }
  }, [isDashboard])

  // fetch data HANYA untuk dashboard
  useEffect(() => {
    if (isDashboard) {
      fetch("/api/dashboard")
        .then((res) => res.json())
        .then((json) => setData(json))
    }
  }, [isDashboard])

  return (
    <AdminLayout>
      {/* DASHBOARD */}
      {isDashboard && data && (
        <>
          <DashboardCards
            kamar={data.kamar}
            user={data.user}
            pesanan={data.pesanan}
            pegawai={data.pegawai}
          />
          <Dashboard data={data} />
        </>
      )}

      {/* HALAMAN BLADE */}
      {!isDashboard && <div ref={bladeSlotRef}></div>}
    </AdminLayout>
  )
}

const container = document.getElementById("react-root")
if (container) {
  createRoot(container).render(<App />)
}