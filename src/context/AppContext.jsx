import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [rol, setRol] = useState(() => localStorage.getItem('optimak_rol') || null)
  const [loteSeleccionado, setLoteSeleccionado] = useState(null)
  const [operacionSeleccionada, setOperacionSeleccionada] = useState(null)

  const login = (rolElegido) => {
    setRol(rolElegido)
    localStorage.setItem('optimak_rol', rolElegido)
  }

  const logout = () => {
    setRol(null)
    localStorage.removeItem('optimak_rol')
    setLoteSeleccionado(null)
    setOperacionSeleccionada(null)
  }

  return (
    <AppContext.Provider value={{ rol, login, logout, loteSeleccionado, setLoteSeleccionado, operacionSeleccionada, setOperacionSeleccionada }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
