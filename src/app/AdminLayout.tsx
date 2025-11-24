import { useState } from 'react';
import { Outlet } from 'react-router-dom';


import Header from '../layout/header/Header.tsx';
import Sidebar from '../layout/Sidebar/Sidebar.tsx';

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* --- MOBILE HEADER / TOGGLE BUTTON --- */}
      <Header />

      {/* --- SIDEBAR --- */}
     <Sidebar />

      {/* ---Dinamic Content --- */}
      <Outlet />

      {/* Overlay para móvil (cierra el sidebar al hacer click fuera) */}
      {isSidebarOpen && (
        <div 
            onClick={toggleSidebar}
            className="fixed inset-0 bg-gray-900/50 z-30 sm:hidden"
        ></div>
      )}
    </div>
  );
}