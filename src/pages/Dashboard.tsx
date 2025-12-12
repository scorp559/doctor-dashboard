import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Table from '../components/Table'
import TabNavigation, { TabValue } from '../components/TabNavigation'
import PillCard from '../components/PillCard'
import FilterBar from '../components/FilterBar'
import { stats, referrals } from '../data/sample'
import CalendarIcon from '../assets/images/calendar.svg.svg'
import OrderIcon from '../assets/images/order.svg'
import WalletIcon from '../assets/images/empty-wallet.svg.svg'
import ProfileAddIcon from '../assets/images/profile-add.svg.svg'

export default function Dashboard() {
  const [timePeriod, setTimePeriod] = useState<TabValue>('month')

  const columns = [
    {
      key: 'name',
      title: 'Product Name',
      render: (row: typeof referrals[0]) => (
        <div className="flex items-center gap-3">
          <img 
            src={`https://i.pravatar.cc/40?img=${row.id}`}
            alt={row.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span 
              className="text-[14px]"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                color: '#374151'
              }}
            >
              {row.name}
            </span>
            {row.isNew && (
              <span 
                className="text-[10px] px-2 py-0.5 rounded-[4px] w-fit"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  backgroundColor: '#FEF3C7',
                  color: '#D97706'
                }}
              >
                New
              </span>
            )}
          </div>
        </div>
      ),
    },
    {
      key: 'date',
      title: 'Date',
      render: (row: typeof referrals[0]) => (
        <span style={{ color: '#6B7280' }}>{row.date}</span>
      ),
    },
    {
      key: 'time',
      title: 'Time',
      render: (row: typeof referrals[0]) => (
        <span style={{ color: '#6B7280' }}>{row.time}</span>
      ),
    },
    {
      key: 'product',
      title: 'Coupon/Link',
      render: (row: typeof referrals[0]) => (
        <span style={{ color: '#6B7280' }}>{row.product}</span>
      ),
    },
    {
      key: 'commission',
      title: 'Commission',
      render: (row: typeof referrals[0]) => (
        <span style={{ color: '#6B7280' }}>{row.commission}%</span>
      ),
    },
    {
      key: 'clicks',
      title: 'Clicks',
      render: (row: typeof referrals[0]) => (
        <span style={{ color: '#6B7280' }}>{row.clicks}</span>
      ),
    },
    {
      key: 'orders',
      title: 'Orders',
      render: (row: typeof referrals[0]) => (
        <span style={{ color: '#6B7280' }}>{row.orders}</span>
      ),
    },
    {
      key: 'revenue',
      title: 'Revenue',
      render: (row: typeof referrals[0]) => (
        <span style={{ color: '#6B7280' }}>{row.revenue}</span>
      ),
    },
  ]

  return (
    <>
      <Helmet>
        <title>Dashboard - Amrutam Affiliate</title>
        <meta name="description" content="Affiliate dashboard overview and statistics" />
      </Helmet>
      <div className="p-6 space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-brand-gray">Affiliate</span>
          <span className="text-brand-border">&gt;</span>
          <span className="text-brand-dark font-medium">Dashboard</span>
        </div>

        {/* Time Period Tabs */}
        <TabNavigation 
          activeTab={timePeriod}
          onTabChange={setTimePeriod}
        />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <PillCard
            title="Total Coupons clicks"
            value={stats.totalCoupons}
            suffix="/month"
            icon={<img src={CalendarIcon} alt="Calendar" className="w-6 h-6" />}
            iconBgColor="#FDF8E5"
          />
          <PillCard
            title="Total Orders"
            value={stats.totalOrders}
            suffix="/month"
            icon={<img src={OrderIcon} alt="Order" className="w-6 h-6" />}
            iconBgColor="#FDF8E5"
          />
          <PillCard
            title="Total Revenue"
            value={stats.totalRevenue.toLocaleString()}
            suffix="/month"
            icon={<img src={WalletIcon} alt="Wallet" className="w-6 h-6" />}
            iconBgColor="#FDF8E5"
          />
          <PillCard
            title="Total Link/Coupon"
            value={stats.totalLinks}
            suffix="/month"
            icon={<img src={ProfileAddIcon} alt="Profile Add" className="w-6 h-6" />}
            iconBgColor="#FDF8E5"
          />
        </div>

        {/* Referral Overview Table */}
        <Card>
          <div className="mb-4">
            <FilterBar />
          </div>
          <Table columns={columns} data={referrals} />
          <div className="flex items-center justify-between mt-6 pt-4">
            <span 
              className="text-[13px] align-middle"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                color: '#6B7280',
                lineHeight: '21.6px',
                letterSpacing: '0%'
              }}
            >
              Rows per page: 8
            </span>
            <div className="flex items-center gap-4">
              <span 
                className="text-[13px] align-middle"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  color: '#6B7280',
                  lineHeight: '21.6px',
                  letterSpacing: '0%'
                }}
              >
                1-8 of 80
              </span>
              <div className="flex items-center gap-2">
                <button 
                  className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
                  style={{ border: '1px solid #E5E7EB' }}
                >
                  <span style={{ color: '#6B7280' }}>‹</span>
                </button>
                <button 
                  className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
                  style={{ border: '1px solid #E5E7EB' }}
                >
                  <span style={{ color: '#6B7280' }}>›</span>
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

