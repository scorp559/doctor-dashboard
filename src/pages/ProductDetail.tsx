import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Card from '../components/Card'
import { products, stats } from '../data/sample'
import { copyToClipboard } from '../utils/clipboard'

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <>
        <Helmet>
          <title>Product Not Found - Amrutam Affiliate</title>
        </Helmet>
        <div className="p-6">
          <Card>
            <p className="text-lg text-brand-gray">Product not found</p>
          </Card>
        </div>
      </>
    )
  }

  const handleCopyLink = async () => {
    const success = await copyToClipboard(product.link)
    alert(success ? 'Link copied to clipboard!' : 'Failed to copy link')
  }

  return (
    <>
      <Helmet>
        <title>{product.title} - Amrutam Affiliate</title>
        <meta name="description" content={`Promote ${product.title} with coupon ${product.coupon}`} />
      </Helmet>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-brand-dark">{product.title}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover rounded mb-6"
              />
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Affiliate Link
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={product.link}
                      readOnly
                      className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded text-gray-900"
                    />
                    <button
                      onClick={handleCopyLink}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium"
                    >
                      Copy
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Coupon Code
                  </label>
                  <input
                    type="text"
                    value={product.coupon}
                    readOnly
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded text-gray-900"
                  />
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <p className="text-gray-600 text-sm">Total Orders</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalOrders}</p>
            </Card>
            <Card>
              <p className="text-gray-600 text-sm">Total Revenue</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">${stats.totalRevenue.toLocaleString()}</p>
            </Card>
            <Card>
              <p className="text-gray-600 text-sm">Total Coupons Used</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalCoupons}</p>
            </Card>
            <Card>
              <p className="text-gray-600 text-sm">Total Links</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalLinks}</p>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
