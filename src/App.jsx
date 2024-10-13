


import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Vans/Home.jsx';
import About from './About.jsx';
import Vans from "./Vans/Vans.jsx";
import VansDetails from "./Vans/VansDetails.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard from "./Host/Dashboard.jsx";
import Income from "./Host/Income.jsx";
import Reviews from "./Host/Reviews.jsx";
import HostVans from "./Host/HostVans.jsx";
import HostVanDetail from "./Host/HostVanDetail.jsx";
import HostVanInfo from "./Host/HostVanInfo.jsx";
import HostVanPricing from "./Host/HostVanPricing.jsx";
import HostVanPhotos from "./Host/HostVanPhotos.jsx";
import HostLayout from "./Host/HostLayout.jsx";
import NotFound from "./Vans/NotFound.jsx";
import Login from "./Vans/Login.jsx";
import AuthRequired from "./components/AuthRequired.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    
      <BrowserRouter>
        
        <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/vans" element={<Vans />}/>
          <Route path="/vans/:id" element={<VansDetails />} />
          <Route
            path="login"
            element={<Login />}
          />


            <Route element={<AuthRequired />}>
              <Route path="/host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="vans" element={<HostVans />} />
                <Route path="vans/:id" element={<HostVanDetail />}>
                  <Route index element={<HostVanInfo />} />
                  <Route path="pricing" element={<HostVanPricing />} />
                  <Route path="photos" element={<HostVanPhotos />} />
                </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
    )
  
  
}

export default App
