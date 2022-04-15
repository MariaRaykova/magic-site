import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import Contacts from './pages/Contacts/Contacts';
import About from './pages/About/About';
import NotFound from './pages/NotFound';

const Router: FC = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/gallery" element={<GalleryPage />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)
export default Router;
