import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { useApp } from '../../context/AppContext'

// operaciones demo para que la navegación funcione
const operacionesDemo = [
  { id: 1, nombreCorto: 'Unir Costados', detalle: 'Unir ambos costados de la prenda con máquina fileteadora', maquina: 'FIL', samOperacion: 1.250 },
  { id: 2, nombreCorto: 'Coser Cinturilla', detalle: 'Aplicar y coser la cinturilla elástica en la pretina', maquina: 'PLA', samOperacion: 0.980 },
  { id: 3, nombreCorto: 'Rematar Basta', detalle: 'Rematar la basta inferior con recubridora doble aguja', maquina: 'REC', samOperacion: 0.750 },
]

export default function SeleccionOperacion() {
  const { loteSeleccionado, setOperacionSeleccionada } = useApp()
  const navigate = useNavigate()

  const lote = loteSeleccionado || { om: 'OM-DEMO-001', referenciaIdRef: 'REF-001', color: 'Negro', totalUnidades: 150 }

  const seleccionar = (op) => {
    setOperacionSeleccionada(op)
    navigate('/operario/pulsacion')
  }

  return (
    <>
      <Navbar tipo="operario" />
      <main className="contenedor-principal">

        <div className="tarjeta">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <h2 className="titulo-seccion">Selecciona una Operación</h2>
              <p className="subtitulo-seccion">Elige la operación que realizarás</p>
            </div>
            <Link to="/operario/seleccion-lote" className="btn-secundario">
              <i className="fas fa-arrow-left" style={{ marginRight: 6 }}></i>
              Volver a Lotes
            </Link>
          </div>

          <div className="pasos-indicador">
            <div className="paso paso-completado">
              <div className="paso-numero"><i className="fas fa-check"></i></div>
              <span className="paso-texto">Seleccionar Lote</span>
            </div>
            <div className="paso-linea paso-linea-completada"></div>
            <div className="paso paso-activo">
              <div className="paso-numero">2</div>
              <span className="paso-texto">Seleccionar Operación</span>
            </div>
            <div className="paso-linea"></div>
            <div className="paso paso-inactivo">
              <div className="paso-numero">3</div>
              <span className="paso-texto">Registrar Pulsaciones</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 20, alignItems: 'start' }}>

          {/* panel izquierdo con info del lote */}
          <div className="tarjeta" style={{ marginBottom: 0 }}>
            <h3 className="titulo-seccion" style={{ fontSize: 14, marginBottom: 12 }}>
              <i className="fas fa-box" style={{ marginRight: 6, color: '#2563eb' }}></i>
              Lote Seleccionado
            </h3>
            <div style={{ fontSize: 13, color: '#64748b' }}>
              <p style={{ marginBottom: 6 }}><strong style={{ color: '#334155' }}>OM:</strong> {lote.om}</p>
              <p style={{ marginBottom: 6 }}><strong style={{ color: '#334155' }}>Referencia:</strong> {lote.referenciaIdRef}</p>
              <p style={{ marginBottom: 6 }}><strong style={{ color: '#334155' }}>Color:</strong> {lote.color}</p>
              <p style={{ marginBottom: 0 }}><strong style={{ color: '#334155' }}>Unidades:</strong> {lote.totalUnidades}</p>
            </div>
            <hr style={{ margin: '16px 0', borderColor: '#e2e8f0' }} />
            <p style={{ fontSize: 12, color: '#94a3b8' }}>
              Haz clic en <i className="fas fa-play"></i> para comenzar con esa operación.
            </p>
          </div>

          {/* lista de operaciones */}
          <div className="tarjeta" style={{ marginBottom: 0 }}>
            <h3 className="titulo-seccion" style={{ fontSize: 16, marginBottom: 16 }}>
              <i className="fas fa-list-ol" style={{ marginRight: 8, color: '#2563eb' }}></i>
              Operaciones de la Referencia
            </h3>
            <div>
              {operacionesDemo.map((op, i) => (
                <div key={op.id} className="operacion-card">
                  <div className="operacion-numero">{i + 1}</div>
                  <div className="operacion-info">
                    <div className="operacion-nombre">{op.nombreCorto}</div>
                    <div className="operacion-detalle">{op.detalle}</div>
                    <div className="operacion-maquina">
                      <i className="fas fa-cog" style={{ marginRight: 4, color: '#94a3b8' }}></i>
                      <span>{op.maquina}</span>
                    </div>
                  </div>
                  <div className="operacion-sam">
                    <span className="sam-valor">{op.samOperacion.toFixed(3)}</span>
                    <span className="sam-label">SAM</span>
                  </div>
                  <div className="operacion-accion">
                    <button className="btn-principal btn-sm" onClick={() => seleccionar(op)}>
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
