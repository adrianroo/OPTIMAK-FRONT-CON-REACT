import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function Login() {
  const [identificacion, setIdentificacion] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [rol, setRol] = useState('')
  const [error, setError] = useState('')
  const { login } = useApp()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!rol) {
      setError('Por favor selecciona un rol para continuar.')
      return
    }
    login(rol)
    navigate(rol === 'admin' ? '/admin/dashboard' : '/operario/dashboard')
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="/img/logoazulcompleto.png"
          alt="OPTIMAK"
          className="login-logo"
          onError={e => e.target.style.display = 'none'}
        />
        <h1 className="login-titulo">Bienvenido a OPTIMAK</h1>
        <p className="login-subtitulo">Ingresa tus credenciales para continuar</p>

        {error && (
          <div className="alert alert-danger" role="alert" style={{ borderRadius: 8, fontSize: 14, marginBottom: 16 }}>
            <i className="fas fa-exclamation-circle me-2"></i>{error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-grupo">
            <label className="form-label">Número de Identificación</label>
            <input
              type="text"
              className="form-input"
              placeholder="Ingresa tu ID o cédula"
              value={identificacion}
              onChange={e => setIdentificacion(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div className="form-grupo">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-input"
              placeholder="Ingresa tu contraseña"
              value={contrasena}
              onChange={e => setContrasena(e.target.value)}
              required
            />
          </div>

          <div className="form-grupo">
            <label className="form-label">Selecciona tu rol</label>
            <div className="role-selector">
              <div className="role-option">
                <input
                  type="radio"
                  id="operario"
                  name="rol"
                  value="operario"
                  onChange={() => { setRol('operario'); setError('') }}
                />
                <label htmlFor="operario" className="role-label">
                  <div className="role-icon"><i className="fas fa-hard-hat"></i></div>
                  <div>Operario</div>
                </label>
              </div>
              <div className="role-option">
                <input
                  type="radio"
                  id="admin"
                  name="rol"
                  value="admin"
                  onChange={() => { setRol('admin'); setError('') }}
                />
                <label htmlFor="admin" className="role-label">
                  <div className="role-icon"><i className="fas fa-user-tie"></i></div>
                  <div>Administrador</div>
                </label>
              </div>
            </div>
          </div>

          <button type="submit" className="btn-principal w-100">INICIAR SESIÓN</button>
        </form>

        <p className="text-center mt-3" style={{ fontSize: 12, color: '#64748b' }}>
          Sistema de Gestión de Producción — Makairos SAS
        </p>
      </div>
    </div>
  )
}
