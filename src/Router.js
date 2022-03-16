
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";


const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
};

export default Router;