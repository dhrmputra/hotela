// import { Footer } from "flowbite-react"
import Navbar from "./customer/components/Navbar"
import Footer from "./customer/components/Footer"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}