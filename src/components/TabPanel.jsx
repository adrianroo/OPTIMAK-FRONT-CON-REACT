import { useState } from 'react'

export default function TabPanel({ tabs }) {
  const [activo, setActivo] = useState(0)

  return (
    <div>
      <div className="tabs-contenedor">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`tab${activo === i ? ' active' : ''}`}
            onClick={() => setActivo(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs[activo].contenido}
      </div>
    </div>
  )
}
