import { useState } from 'react';
import { 
  FaThLarge, 
  FaCalendarAlt, 
  FaFileAlt, 
  FaCog, 
  FaBaby,
  FaSignOutAlt,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { FaPuzzlePiece } from 'react-icons/fa6';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Menú de navegación personalizado para la Guardería
  const menuItems = [
    { name: 'Dashboard', icon: <FaThLarge size={20} />, href: '#', active: true },
    { name: 'Niños / Expedientes', icon: <FaBaby size={20} />, href: '#' },
    { name: 'Terapias y Actividades', icon: <FaPuzzlePiece size={20} />, href: '#' },
    { name: 'Calendario / Citas', icon: <FaCalendarAlt size={20} />, href: '#' },
    { name: 'Reportes de Progreso', icon: <FaFileAlt size={20} />, href: '#' },
    { name: 'Configuración', icon: <FaCog size={20} />, href: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* --- MOBILE HEADER / TOGGLE BUTTON --- */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 sm:hidden">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button 
                onClick={toggleSidebar}
                type="button" 
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <span className="sr-only">Abrir menú</span>
                {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap ml-2 text-blue-600">
                Pequeños Pasos
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* --- SIDEBAR --- */}
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