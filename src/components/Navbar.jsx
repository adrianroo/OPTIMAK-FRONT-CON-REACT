import { NavLink, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function Navbar({ tipo }) {
  const { logout } = useApp()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  if (tipo === 'admin') {
    return (
      <header className="header-principal">
        <div className="header-logo-container">
          <img
            src="/img/logoreducido.png"
            alt="OPTIMAK"
            className="header-logo-img"
            onError={e => e.target.style.display = 'none'}
          />
          <h1 className="header-titulo">OPTIMAK</h1>
        </div>
        <nav className="header-nav">
          <NavLink to="/admin/dashboard">Inicio</NavLink>
          <NavLink to="/admin/produccion">Producción</NavLink>
          <NavLink to="/admin/personal">Personal</NavLink>
          <NavLink to="/admin/informes">Informes</NavLink>
          <NavLink to="/admin/monitoreo">Monitoreo</NavLink>
        </nav>
        <div className="header-usuario">
          <i className="fas fa-user-circle"></i>
          <span className="header-usuario-texto">Admin</span>
          <button className="btn-icono" onClick={handleLogout} title="Cerrar sesión">
            <i className="fas fa-sign-out-alt"></i>
          </button>
        </div>
      </header>
    )
  }

  return (
    <header className="header-principal">
      <div className="header-logo-container">
        <img
          src="/img/logoreducido.png"
          alt="OPTIMAK"
          className="header-logo-img"
          onError={e => e.target.style.display = 'none'}
        />
        <h1 className="header-titulo">OPTIMAK</h1>
      </div>
      <nav className="header-nav">
        <NavLink to="/operario/dashboard">Inicio</NavLink>
        <NavLink to="/operario/seleccion-lote">Lotes</NavLink>
      </nav>
      <div className="header-usuario">
        <span className="badge-modulo">MÓDULO —</span>
        <i className="fas fa-user-circle"></i>
        <span className="header-usuario-texto">Operario</span>
        <button className="btn-icono" onClick={handleLogout} title="Cerrar sesión">
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </header>
  )
}
