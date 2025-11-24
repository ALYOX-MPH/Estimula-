import { 
  FaThLarge, 
  FaCalendarAlt, 
  FaFileAlt, 
  FaCog, 
  FaBaby,
  FaSignOutAlt,
//   FaBars,
//   FaTimes
} from 'react-icons/fa';

import { FaPuzzlePiece } from 'react-icons/fa6';


import { useState } from 'react';

 const menuItems = [
    { name: 'Dashboard', icon: <FaThLarge size={20} />, href: '#', active: true },
    { name: 'Niños / Expedientes', icon: <FaBaby size={20} />, href: '#' },
    { name: 'Terapias y Actividades', icon: <FaPuzzlePiece size={20} />, href: '#' },
    { name: 'Calendario / Citas', icon: <FaCalendarAlt size={20} />, href: '#' },
    { name: 'Reportes de Progreso', icon: <FaFileAlt size={20} />, href: '#' },
    { name: 'Configuración', icon: <FaCog size={20} />, href: '#' },
  ];

export default function Sidebar() {

     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

     const toggleSidebar = () => {
       setIsSidebarOpen(!isSidebarOpen);
     };

  return (
    <aside 
            className={`fixed top-0 left-0 z-40 w-64 h-screen pt-4 sm:pt-0 transition-transform bg-white border-r border-gray-200 ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } sm:translate-x-0`}
            aria-label="Sidebar"
          >
            <div className="h-full px-3 py-4 overflow-y-auto flex flex-col justify-between">
              
              {/* Logo Area (Desktop) & Menu */}
              <div>
                <div className="hidden sm:flex items-center mb-8 pl-2.5 pt-2">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3">
                        <FaBaby size={20} />
                    </div>
                    <span className="self-center text-xl font-bold whitespace-nowrap text-gray-700">
                        Pequeños Pasos
                    </span>
                </div>
    
                <ul className="space-y-2 font-medium">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a 
                        href={item.href} 
                        className={`flex items-center p-2 rounded-lg group transition-colors duration-200 
                          ${item.active 
                            ? 'bg-blue-50 text-blue-700' 
                            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                          }`}
                      >
                        <span className={`transition duration-75 ${item.active ? 'text-blue-700' : 'text-gray-400 group-hover:text-blue-600'}`}>
                            {item.icon}
                        </span>
                        <span className="ms-3">{item.name}</span>
                        
                        {/* Ejemplo de Badge (opcional) */}
                        {item.name === 'Calendario / Citas' && (
                            <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                                3
                            </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
    
              {/* Footer del Sidebar */}
              <div className="border-t border-gray-200 pt-4">
                <a href="#" className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 group transition-colors">
                  <FaSignOutAlt size={20} className="text-gray-400 group-hover:text-red-600 transition duration-75" />
                  <span className="ms-3">Cerrar Sesión</span>
                </a>
              </div>
    
            </div>
          </aside>

        
  )
}
