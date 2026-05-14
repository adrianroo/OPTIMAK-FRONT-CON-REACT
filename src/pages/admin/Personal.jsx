import { useState } from 'react'
import Navbar from '../../components/Navbar'
import TabPanel from '../../components/TabPanel'
import DataTable from '../../components/DataTable'
import Modal from '../../components/Modal'

export default function Personal() {
  const [modalEmpleado, setModalEmpleado] = useState(false)
  const [modalModulo, setModalModulo] = useState(false)

  // estado del tab horarios
  const [moduloHorario, setModuloHorario] = useState('')
  const [fechaHorario, setFechaHorario] = useState('')
  const [mostrarHorario, setMostrarHorario] = useState(false)
  const [horaInicio, setHoraInicio] = useState('06:00')
  const [horaFin, setHoraFin] = useState('14:20')
  const [diaNoLab, setDiaNoLab] = useState(false)
  const [pausas, setPausas] = useState([])

  const agregarPausa = () => {
    setPausas([...pausas, { tipo: 'Desayuno', hora: '09:15', duracion: 20 }])
  }

  const eliminarPausa = (idx) => {
    setPausas(pausas.filter((_, i) => i !== idx))
  }

  const tabEmpleados = (
    <div>
      <div className="action-bar">
        <div></div>
        <button className="btn-principal" onClick={() => setModalEmpleado(true)}>
          <i className="fas fa-plus me-2"></i>Crear Usuario
        </button>
      </div>
      <DataTable
        columnas={['Nombre', 'Cédula', 'Teléfono', 'Edad', 'Sexo', 'Cargo', 'Correo', 'Módulo', 'Acciones']}
        mensajeVacio="No hay operarios activos registrados"
      />
    </div>
  )

  const tabModulos = (
    <div>
      <div className="action-bar">
        <div></div>
        <button className="btn-principal" onClick={() => setModalModulo(true)}>
          <i className="fas fa-plus me-2"></i>Crear Módulo
        </button>
      </div>
      <DataTable
        columnas={['ID Módulo', 'N° Operarios Activos', 'Acciones']}
        mensajeVacio="No hay módulos operativos registrados"
      />
    </div>
  )

  const tabHorarios = (
    <div>
      <div className="info-box">
        <p><strong>Configuración de Bloques de Horario por Módulo</strong></p>
        <p>Cada fecha puede tener un horario único. El sistema excluye automáticamente los tiempos de pausa para calcular solo el tiempo productivo.</p>
      </div>

      {/* formulario de selección */}
      <form onSubmit={e => { e.preventDefault(); if (moduloHorario && fechaHorario) setMostrarHorario(true) }}>
        <div className="form-grid" style={{ marginBottom: 16 }}>
          <div className="form-grupo">
            <label className="form-label">Seleccionar Módulo</label>
            <select className="form-input" value={moduloHorario} onChange={e => { setModuloHorario(e.target.value); setMostrarHorario(false) }}>
              <option value="">Seleccione un módulo...</option>
              <option value="A">Módulo A</option>
              <option value="B">Módulo B</option>
              <option value="C">Módulo C</option>
            </select>
          </div>
          <div className="form-grupo">
            <label className="form-label">Fecha a Configurar</label>
            <input
              type="date"
              className="form-input"
              value={fechaHorario}
              onChange={e => { setFechaHorario(e.target.value); setMostrarHorario(false) }}
            />
          </div>
          <div className="form-grupo" style={{ display: 'flex', alignItems: 'flex-end' }}>
            <button type="submit" className="btn-principal" style={{ width: '100%' }}>
              <i className="fas fa-search me-2"></i>Consultar / Configurar
            </button>
          </div>
        </div>
      </form>

      {mostrarHorario && (
        <div className="tarjeta" style={{ background: '#f5f7fa', padding: 20 }}>
          <div style={{ marginBottom: 20 }}>
            <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
              Configurando:{' '}
              <span style={{ color: '#2563eb' }}>Módulo {moduloHorario} / {fechaHorario}</span>
            </h4>
            <p style={{ fontSize: 13, color: '#64748b', margin: 0 }}>
              Define la jornada y las pausas para esta fecha específica.
            </p>
          </div>

          <h5 style={{ fontSize: 16, fontWeight: 700, marginBottom: 15 }}>Jornada Laboral</h5>
          <div className="row g-3 mb-3">
            <div className="col-md-4">
              <label className="form-label">Hora Inicio Jornada *</label>
              <input type="time" className="form-input" value={horaInicio} onChange={e => setHoraInicio(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Hora Fin Jornada *</label>
              <input type="time" className="form-input" value={horaFin} onChange={e => setHoraFin(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Día No Laborable</label>
              <div style={{ padding: '8px 0' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    style={{ width: 18, height: 18 }}
                    checked={diaNoLab}
                    onChange={e => setDiaNoLab(e.target.checked)}
                  />
                  <span style={{ fontSize: 14 }}>Marcar como festivo / descanso</span>
                </label>
              </div>
            </div>
          </div>

          <h5 style={{ fontSize: 16, fontWeight: 700, margin: '20px 0 15px' }}>Pausas y Recesos</h5>

          {pausas.length === 0 && (
            <p style={{ color: '#94a3b8', fontSize: 14, marginBottom: 12 }}>
              No hay pausas configuradas. Agrega una con el botón de abajo.
            </p>
          )}

          {pausas.map((p, i) => (
            <div key={i} className="row g-3 mb-3 align-items-end" style={{ background: 'white', padding: 15, borderRadius: 8 }}>
              <div className="col-md-4">
                <label className="form-label">Tipo de Pausa</label>
                <select
                  className="form-input"
                  value={p.tipo}
                  onChange={e => { const np = [...pausas]; np[i].tipo = e.target.value; setPausas(np) }}
                >
                  <option>Desayuno</option>
                  <option>Almuerzo</option>
                  <option>Pausa Activa</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">Hora Inicio</label>
                <input
                  type="time"
                  className="form-input"
                  value={p.hora}
                  onChange={e => { const np = [...pausas]; np[i].hora = e.target.value; setPausas(np) }}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Duración (min)</label>
                <input
                  type="number"
                  className="form-input"
                  value={p.duracion}
                  min="1"
                  onChange={e => { const np = [...pausas]; np[i].duracion = e.target.value; setPausas(np) }}
                />
              </div>
              <div className="col-md-2">
                <button type="button" className="btn-icono" title="Eliminar pausa" onClick={() => eliminarPausa(i)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}

          <button type="button" className="btn-secundario mt-2" onClick={agregarPausa}>
            <i className="fas fa-plus me-2"></i>Agregar Pausa
          </button>

          <div className="text-end mt-4">
            <button type="button" className="btn-secundario me-2" onClick={() => setMostrarHorario(false)}>Cancelar</button>
            <button type="button" className="btn-principal" onClick={() => setMostrarHorario(false)}>
              <i className="fas fa-save me-2"></i>Guardar Configuración
            </button>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <>
      <Navbar tipo="admin" />
      <main className="contenedor-principal">
        <div className="tarjeta">
          <h2 className="titulo-seccion">Gestión de Personal</h2>
          <p className="subtitulo-seccion">Módulo Administrativo</p>
          <TabPanel tabs={[
            { label: 'Gestión de Usuarios', contenido: tabEmpleados },
            { label: 'Módulos Operativos', contenido: tabModulos },
            { label: 'Bloques de Horario', contenido: tabHorarios },
          ]} />
        </div>
      </main>

      {/* modal crear empleado */}
      <Modal titulo="Crear Nuevo Operario" abierto={modalEmpleado} onCerrar={() => setModalEmpleado(false)}>
        <form onSubmit={e => { e.preventDefault(); setModalEmpleado(false) }}>
          <div className="form-grid">
            <div className="form-grupo">
              <label className="form-label">Número de Cédula *</label>
              <input type="text" className="form-input" placeholder="1000000001" />
            </div>
            <div className="form-grupo">
              <label className="form-label">Nombre Completo *</label>
              <input type="text" className="form-input" placeholder="Nombre completo" />
            </div>
            <div className="form-grupo">
              <label className="form-label">Teléfono</label>
              <input type="tel" className="form-input" placeholder="3001234567" />
            </div>
            <div className="form-grupo">
              <label className="form-label">Edad *</label>
              <input type="number" className="form-input" placeholder="25" min="16" max="99" />
            </div>
            <div className="form-grupo">
              <label className="form-label">Sexo *</label>
              <select className="form-input">
                <option value="">Seleccione...</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div className="form-grupo">
              <label className="form-label">Cargo / Rol *</label>
              <input type="text" className="form-input" defaultValue="Operario" />
            </div>
            <div className="form-grupo">
              <label className="form-label">Correo Electrónico</label>
              <input type="email" className="form-input" placeholder="correo@ejemplo.com" />
            </div>
            <div className="form-grupo">
              <label className="form-label">Módulo Asignado *</label>
              <select className="form-input">
                <option value="">Seleccione un módulo...</option>
                <option value="A">Módulo A</option>
                <option value="B">Módulo B</option>
                <option value="C">Módulo C</option>
              </select>
            </div>
            <div className="form-grupo">
              <label className="form-label">Contraseña Inicial *</label>
              <input type="password" className="form-input" placeholder="Contraseña" />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn-secundario" onClick={() => setModalEmpleado(false)}>Cancelar</button>
            <button type="submit" className="btn-principal">Crear Operario</button>
          </div>
        </form>
      </Modal>

      {/* modal crear módulo */}
      <Modal titulo="Crear Nuevo Módulo Operativo" abierto={modalModulo} onCerrar={() => setModalModulo(false)} maxWidth="480px">
        <div className="info-box">
          <p><strong>Nota:</strong> El ID del módulo es un código de hasta 2 caracteres (ej: 1, 2, A, B).</p>
        </div>
        <form onSubmit={e => { e.preventDefault(); setModalModulo(false) }}>
          <div className="form-grupo">
            <label className="form-label">ID Módulo *</label>
            <input type="text" className="form-input" placeholder="Ej: 1, 2, 3..." maxLength={2} />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn-secundario" onClick={() => setModalModulo(false)}>Cancelar</button>
            <button type="submit" className="btn-principal">Crear Módulo</button>
          </div>
        </form>
      </Modal>
    </>
  )
}
