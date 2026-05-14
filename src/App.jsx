import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Login from './pages/Login'
import AdminDashboard from './pages/admin/AdminDashboard'
import Produccion from './pages/admin/Produccion'
import Personal from './pages/admin/Personal'
import Informes from './pages/admin/Informes'
import Monitoreo from './pages/admin/Monitoreo'
import OperarioDashboard from './pages/operario/OperarioDashboard'
import SeleccionLote from './pages/operario/SeleccionLote'
import SeleccionOperacion from './pages/operario/SeleccionOperacion'
import Pulsacion from './pages/operario/Pulsacion'

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/produccion" element={<Produccion />} />
          <Route path="/admin/personal" element={<Personal />} />
          <Route path="/admin/informes" element={<Informes />} />
          <Route path="/admin/monitoreo" element={<Monitoreo />} />
          <Route path="/operario/dashboard" element={<OperarioDashboard />} />
          <Route path="/operario/seleccion-lote" element={<SeleccionLote />} />
          <Route path="/operario/seleccion-operacion" element={<SeleccionOperacion />} />
          <Route path="/operario/pulsacion" element={<Pulsacion />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}
