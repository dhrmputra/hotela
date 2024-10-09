import React, { useEffect, useState } from "react"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar, Doughnut } from "react-chartjs-2"

// WAJIB register
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
)

export default function Dashboard() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((json) => {
        console.log("API DATA:", json) // 🔥 DEBUG
        setData(json)
      })
  }, [])

  // ⛔ JANGAN render chart kalau data belum ada
  if (!data) {
    return <p>Loading chart...</p>
  }

  const labels = ["Kamar", "User", "Pesanan", "Pegawai"]
  const values = [
    data.kamar,
    data.user,
    data.pesanan,
    data.pegawai,
  ]

  const barData = {
    labels,
    datasets: [
      {
        label: "Total Data",
        data: values,
        backgroundColor: [
          "#4e73df",
          "#1cc88a",
          "#36b9cc",
          "#f6c23e",
        ],
      },
    ],
  }

  const doughnutData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          "#4e73df",
          "#1cc88a",
          "#36b9cc",
          "#f6c23e",
        ],
      },
    ],
  }

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Dashboard</h1>

      <div className="row">
        <div className="col-md-8">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h6 className="font-weight-bold text-primary">
                Grafik Data Hotel
              </h6>
            </div>
            <div className="card-body" style={{ height: "350px" }}>
              <Bar data={barData} />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h6 className="font-weight-bold text-primary">
                Distribusi Data
              </h6>
            </div>
            <div className="card-body" style={{ height: "350px" }}>
              <Doughnut data={doughnutData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}