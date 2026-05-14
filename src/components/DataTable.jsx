// tabla genérica con mensaje cuando está vacía
export default function DataTable({ columnas, filas = [], mensajeVacio = 'No hay datos para mostrar' }) {
  return (
    <div className="tabla-contenedor">
      <table className="tabla">
        <thead>
          <tr>
            {columnas.map((col, i) => <th key={i}>{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {filas.length === 0 ? (
            <tr>
              <td
                colSpan={columnas.length}
                className="text-center"
                style={{ padding: '40px', color: '#64748b' }}
              >
                {mensajeVacio}
              </td>
            </tr>
          ) : filas.map((fila, i) => (
            <tr key={i}>
              {fila.map((celda, j) => <td key={j}>{celda}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
