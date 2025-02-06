// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { useEffect, useState } from 'react';
import './index.css'
import { Toaster } from 'sonner';
import { Suspense } from 'react';

import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
const Herolazy = React.lazy(() => import('./pages/hero'));
const Dashboardlazy = React.lazy(() => import('./Components/AdminDashboard'));
const Themeslazy = React.lazy(() => import('./pages/themes'));
const ThemeDetaillazy = React.lazy(() => import('./Components/ThemeDetail'));
// import Dashboard from "./Components/dashboard";
// import Themes from './pages/themes';

import ThemeDetail from './Components/ThemeDetail';
const Userprofilelazy = React.lazy(() => import('./pages/userprofile'));
import Userprofile from './pages/userprofile';
import ManagePage from './pages/Managepage';
import DashboardPage from './Components/AdminDashboard';
import AdminTheme from './pages/Admin/AdminTheme';
import AdminEvents from './pages/Admin/AdminEvents';
import "./assets/css/loader.css"
import { Errorpage } from './pages/404page';
import Hero from './pages/hero';
// import { Provider } from 'react-redux';}
const CustomLoader = () => (
  <div className='flex items-center justify-center mt-[20%]'>
    <div className="loader">
      <div className="dot-one"></div>
      <div className="dot-two">-  -</div>
      <div className="dot-three"></div>
    </div>
  </div>
);


function App() {

  return (
    <>
      <div>
        <Toaster richColors position="top-right" />
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Hero />} />

            {/* USER */}


            <>
              <Route path="/themes" element={<Suspense fallback={<CustomLoader />}><Themeslazy /></Suspense>} />
              <Route path="/userprofile" element={<Suspense fallback={<CustomLoader />}><Userprofilelazy /></Suspense>} />
              <Route path="/theme/:index" element={<Suspense fallback={<CustomLoader />}><ThemeDetaillazy /></Suspense>} />
            </>

            {/* <Route path="/theme/:index" element={<ThemeDetail />} /> */}

            {/* ADMIN */}
            <Route path="/admin" element={<Suspense fallback={<CustomLoader />}><Dashboardlazy /></Suspense>} />
            <Route path="/admin/manage" element={<ManagePage />} />
            <Route path="/admin/theme" element={<AdminTheme />} />
            <Route path="/admin/events" element={<AdminEvents />} />

            <Route path="*" element={<Errorpage />} />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
