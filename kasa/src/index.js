// React
import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Main css
import 'index.css';

// Pages imports
import Home from 'pages/Home';
import Page404 from 'pages/Page404';
import Room from 'pages/Room';
import About from 'pages/About';

// Components imports
import Header from 'components/Header';
import Footer from 'components/Footer';

// Other imports
import reportWebVitals from 'reportWebVitals';

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/room/:roomId" element={<Room />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
