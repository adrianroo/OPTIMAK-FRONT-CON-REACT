import { useState } from 'react'
import Navbar from '../../components/Navbar'
import TabPanel from '../../components/TabPanel'
import DataTable from '../../components/DataTable'
import Modal from '../../components/Modal'

export default function Produccion() {
  const [modalLote, setModalLote] = useState(false)
  const [modalRef, setModalRef] = useState(false)
  const [modalOp, setModalOp] = useState(false)

  // tab lotes
  const tabLotes = (
    <div>
      <div className="action-bar">
        <div></div>
        <button className="btn-principal" onClick={() => setModalLote(true)}>
          <i className="fas fa-plus me-2"></i>Crear Lote
        </button>
      </div>
      <DataTable
        columnas={['OM', 'Referencia', 'Remisión', 'Color', 'Total Unidades', 'Módulo', 'Fecha Ingreso', 'Acciones']}
        mensajeVacio="No hay lotes registrados"
      />
    </div>
  )

  // tab referencias
  const tabReferencias = (
    <div>
      <div className="action-bar">
        <div></div>
        <button className="btn-principal" onClick={() => setModalRef(true)}>
          <i className="fas fa-plus me-2"></i>Crear Referencia
        </button>
      </div>
      <DataTable
        columnas={['ID Referencia', 'Tipo de Prenda', 'Cliente', 'Colección', 'SAM Total', 'Precio Unitario', 'N° Operaciones', 'Acciones']}
        mensajeVacio="No hay referencias registradas"
      />
    </div>
  )

  // tab operaciones
  const tabOperaciones = (
    <div>
      <div className="action-bar">
        <div></div>
        <button className="btn-principal" onClick={() => setModalOp(true)}>
          <i className="fas fa-plus me-2"></i>Crear Operación
        </button>
      </div>
      <DataTable
        columnas={['ID', 'Referencia', 'Nombre Operación', 'Detalle', 'Máquina', 'SAM', 'Acciones']}
        mensajeVacio="No hay operaciones registradas"
      />
    </div>
  )

  return (
    <>
      <Navbar tipo="admin" />
      <main className="contenedor-principal">
        <div className="tarjeta">
          <h2 className="titulo-seccion">Gestión de Producción</h2>
          <p className="subtitulo-seccion">Módulo Administrativo</p>
          <TabPanel tabs={[
            { label: 'Lotes de Producción', contenido: tabLotes },
            { label: 'Referencias', contenido: tabReferencias },
            { label: 'Operaciones', contenido: tabOperaciones },
          ]} />
        </div>
      </main>

      {/* acá va el modal de crear lote */}
      <Modal titulo="Crear Nuevo Lote" abierto={modalLote} onCerrar={() => setModalLote(false)}>
        <form onSubmit={e => { e.preventDefault(); setModalLote(false) }}>
          <div className="form-grid">
            <div className="form-grupo">
              <label className="form-label">OM (Orden Maestra) *</label>
              <input type="text" className="form-input" placeholder="OM-2025-001" />
            </div>
            <div className="form-grupo">
              <label className="form-label">N° Remisión Entrada *</label>
              <input type="text" className="form-input" placeholder="REM-001" />
            </div>
            <div className="form-grupo">
              <label className="form-label">OC (Orden de Compra)</label>
              <input type="text" className="form-input" placeholder="Opcional" />
            </div>
            <div className="form-grupo">
              <label className="form-label">Referencia *</label>
              <select className="form-input">
                <option value="">Seleccione una referencia...</option>
              </select>
            </div>
            <div className="form-grupo">
              <label className="form-label">Color *</label>
              <input type="text" className="form-input" placeholder="Negro" />
            </div>
            <div className="form-grupo">
              <label className="form-label">Módulo Asignado *</label>
              <select className="form-input">
                <option value="">Seleccione un módulo...</option>
              </select>
            </div>
            <div className="form-grupo">
              <label className="form-label">Fecha Ingreso a Planta *</label>
              <input type="date" className="form-input" />
            </div>
          </div>
          <hr />
          <p className="form-label mb-2">Cantidades por talla:</p>
          <div className="row g-2">
            {['XXL', 'XL', 'L', 'M', 'S', 'XS'].map(talla => (
              <div key={talla} className="col-md-2">
                <label className="form-label">{talla}</label>
                <input type="number" className="form-input" defaultValue="0" min="0" />
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn-secundario" onClick={() => setModalLote(false)}>Cancelar</button>
            <button type="submit" className="btn-principal">Guardar Lote</button>
          </div>
        </form>
      </Modal>

      {/* modal crear referencia */}
      <Modal titulo="Crear Nueva Referencia" abierto={modalRef} onCerrar={() => setModalRef(false)}>
        <form onSubmit={e => { e.preventDefault(); setModalRef(false) }}>
          <div className="form-grid">
            <div className="form-grupo">
              <label className="form-label">ID Referencia *</label>
              <input type="text" className="form-input" placeholder="REF-29781" maxLength={15} />
            </div>
            <div className="form-grupo">
              <label className="form-label">Tipo de Prenda *</label>
              <input type="text" className="form-input" placeholder="Ej: Legging largo dama" />
            </div>
            <div className="form-grupo">
              <label className="form-label">Cliente *</label>
              <input type="text" className="form-input" placeholder="Almacenes Éxito" />
            </div>
            <div className="form-grupo">
              <label className="form-label">Colección</label>
              <input type="text" className="form-input" placeholder="Opcional" />
            </div>
            <div className="form-grupo">
              <label className="form-label">Precio Unitario *</label>
              <input type="number" className="form-input" placeholder="0.00" step="0.01" min="0.01" />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn-secundario" onClick={() => setModalRef(false)}>Cancelar</button>
            <button type="submit" className="btn-principal">Guardar Referencia</button>
          </div>
        </form>
      </Modal>

      {/* modal crear operación */}
      <Modal titulo="Crear Nueva Operación" abierto={modalOp} onCerrar={() => setModalOp(false)}>
        <form onSubmit={e => { e.preventDefault(); setModalOp(false) }}>
          <div className="form-grid">
            <div className="form-grupo">
              <label className="form-label">Referencia Asociada *</label>
              <select className="form-input">
                <option value="">Seleccione una referencia...</option>
              </select>
            </div>
            <div className="form-grupo">
              <label className="form-label">Nombre Operación *</label>
              <input type="text" className="form-input" placeholder="Ej: Unir Costados" maxLength={40} />
            </div>
            <div className="form-grupo">
              <label className="form-label">Tipo de Máquina *</label>
              <select className="form-input">
                <option value="">Seleccione...</option>
                <option>Manual</option>
                <option value="PLA">Plana (PLA)</option>
                <option value="FIL">Fileteadora (FIL)</option>
                <option value="REC">Recubridora (REC)</option>
                <option value="PLAN">Plana Industrial (PLAN)</option>
                <option value="DOB">Dobladora (DOB)</option>
              </select>
            </div>
            <div className="form-grupo">
              <label className="form-label">SAM (minutos estándar) *</label>
              <input type="number" className="form-input" placeholder="1.20" step="0.01" min="0.01" />
            </div>
          </div>
          <div className="form-grupo">
            <label className="form-label">Detalle de la Operación *</label>
            <textarea
              className="form-input"
              rows={3}
              placeholder="Descripción detallada de cómo ejecutar la operación..."
              maxLength={255}
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn-secundario" onClick={() => setModalOp(false)}>Cancelar</button>
            <button type="submit" className="btn-principal">Guardar Operación</button>
          </div>
        </form>
      </Modal>
    </>
  )
}
