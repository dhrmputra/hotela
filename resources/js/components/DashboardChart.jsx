import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function DashboardChart({ kamar, user, pesanan, pegawai}) {
  const data = {
    labels: ["Kamar", "User", "Pesanan", "Pegawai"],
    datasets: [
      {
        label: "Total Data",
        data: [kamar, user, pesanan, pegawai],
        backgroundColor: [
          "rgba(59,130,246,0.7)",
          "rgba(34,197,94,0.7)",
          "rgba(168,85,247,0.7)",
          "rgba(249,115,22,0.7)",
        ],
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">
        Grafik Total Data
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
}