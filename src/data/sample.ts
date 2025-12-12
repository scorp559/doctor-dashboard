import { Stats, Referral, Product, Earning } from '../types'

export const stats: Stats = {
  totalCoupons: 5,
  totalOrders: 55,
  totalRevenue: 5540,
  totalLinks: 5,
}

export const referrals: Referral[] = [
  {
    id: '1',
    name: 'Andrea Lalema',
    product: 'AMU2344',
    date: '19 Oct, 2024',
    time: '04:10 PM',
    commission: 15,
    clicks: 2,
    orders: 2,
    revenue: 345,
    isNew: true,
  },
  {
    id: '2',
    name: 'Smith Bruklin',
    product: 'AMU2344',
    date: '19 Oct, 2024',
    time: '05:10 PM',
    commission: 15,
    clicks: 4,
    orders: 4,
    revenue: 564,
    isNew: false,
  },
  {
    id: '3',
    name: 'William Stephin',
    product: 'AMU2344',
    date: '18 Oct, 2024',
    time: '06:10 PM',
    commission: 25,
    clicks: 1,
    orders: 1,
    revenue: 200,
    isNew: false,
  },
]

export const products: Product[] = [
  {
    id: '1',
    title: 'Premium Dashboard',
    image: 'https://picsum.photos/300/300?random=1',
    link: 'https://example.com/premium',
    coupon: 'AMRUTAM20',
  },
  {
    id: '2',
    title: 'Analytics Suite',
    image: 'https://picsum.photos/300/300?random=2',
    link: 'https://example.com/analytics',
    coupon: 'AMRUTAM15',
  },
]

export const earnings: Earning[] = [
  {
    id: '1',
    date: '2024-12-01',
    product: 'Premium Plan',
    coupon: 'AMRUTAM20',
    commission: 250,
    status: 'completed',
  },
  {
    id: '2',
    date: '2024-12-02',
    product: 'Starter Plan',
    coupon: 'AMRUTAM15',
    commission: 180,
    status: 'pending',
  },
]
