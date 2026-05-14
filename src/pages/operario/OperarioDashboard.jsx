import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import EficienciaCard from '../../components/EficienciaCard'

export default function OperarioDashboard() {
  const fecha = new Date().toLocaleDateString('es-CO', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <>
      <Navbar tipo="operario" />
      <main className="contenedor-principal">

        <div className="tarjeta">
          <h2 className="titulo-seccion">Bienvenido</h2>
          <p className="subtitulo-seccion">Rol Actual: Operario</p>

          <div className="dashboard-grid">
            <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
              <Link to="/operario/seleccion-lote" className="card text-center">
                <i className="fas fa-boxes" style={{ fontSize: 42, color: '#2563eb', marginBottom: 12 }}></i>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: '#334155' }}>Ir a Producción</h4>
                <p style={{ fontSize: 12, color: '#64748b', marginTop: 8 }}>Elige el lote sobre el que trabajarás</p>
              </Link>
            </div>
            <div className="info-panel">
              <p><strong>Bienvenido:</strong> Operario</p>
              <p><strong>Rol:</strong> Operario</p>
              <p><strong>Módulo:</strong> —</p>
              <p><strong>Fecha:</strong> {fecha}</p>
              <hr style={{ borderColor: 'rgba(255,255,255,0.2)', margin: '12px 0' }} />
              <p><strong>Empresa:</strong> Makairos SAS</p>
              <p><strong>NIT:</strong> —</p>
              <p><strong>Dirección:</strong> —</p>
              <p><strong>Ciudad:</strong> —</p>
            </div>
          </div>
        </div>

        {/* tarjeta de módulo asignado y eficiencia */}
        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <div className="tarjeta" style={{ marginBottom: 0 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>
                <i className="fas fa-layer-group" style={{ color: '#2563eb', marginRight: 8 }}></i>
                Módulo Asignado
              </h3>
              <div style={{ fontSize: 32, fontWeight: 800, color: '#64748b', textAlign: 'center', padding: '12px 0' }}>
                —
              </div>
              <p style={{ fontSize: 13, color: '#94a3b8', textAlign: 'center', margin: 0 }}>
                Sin módulo asignado
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <EficienciaCard label="EFICIENCIA DEL TURNO" valor="—" subtexto="Sin actividad" />
          </div>
        </div>

        <div className="tarjeta">
          <h3 className="titulo-seccion" style={{ fontSize: 16, marginBottom: 16 }}>
            <i className="fas fa-box-open" style={{ marginRight: 8, color: '#2563eb' }}></i>
            Lote Activo
          </h3>
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: 20 }}>
            <p style={{ color: '#94a3b8', fontSize: 14, textAlign: 'center', margin: 0 }}>
              <i className="fas fa-info-circle" style={{ marginRight: 6 }}></i>
              No hay un lote activo en este momento.{' '}
              <Link to="/operario/seleccion-lote" style={{ color: '#2563eb', fontWeight: 600 }}>
                Seleccionar lote
              </Link>
            </p>
          </div>
        </div>

      </main>
    </>
  )
}
