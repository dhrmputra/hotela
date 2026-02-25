import React from "react";
import { createRoot } from "react-dom/client";
import '../css/app.css';
import DashboardChart from "./components/DashboardChart";

const el = document.getElementById("app");

if (el) {
  const data = {
    kamar: Number(el.dataset.kamar),
    user: Number(el.dataset.user),
    pesanan: Number(el.dataset.pesanan),
    pegawai: Number(el.dataset.pegawai),
  };

  console.log("DATA DARI DATABASE:", data); // 🔥 DEBUG WAJIB

  createRoot(el).render(
    <div className="min-h-screen bg-gray-100 px-6 py-8">

      <DashboardChart {...data} />
    </div>
  );
}