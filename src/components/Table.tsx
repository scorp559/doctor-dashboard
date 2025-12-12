import { ReactNode } from 'react'

interface Column<T> {
  key: string
  title: string
  render?: (row: T) => ReactNode
}

interface TableProps<T> {
  columns: Column<T>[]
  data: T[]
}

export default function Table<T extends Record<string, any>>({
  columns,
  data,
}: TableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-4 text-left" style={{ width: '60px' }}>
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded border-gray-300"
                style={{ accentColor: '#3A643B' }}
              />
            </th>
            <th 
              className="px-4 py-4 text-left text-[12px] capitalize"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                color: '#000000',
                lineHeight: '100%',
                letterSpacing: '-0.02em'
              }}
            >
              S. No.
            </th>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-4 text-left text-[12px] capitalize"
                style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  color: '#000000',
                  lineHeight: '100%',
                  letterSpacing: '-0.02em'
                }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr 
              key={row.id || rowIndex} 
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-4 align-middle">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-gray-300"
                  style={{ accentColor: '#3A643B' }}
                />
              </td>
              <td 
                className="px-4 py-4 text-[12px] align-middle"
                style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  color: '#6B7280',
                  lineHeight: '21px',
                  letterSpacing: '0%'
                }}
              >
                {rowIndex + 1}.
              </td>
              {columns.map((column) => (
                <td 
                  key={column.key} 
                  className="px-4 py-4 text-[12px] align-middle"
                  style={{ 
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 500,
                    color: '#6B7280',
                    lineHeight: '21px',
                    letterSpacing: '0%'
                  }}
                >
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
