import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { useApp } from '../../context/AppContext'

// lote de demo para que la navegación funcione
const loteDemo = {
  om: 'OM-DEMO-001',
  referenciaIdRef: 'REF-001',
  color: 'Negro',
  totalUnidades: 150,
  fechaIngresoPlanita: '2026-05-01',
}

export default function SeleccionLote() {
  const { setLoteSeleccionado } = useApp()
  const navigate = useNavigate()

  const seleccionar = (lote) => {
    setLoteSeleccionado(lote)
    navigate('/operario/seleccion-operacion')
  }

  return (
    <>
      <Navbar tipo="operario" />
      <main className="contenedor-principal">

        <div className="tarjeta">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <h2 className="titulo-seccion">Selecciona un Lote</h2>
              <p className="subtitulo-seccion">Elige el lote sobre el cual trabajarás</p>
            </div>
            <Link to="/operario/dashboard" className="btn-secundario">
              <i className="fas fa-arrow-left" style={{ marginRight: 6 }}></i>
              Volver al Inicio
            </Link>
          </div>

          {/* indicador de pasos */}
          <div className="pasos-indicador">
            <div className="paso paso-activo">
              <div className="paso-numero">1</div>
              <span className="paso-texto">Seleccionar Lote</span>
            </div>
            <div className="paso-linea"></div>
            <div className="paso paso-inactivo">
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

        <div className="alerta-info">
          <i className="fas fa-info-circle" style={{ marginRight: 8, color: '#2563eb' }}></i>
          <span>Solo puedes ver los lotes asignados a tu módulo. Selecciona uno para continuar.</span>
        </div>

        <div className="tarjeta">
          <h3 className="titulo-seccion" style={{ fontSize: 16, marginBottom: 16 }}>
            <i className="fas fa-boxes" style={{ marginRight: 8, color: '#2563eb' }}></i>
            Lotes Disponibles
          </h3>

          {/* lote demo — en producción real esta lista vendría del backend */}
          <div className="lote-card">
            <div className="lote-card-header">
              <span className="lote-om">{loteDemo.om}</span>
              <span className="badge-estado badge-en-proceso">Disponible</span>
            </div>
            <div className="lote-card-body">
              <div className="lote-dato">
                <span className="lote-dato-label">Referencia</span>
                <span className="lote-dato-valor">{loteDemo.referenciaIdRef}</span>
              </div>
              <div className="lote-dato">
                <span className="lote-dato-label">Color</span>
                <span className="lote-dato-valor">{loteDemo.color}</span>
              </div>
              <div className="lote-dato">
                <span className="lote-dato-label">Total Unidades</span>
                <span className="lote-dato-valor">{loteDemo.totalUnidades}</span>
              </div>
              <div className="lote-dato">
                <span className="lote-dato-label">Fecha Ingreso</span>
                <span className="lote-dato-valor">{loteDemo.fechaIngresoPlanita}</span>
              </div>
            </div>
            <div className="lote-card-footer">
              <button
                className="btn-principal"
                style={{ width: '100%', marginTop: 12 }}
                onClick={() => seleccionar(loteDemo)}
              >
                <i className="fas fa-check" style={{ marginRight: 6 }}></i>
                Seleccionar este Lote
              </button>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
