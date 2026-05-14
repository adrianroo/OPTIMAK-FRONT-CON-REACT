import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import DataTable from '../../components/DataTable'

const modulosDemo = [
  { id: 'A' },
  { id: 'B' },
  { id: 'C' },
]

export default function Monitoreo() {
  const [horaActualizacion, setHoraActualizacion] = useState('—')

  useEffect(() => {
    const marcarHora = () => {
      const ahora = new Date()
      const h = String(ahora.getHours()).padStart(2, '0')
      const m = String(ahora.getMinutes()).padStart(2, '0')
      const s = String(ahora.getSeconds()).padStart(2, '0')
      setHoraActualizacion(`${h}:${m}:${s}`)
    }
    marcarHora()
  }, [])

  const actualizar = () => {
    const ahora = new Date()
    const h = String(ahora.getHours()).padStart(2, '0')
    const m = String(ahora.getMinutes()).padStart(2, '0')
    const s = String(ahora.getSeconds()).padStart(2, '0')
    setHoraActualizacion(`${h}:${m}:${s}`)
  }

  return (
    <>
      <Navbar tipo="admin" />
      <main className="contenedor-principal">
        <div className="tarjeta">

          <div className="monitoreo-header-bar">
            <div>
              <h2 className="titulo-seccion" style={{ marginBottom: 8 }}>Monitoreo en Tiempo Real</h2>
              <p className="subtitulo-seccion" style={{ marginBottom: 0 }}>
                Estado del turno actual — todos los módulos
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <div className="monitoreo-indicador-vivo">
                <div className="monitoreo-dot"></div>
                <span>En vivo &nbsp;·&nbsp; actualiza cada 30 s</span>
              </div>
              <div style={{ fontSize: 13, color: '#94a3b8' }}>
                Última actualización: <strong>{horaActualizacion}</strong>
              </div>
              <button className="btn-secundario" style={{ padding: '8px 16px', fontSize: 13 }} onClick={actualizar}>
                <i className="fas fa-sync-alt me-1"></i>Actualizar ahora
              </button>
            </div>
          </div>

          {/* grid de tarjetas de módulos — datos vacíos con placeholder */}
          <div className="monitoreo-grid">
            {modulosDemo.map(mod => (
              <div key={mod.id} className="monitoreo-card monitoreo-card-sinactividad">
                <div className="monitoreo-card-header">
                  <span className="monitoreo-modulo-id">
                    <i className="fas fa-layer-group" style={{ color: '#2563eb', fontSize: 16, marginRight: 6 }}></i>
                    Módulo {mod.id}
                  </span>
                  <span className="badge-estado badge-pausado">Sin actividad</span>
                </div>
                <div className="monitoreo-eficiencia-bloque">
                  <div className="monitoreo-eficiencia-numero monitoreo-eficiencia-sindata">—</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Eficiencia promedio del turno
                  </div>
                </div>
                <div className="monitoreo-stats">
                  <div className="monitoreo-stat">
                    <div className="monitoreo-stat-valor">0</div>
                    <div className="monitoreo-stat-label">Operarios activos</div>
                  </div>
                  <div className="monitoreo-stat">
                    <div className="monitoreo-stat-valor">0</div>
                    <div className="monitoreo-stat-label">Pulsaciones hoy</div>
                  </div>
                  <div className="monitoreo-stat">
                    <div className="monitoreo-stat-valor">0</div>
                    <div className="monitoreo-stat-label">Incidencias</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* tabla de incidencias del turno */}
          <h5 className="mb-3" style={{ color: '#334155' }}>
            <i className="fas fa-exclamation-triangle me-2" style={{ color: '#f59e0b' }}></i>
            Incidencias del turno
          </h5>
          <DataTable
            columnas={['Hora', 'Operario', 'Módulo', 'Eficiencia que generó alerta', 'Justificación del operario']}
            mensajeVacio="Sin incidencias registradas hoy."
          />

        </div>
      </main>
    </>
  )
}
