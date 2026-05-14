export default function EficienciaCard({ label, valor = '—', subtexto = '' }) {
  const colorValor =
    valor === '—' || valor === null
      ? '#94a3b8'
      : parseFloat(valor) >= 85
      ? '#4ade80'
      : parseFloat(valor) >= 65
      ? '#fbbf24'
      : '#f87171'

  return (
    <div className="eficiencia-card">
      <div className="eficiencia-label">{label}</div>
      <div className="eficiencia-valor" style={{ color: colorValor }}>
        {valor === '—' || valor === null ? '—' : `${valor}%`}
      </div>
      <div className="eficiencia-estado">{subtexto || (valor === '—' ? 'Sin datos' : '')}</div>
    </div>
  )
}
