import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'

export default function AdminDashboard() {
  const fecha = new Date().toLocaleDateString('es-CO', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <>
      <Navbar tipo="admin" />
      <main className="contenedor-principal">

        <div className="tarjeta">
          <h2 className="titulo-seccion">Bienvenido</h2>
          <p className="subtitulo-seccion">Rol Actual: Administrador</p>

          <div className="dashboard-grid">
            <div className="dashboard-card text-center">
              <img
                src="/img/logoazulcompleto.png"
                alt="OPTIMAK"
                style={{ maxWidth: 260, marginBottom: 20 }}
                onError={e => e.target.style.display = 'none'}
              />
            </div>
            <div className="info-panel">
              <p><strong>Bienvenido:</strong> Administrador</p>
              <p><strong>Rol:</strong> Administrador</p>
              <p><strong>Fecha:</strong> {fecha}</p>
              <hr style={{ borderColor: 'rgba(255,255,255,0.2)', margin: '12px 0' }} />
              <p><strong>Empresa:</strong> Makairos SAS</p>
              <p><strong>NIT:</strong> —</p>
              <p><strong>Dirección:</strong> —</p>
              <p><strong>Ciudad:</strong> —</p>
            </div>
          </div>
        </div>

        <div className="tarjeta">
          <h3 className="titulo-seccion">Accesos Rápidos</h3>
          <div className="cards-grid">
            <Link to="/admin/produccion" className="card text-center">
              <i className="fas fa-box" style={{ fontSize: 48, color: '#2563eb', marginBottom: 15 }}></i>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: '#334155' }}>Gestión de Producción</h4>
              <p style={{ fontSize: 13, color: '#64748b', marginTop: 10 }}>Administrar lotes, referencias y operaciones</p>
            </Link>
            <Link to="/admin/personal" className="card text-center">
              <i className="fas fa-users" style={{ fontSize: 48, color: '#2563eb', marginBottom: 15 }}></i>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: '#334155' }}>Gestión de Personal</h4>
              <p style={{ fontSize: 13, color: '#64748b', marginTop: 10 }}>Administrar empleados y módulos operativos</p>
            </Link>
            <Link to="/admin/informes" className="card text-center">
              <i className="fas fa-chart-line" style={{ fontSize: 48, color: '#2563eb', marginBottom: 15 }}></i>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: '#334155' }}>Informes de Eficiencia</h4>
              <p style={{ fontSize: 13, color: '#64748b', marginTop: 10 }}>Consultar reportes históricos y análisis</p>
            </Link>
            <Link to="/admin/monitoreo" className="card text-center">
              <i className="fas fa-desktop" style={{ fontSize: 48, color: '#2563eb', marginBottom: 15 }}></i>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: '#334155' }}>Monitoreo en Tiempo Real</h4>
              <p style={{ fontSize: 13, color: '#64748b', marginTop: 10 }}>Ver eficiencia actual de todos los módulos</p>
            </Link>
          </div>
        </div>

      </main>
    </>
  )
}
