import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Modal from '../components/Modal'
import { products } from '../data/sample'
import { copyToClipboard } from '../utils/clipboard'

export default function ReferralTool() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)

  const handleCopyLink = async () => {
    if (selectedProduct) {
      const success = await copyToClipboard(selectedProduct.link)
      alert(success ? 'Link copied to clipboard!' : 'Failed to copy link')
    }
  }

  const handleCopyCoupon = async () => {
    if (selectedProduct) {
      const success = await copyToClipboard(selectedProduct.coupon)
      alert(success ? 'Coupon copied to clipboard!' : 'Failed to copy coupon')
    }
  }

  return (
    <>
      <Helmet>
        <title>Referral Tool - Amrutam Affiliate</title>
        <meta name="description" content="Create and manage your affiliate referral links" />
      </Helmet>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-brand-dark">Referral Tool</h1>
          <p className="text-brand-gray mt-1">Create and manage your affiliate links</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Card
              key={product.id}
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="font-semibold text-brand-dark">{product.title}</h3>
              <p className="text-xs text-brand-gray mt-1">Coupon: {product.coupon}</p>
              <div className="flex gap-2 mt-3">
                <Link
                  to={`/affiliate/product/${product.id}`}
                  className="flex-1 px-3 py-2 bg-brand-green bg-opacity-10 text-brand-green rounded hover:bg-opacity-20 transition-colors text-center text-sm font-medium"
                >
                  View
                </Link>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedProduct(product)
                  }}
                  className="flex-1 px-3 py-2 bg-brand-light text-brand-dark rounded hover:bg-brand-border transition-colors text-sm font-medium"
                >
                  Select
                </button>
              </div>
            </Card>
          ))}
        </div>

        <Modal
          open={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          title="Referral Link"
        >
          {selectedProduct && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1">
                  Product
                </label>
                <input
                  type="text"
                  value={selectedProduct.title}
                  readOnly
                  className="w-full px-3 py-2 bg-brand-light border border-brand-border rounded text-brand-dark"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1">
                  Link
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={selectedProduct.link}
                    readOnly
                    className="flex-1 px-3 py-2 bg-brand-light border border-brand-border rounded text-brand-dark text-sm"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="px-4 py-2 bg-brand-green text-white rounded hover:opacity-90 transition-opacity font-medium text-sm"
                  >
                    Copy
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1">
                  Coupon Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={selectedProduct.coupon}
                    readOnly
                    className="flex-1 px-3 py-2 bg-brand-light border border-brand-border rounded text-brand-dark text-sm"
                  />
                  <button
                    onClick={handleCopyCoupon}
                    className="px-4 py-2 bg-brand-green text-white rounded hover:opacity-90 transition-opacity font-medium text-sm"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </>
  )
}
