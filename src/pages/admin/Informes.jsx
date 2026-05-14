import { useState } from 'react'
import Navbar from '../../components/Navbar'
import TabPanel from '../../components/TabPanel'
import DataTable from '../../components/DataTable'

// cada tab tiene su propio estado de búsqueda así no se mezclan
function TabOperario() {
  const [buscado, setBuscado] = useState(false)

  const handleConsultar = (e) => {
    e.preventDefault()
    setBuscado(true)
  }

  return (
    <div>
      <form onSubmit={handleConsultar} className="mb-4">
        <div className="row g-3 align-items-end">
          <div className="col-md-4">
            <label className="form-label">Operario</label>
            <select className="form-input">
              <option value="">-- Seleccione un operario --</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Desde</label>
            <input type="date" className="form-input" />
          </div>
          <div className="col-md-3">
            <label className="form-label">Hasta</label>
            <input type="date" className="form-input" />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn-principal w-100">
              <i className="fas fa-search me-1"></i>Consultar
            </button>
          </div>
        </div>
      </form>

      {buscado && (
        <>
          <div className="row g-3 mb-4">
            <div className="col-md-4">
              <div className="informe-card-resumen">
                <div className="informe-card-valor" style={{ color: '#64748b' }}>—</div>
                <div className="informe-card-label">Eficiencia promedio</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="informe-card-resumen">
                <div className="informe-card-valor" style={{ color: '#2563eb' }}>0</div>
                <div className="informe-card-label">Total pulsaciones</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="informe-card-resumen">
                <div className="informe-card-valor" style={{ color: '#f59e0b' }}>0</div>
                <div className="informe-card-label">Incidencias registradas</div>
              </div>
            </div>
          </div>

          <h6 className="mb-2">
            <i className="fas fa-chart-line me-1"></i>Registros de eficiencia
          </h6>
          <DataTable
            columnas={['Período inicio', 'Período fin', 'Pulsaciones', 'Eficiencia', 'Lote (OM)', 'Observaciones']}
            mensajeVacio="Sin registros de eficiencia en este período."
          />

          <h6 className="mb-2 mt-4">
            <i className="fas fa-exclamation-circle me-1" style={{ color: '#f59e0b' }}></i>
            Incidencias del período
          </h6>
          <DataTable
            columnas={['Fecha y hora', 'Justificación del operario', 'Eficiencia del período']}
            mensajeVacio="Sin incidencias en este período."
          />
        </>
      )}
    </div>
  )
}

function TabModulo() {
  const [buscado, setBuscado] = useState(false)

  return (
    <div>
      <form onSubmit={e => { e.preventDefault(); setBuscado(true) }} className="mb-4">
        <div className="row g-3 align-items-end">
          <div className="col-md-4">
            <label className="form-label">Módulo operativo</label>
            <select className="form-input">
              <option value="">-- Seleccione un módulo --</option>
              <option value="A">Módulo A</option>
              <option value="B">Módulo B</option>
              <option value="C">Módulo C</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Desde</label>
            <input type="date" className="form-input" />
          </div>
          <div className="col-md-3">
            <label className="form-label">Hasta</label>
            <input type="date" className="form-input" />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn-principal w-100">
              <i className="fas fa-search me-1"></i>Consultar
            </button>
          </div>
        </div>
      </form>

      {buscado && (
        <>
          <h6 className="mb-2">
            <i className="fas fa-calendar-alt me-1"></i>Eficiencia diaria del módulo
          </h6>
          <DataTable
            columnas={['Fecha', 'Eficiencia promedio', 'Operarios activos ese día', 'Nivel']}
            mensajeVacio="Sin registros de eficiencia para este módulo en el período."
          />

          <h6 className="mb-2 mt-4">
            <i className="fas fa-trophy me-1" style={{ color: '#f59e0b' }}></i>
            Rendimiento por operario en el período
          </h6>
          <DataTable
            columnas={['#', 'Operario', 'Cédula', 'Eficiencia promedio', 'Períodos', 'Total prendas']}
            mensajeVacio="Sin datos de operarios para este módulo y período."
          />
        </>
      )}
    </div>
  )
}

function TabLote() {
  const [buscado, setBuscado] = useState(false)

  return (
    <div>
      <form onSubmit={e => { e.preventDefault(); setBuscado(true) }} className="mb-4">
        <div className="row g-3 align-items-end">
          <div className="col-md-6">
            <label className="form-label">Lote (Orden Maestra)</label>
            <select className="form-input">
              <option value="">-- Seleccione un lote --</option>
            </select>
          </div>
          <div className="col-md-3">
            <button type="submit" className="btn-principal w-100">
              <i className="fas fa-search me-1"></i>Ver avance
            </button>
          </div>
        </div>
      </form>

      {buscado && (
        <>
          <div className="row g-3 mb-4">
            {['Orden Maestra', 'Referencia', 'Total unidades', 'Módulo asignado'].map(label => (
              <div key={label} className="col-md-3">
                <div className="informe-card-resumen">
                  <div className="informe-card-valor" style={{ color: '#2563eb', fontSize: 20 }}>—</div>
                  <div className="informe-card-label">{label}</div>
                </div>
              </div>
            ))}
          </div>

          <h6 className="mb-2"><i className="fas fa-tasks me-1"></i>Avance por operación</h6>
          <DataTable
            columnas={['Operación', 'SAM', 'Pulsaciones realizadas', 'Total unidades lote', '% completado', 'Progreso']}
            mensajeVacio="Sin pulsaciones registradas para este lote."
          />

          <h6 className="mb-2 mt-4"><i className="fas fa-users me-1"></i>Contribución por operario</h6>
          <DataTable
            columnas={['Operario', 'Cédula', 'Pulsaciones totales']}
            mensajeVacio="Sin contribuciones registradas para este lote."
          />
        </>
      )}
    </div>
  )
}

export default function Informes() {
  return (
    <>
      <Navbar tipo="admin" />
      <main className="contenedor-principal">
        <div className="tarjeta">
          <h2 className="titulo-seccion">Informes Históricos</h2>
          <p className="subtitulo-seccion">Consulta de eficiencia y producción por período</p>
          <TabPanel tabs={[
            { label: <><i className="fas fa-user me-1"></i>Por Operario</>, contenido: <TabOperario /> },
            { label: <><i className="fas fa-layer-group me-1"></i>Por Módulo</>, contenido: <TabModulo /> },
            { label: <><i className="fas fa-box me-1"></i>Por Lote</>, contenido: <TabLote /> },
          ]} />
        </div>
      </main>
    </>
  )
}
