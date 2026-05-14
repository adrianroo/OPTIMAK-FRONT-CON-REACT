import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import EficienciaCard from '../../components/EficienciaCard'
import AlertaBajaEficiencia from '../../components/AlertaBajaEficiencia'
import { useApp } from '../../context/AppContext'

export default function Pulsacion() {
  const { loteSeleccionado, operacionSeleccionada } = useApp()
  const [contador, setContador] = useState(0)
  const [alertaAbierta, setAlertaAbierta] = useState(false)
  const [resumenAbierto, setResumenAbierto] = useState(false)

  // si vienen del flujo normal usan los datos del contexto; si entran directo, datos demo
  const lote = loteSeleccionado || { om: 'OM-DEMO-001', referenciaIdRef: 'REF-001' }
  const operacion = operacionSeleccionada || { nombreCorto: 'Unir Costados', samOperacion: 1.250, maquina: 'FIL' }

  const pulsar = () => {
    setContador(c => c + 1)
  }

  return (
    <>
      <Navbar tipo="operario" />
      <main className="contenedor-principal">

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, alignItems: 'start' }}>

          {/* panel izquierdo: info y eficiencia */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <Link to="/operario/seleccion-operacion" className="btn-secundario">
                <i className="fas fa-exchange-alt" style={{ marginRight: 6 }}></i>
                Cambiar Lote / Operación
              </Link>
            </div>

            <div className="pulsacion-info-panel">
              <div className="pulsacion-info-fila">
                <span className="pulsacion-info-label">LOTE</span>
                <span className="pulsacion-info-valor">{lote.om}</span>
              </div>
              <div className="pulsacion-info-fila">
                <span className="pulsacion-info-label">OPERACIÓN</span>
                <span className="pulsacion-info-valor">{operacion.nombreCorto}</span>
              </div>
              <div className="pulsacion-info-fila">
                <span className="pulsacion-info-label">SAM OBJETIVO</span>
                <span className="pulsacion-info-valor">{operacion.samOperacion.toFixed(3)} min</span>
              </div>
            </div>

            <div className="cards-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 16 }}>
              <EficienciaCard label="MI EFICIENCIA" valor="—" subtexto="Sin datos" />
              <EficienciaCard label="EFICIENCIA MÓDULO" valor="—" subtexto="Sin datos" />
            </div>

            <div style={{ marginTop: 16, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button className="btn-secundario" style={{ flex: 1 }} onClick={() => setResumenAbierto(true)}>
                <i className="fas fa-calendar-day" style={{ marginRight: 8 }}></i>
                Ver Resumen de Hoy
              </button>
              {/* botón pequeño para probar el modal de alerta */}
              <button className="btn-secundario" style={{ flex: 1 }} onClick={() => setAlertaAbierta(true)}>
                <i className="fas fa-bell" style={{ marginRight: 8 }}></i>
                Probar Alerta
              </button>
            </div>
          </div>

          {/* panel derecho: botón de pulsación */}
          <div className="pulsacion-panel-derecho">
            <div className="unidades-completadas-caja">
              <div className="unidades-label">PULSACIONES HOY</div>
              <div className="unidades-numero">{contador}</div>
            </div>

            <button className="btn-pulsacion" onClick={pulsar}>
              <i className="fas fa-hand-pointer"></i>
              <span>PULSACIÓN</span>
            </button>

            <div className="tiempo-ultima-pulsacion">
              <span>TURNO ACTUAL: </span>
              <span style={{ fontWeight: 700 }}>
                {lote.om} — {operacion.nombreCorto}
              </span>
            </div>
          </div>

        </div>
      </main>

      {/* modal resumen del día */}
      {resumenAbierto && (
        <div
          className="modal-overlay show"
          onClick={e => { if (e.target.classList.contains('modal-overlay')) setResumenAbierto(false) }}
        >
          <div className="modal-contenido" style={{ maxWidth: 600 }}>
            <div className="modal-header">
              <h2>
                <i className="fas fa-calendar-day" style={{ marginRight: 8 }}></i>
                Resumen de Hoy
              </h2>
              <button className="modal-close-btn" onClick={() => setResumenAbierto(false)}>&times;</button>
            </div>
            <div className="modal-body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
                <EficienciaCard label="MI EFICIENCIA HOY" valor="—" subtexto="Acumulado" />
                <EficienciaCard label="EFICIENCIA MÓDULO HOY" valor="—" subtexto="Acumulado" />
              </div>

              <h5 style={{ fontSize: 14, fontWeight: 600, color: '#334155', marginBottom: 12 }}>
                <i className="fas fa-clock" style={{ marginRight: 6, color: '#2563eb' }}></i>
                Registros de Eficiencia del Día
              </h5>

              <div className="tabla-contenedor">
                <table className="tabla">
                  <thead>
                    <tr>
                      <th>Inicio</th>
                      <th>Fin</th>
                      <th>Mi Eficiencia</th>
                      <th>Unidades</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={4} className="text-center" style={{ padding: 24, color: '#94a3b8' }}>
                        No hay registros aún. Se guardan cada 20 minutos productivos.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="modal-footer">
                <button className="btn-secundario" onClick={() => setResumenAbierto(false)}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <AlertaBajaEficiencia
        abierto={alertaAbierta}
        onCerrar={() => setAlertaAbierta(false)}
        eficiencia="48.5"
      />
    </>
  )
}
