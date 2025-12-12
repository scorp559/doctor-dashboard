export interface Stats {
  totalCoupons: number
  totalOrders: number
  totalRevenue: number
  totalLinks: number
}

export interface Referral {
  id: string
  name: string
  product: string
  date: string
  time: string
  commission: number
  clicks: number
  orders: number
  revenue: number
  isNew?: boolean
}

export interface Product {
  id: string
  title: string
  image: string
  link: string
  coupon: string
}

export interface Earning {
  id: string
  date: string
  product: string
  coupon: string
  commission: number
  status: 'pending' | 'completed' | 'failed'
}
