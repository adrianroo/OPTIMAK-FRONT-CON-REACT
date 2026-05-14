import { useState } from 'react'

// modal de alerta cuando la eficiencia está por debajo del mínimo
export default function AlertaBajaEficiencia({ abierto, onCerrar, eficiencia = '48.5' }) {
  const [justificacion, setJustificacion] = useState('')

  if (!abierto) return null

  const handleEnviar = () => {
    setJustificacion('')
    onCerrar()
  }

  return (
    <div
      className="modal-overlay show"
      onClick={e => { if (e.target.classList.contains('modal-overlay')) onCerrar() }}
    >
      <div className="modal-contenido" style={{ maxWidth: 480 }}>
        <div className="modal-header" style={{ background: '#ef4444', borderRadius: '16px 16px 0 0' }}>
          <h2 style={{ fontSize: 18 }}>
            <i className="fas fa-bell" style={{ marginRight: 8 }}></i>
            Alerta de Eficiencia
          </h2>
          <button className="modal-close-btn" onClick={onCerrar}>&times;</button>
        </div>
        <div className="modal-body">
          <span className="badge-notificacion badge-personal" style={{ marginBottom: 16, display: 'inline-block' }}>
            NOTIFICACIÓN PERSONAL
          </span>

          <div className="alerta-eficiencia-caja">
            <div className="alerta-porcentaje">{eficiencia}%</div>
            <div>
              <div style={{ fontWeight: 600, color: '#334155', fontSize: 14 }}>
                Tu eficiencia actual está por debajo del mínimo
              </div>
              <div style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>
                Mínimo requerido: 65%
              </div>
            </div>
          </div>

          <div className="form-grupo" style={{ marginTop: 16 }}>
            <label className="form-label">
              Justificación{' '}
              <span style={{ color: '#f59e0b', fontWeight: 400, textTransform: 'none' }}>(Opcional)</span>
            </label>
            <textarea
              className="form-input"
              rows={4}
              placeholder="Describe la razón de la baja eficiencia (ej: falla de máquina, material defectuoso, pausa médica, etc.)"
              value={justificacion}
              onChange={e => setJustificacion(e.target.value)}
            />
            <p style={{ fontSize: 12, color: '#94a3b8', marginTop: 8 }}>
              Esta información ayudará al supervisor a entender la situación.
            </p>
          </div>

          <div className="modal-footer">
            <button className="btn-secundario" onClick={onCerrar}>Cerrar</button>
            <button className="btn-principal" onClick={handleEnviar}>
              <i className="fas fa-paper-plane" style={{ marginRight: 6 }}></i>
              Enviar Justificación
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
