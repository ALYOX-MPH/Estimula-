import { useState } from 'react';
import { 
  FaCalendarAlt, 
  FaFileAlt, 
  FaBaby,
} from 'react-icons/fa';
import { FaPuzzlePiece } from 'react-icons/fa6';

import Header from '../layout/header/Header.tsx';
import Sidebar from '../layout/Sidebar/Sidebar.tsx';

export default function AppRoutes() {
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

      {/* --- CONTENT AREA (El grid que estabas haciendo) --- */}
      <div className="p-4 sm:ml-64 mt-14 sm:mt-0">
        <div className="p-6 border-2 border-gray-200 border-dashed rounded-xl bg-white/50">
            
            {/* Header del contenido */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Panel General</h1>
                <p className="text-gray-500">Resumen de actividades del consultorio.</p>
            </div>

            {/* Grid 1: Tarjetas superiores (Stats) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                {/* Card 1 */}
                <div className="flex flex-col items-center justify-center h-32 rounded-xl bg-blue-50 text-blue-500 hover:bg-blue-100 transition cursor-pointer">
                    <FaBaby size={32} className="mb-2 opacity-80" />
                    <span className="font-semibold text-lg">24 Niños Activos</span>
                </div>
                {/* Card 2 */}
                <div className="flex flex-col items-center justify-center h-32 rounded-xl bg-green-50 text-green-500 hover:bg-green-100 transition cursor-pointer">
                    <FaCalendarAlt size={32} className="mb-2 opacity-80" />
                    <span className="font-semibold text-lg">8 Citas Hoy</span>
                </div>
                {/* Card 3 */}
                <div className="flex flex-col items-center justify-center h-32 rounded-xl bg-purple-50 text-purple-500 hover:bg-purple-100 transition cursor-pointer">
                    <FaPuzzlePiece size={32} className="mb-2 opacity-80" />
                    <span className="font-semibold text-lg">3 Terapias Nuevas</span>
                </div>
            </div>

            {/* Bloque Grande (Main Chart / info) */}
            <div className="flex items-center justify-center h-64 rounded-xl bg-gray-50 mb-4 border border-gray-100">
                <div className="text-center text-gray-400">
                    <FaFileAlt size={48} className="mx-auto mb-2 opacity-20" />
                    <p>Área de Gráficos de Evolución o Calendario Semanal</p>
                </div>
            </div>

            {/* Grid Inferior (Listas recientes) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col justify-center h-48 rounded-xl bg-gray-50 p-4 border border-gray-100">
                     <h3 className="font-bold text-gray-700 mb-2">Próximas Evaluaciones</h3>
                     <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex justify-between border-b pb-1">
                            <span>Juan P.</span> <span className="text-blue-600">10:00 AM</span>
                        </li>
                        <li className="flex justify-between border-b pb-1">
                            <span>Maria L.</span> <span className="text-blue-600">11:30 AM</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Carlos R.</span> <span className="text-blue-600">02:00 PM</span>
                        </li>
                     </ul>
                </div>
                <div className="flex flex-col justify-center h-48 rounded-xl bg-gray-50 p-4 border border-gray-100">
                    <h3 className="font-bold text-gray-700 mb-2">Notas Rápidas</h3>
                    <div className="text-sm text-gray-500 italic">
                        "Recordar actualizar el expediente de Sofia para la terapia de lenguaje..."
                    </div>
                </div>
            </div>

        </div>
      </div>

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