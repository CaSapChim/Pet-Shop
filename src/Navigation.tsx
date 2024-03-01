import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from './pages/About'
import { Service } from './pages/Service'
import { Product } from './pages/Product'
import { Contact } from "./pages/Contact"

export const Navigation = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
  )
}
