import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  // 1. Declaración de los Hooks (useState) y la lógica del componente
  // ¡DEBE ir DENTRO del cuerpo de la función y ANTES del return!
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // 2. Sentencia return con el JSX a renderizar
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 sm:hidden">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button 
              // Uso de la función de lógica en el evento
              onClick={toggleSidebar}
              type="button" 
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <span className="sr-only">Abrir menú</span>
              {/* Renderizado condicional basado en el estado */}
              {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap ml-2 text-blue-600">
              Pequeños Pasos
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}