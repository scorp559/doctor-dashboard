import { Helmet } from 'react-helmet-async'
import Card from '../components/Card'
import Table from '../components/Table'
import { earnings } from '../data/sample'

export default function EarningsHistory() {
  const columns = [
    {
      key: 'date',
      title: 'Date',
    },
    {
      key: 'product',
      title: 'Product',
    },
    {
      key: 'coupon',
      title: 'Coupon Code',
    },
    {
      key: 'commission',
      title: 'Commission',
      render: (row: typeof earnings[0]) => `$${row.commission.toLocaleString()}`,
    },
    {
      key: 'status',
      title: 'Status',
      render: (row: typeof earnings[0]) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            row.status === 'completed'
              ? 'bg-green-100 text-brand-green'
              : row.status === 'pending'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-brand-error'
          }`}
        >
          {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
        </span>
      ),
    },
  ]

  return (
    <>
      <Helmet>
        <title>Earnings History - Amrutam Affiliate</title>
        <meta name="description" content="View your affiliate earnings history" />
      </Helmet>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-brand-dark">Earnings History</h1>
          <p className="text-brand-gray mt-1">Track your commission earnings</p>
        </div>

        <Card>
          <Table columns={columns} data={earnings} />
        </Card>
      </div>
    </>
  )
}
