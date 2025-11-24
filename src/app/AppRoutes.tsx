import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import AdminLayout from "./AdminLayout";
// Asumiendo que existen componentes para cada vista
// import KidsPage from "./pages/KidsPage"; 
// etc...

export default function AppRoutes() {
  return (
    <Routes>
      
      <Route path="/" element={<AdminLayout />}>

        {/* Ruta índice (ej. /) que se mostrará en el Layout */}
        <Route index element={<Dashboard />} />

        {/* Las 'path' de las rutas hijas no comienzan con / */}
        <Route path="/kids" element={<div>Kids Page</div>} />
        <Route path="therapy" element={<div>Therapy Page</div>} />
        <Route path="calendar" element={<div>Calendar Page</div>} />
        <Route path="reports-progress" element={<div>Reports Progress Page</div>} />
        <Route path="reports-general" element={<div>Reports General Page</div>} />
        <Route path="daily-close" element={<div>Daily Close Page</div>} />
        <Route path="settings" element={<div>Settings Page</div>} />

        {/* Not found */}
        <Route path="*" element={<div>404 Not Found</div>} />

      </Route> 
      {/* 4. Cierre correcto del Route Padre */}
      
      {/* Opcional: Si quieres que el 404 NO tenga el layout, lo pones fuera: */}
      {/* <Route path="*" element={<div>404 Global Not Found</div>} /> */}

    </Routes>
  );
}