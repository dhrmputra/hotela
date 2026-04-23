import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/app.css'
import Rooms from './customer/Rooms'
import About from './customer/About'
import Contact from './customer/Contact'
import CustomerApp from './customer/Home'
import MainLayout from './MainLayout'

import 'remixicon/fonts/remixicon.css';
import 'animate.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

const container = document.getElementById("CustomerApp")

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<CustomerApp />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
)
