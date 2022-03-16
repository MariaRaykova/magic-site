
import { Routes, Route } from "react-router-dom"

import MainPage from "./pages/MainPage"
import GalleryPage from "./pages/GalleryPage/GalleryPage"

import Header from "./components/Header"
import Navigation from "./components/Navigation"

const Router = () => {
  return <>
    <Header />
    <Navigation />
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  </>
}

export default Router