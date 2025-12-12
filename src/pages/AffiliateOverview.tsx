import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Table from '../components/Table'
import { referrals } from '../data/sample'

export default function AffiliateOverview() {
  const columns = [
    {
      key: 'name',
      title: 'Source',
      render: (row: typeof referrals[0]) => (
        <div>
          <p className="font-medium text-brand-dark">{row.name}</p>
          <p className="text-xs text-brand-gray">{row.product}</p>
        </div>
      ),
    },
    {
      key: 'clicks',
      title: 'Clicks',
      render: (row: typeof referrals[0]) => row.clicks.toLocaleString(),
    },
    {
      key: 'orders',
      title: 'Orders',
      render: (row: typeof referrals[0]) => row.orders,
    },
    {
      key: 'revenue',
      title: 'Revenue',
      render: (row: typeof referrals[0]) => `$${row.revenue.toLocaleString()}`,
    },
    {
      key: 'commission',
      title: 'Commission',
      render: (row: typeof referrals[0]) => `$${row.commission.toLocaleString()}`,
    },
  ]

  return (
    <>
      <Helmet>
        <title>Affiliate Overview - Amrutam Affiliate</title>
        <meta name="description" content="View all your affiliate links, clicks, orders and earnings" />
      </Helmet>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-brand-dark">Affiliate Overview</h1>
            <p className="text-brand-gray mt-1">Track your referral performance</p>
          </div>
          <Link
            to="/affiliate/referral-tool"
            className="px-4 py-2 bg-brand-green text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            Create Link
          </Link>
        </div>

        <Card>
          <Table columns={columns} data={referrals} />
        </Card>
      </div>
    </>
  )
}
