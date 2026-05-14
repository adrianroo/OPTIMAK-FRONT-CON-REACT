import { useEffect } from 'react'

export default function Modal({ titulo, abierto, onCerrar, children, maxWidth = '700px' }) {
  useEffect(() => {
    const cerrarConEsc = (e) => {
      if (e.key === 'Escape' && abierto) onCerrar()
    }
    document.addEventListener('keydown', cerrarConEsc)
    return () => document.removeEventListener('keydown', cerrarConEsc)
  }, [abierto, onCerrar])

  if (!abierto) return null

  return (
    <div
      className="modal-overlay show"
      onClick={e => { if (e.target.classList.contains('modal-overlay')) onCerrar() }}
    >
      <div className="modal-contenido" style={{ maxWidth }}>
        <div className="modal-header">
          <h2>{titulo}</h2>
          <button className="modal-close-btn" onClick={onCerrar}>&times;</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  )
}
