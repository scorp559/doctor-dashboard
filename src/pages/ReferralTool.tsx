import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ChevronDown } from 'lucide-react'
import { products } from '../data/sample'
import { copyToClipboard } from '../utils/clipboard'

export default function ReferralTool() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
  const [showCoupon, setShowCoupon] = useState(false)

  const handleGet = () => {
    if (selectedProduct) {
      setShowCoupon(true)
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
      <div className="p-8 space-y-6 bg-brand-light min-h-screen">
        {/* Product Link/Coupon Section */}
        <div className="bg-white rounded-lg p-8 max-w-4xl">
          <h2 className="text-xl font-semibold text-[#333448] mb-6" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Product Link/Coupon
          </h2>

          <div className="space-y-4">
            {/* Product Selection Dropdown */}
            <div>
              <label className="block text-sm font-medium text-[#333448] mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Enter the name of Product <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={selectedProduct?.id || ''}
                  onChange={(e) => {
                    const product = products.find((p) => p.id === e.target.value)
                    setSelectedProduct(product || null)
                    setShowCoupon(false)
                  }}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/20 text-[#333448] appearance-none"
                  style={{ fontFamily: 'Nunito, sans-serif', fontSize: '14px' }}
                >
                  <option value="">Select a product</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.title}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
              </div>
              <p className="text-sm text-gray-400 mt-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Enter or Select the name of product you want to refer to your patient.
              </p>
            </div>

            {/* Get Button */}
            <div className="flex justify-end">
              <button
                onClick={handleGet}
                disabled={!selectedProduct}
                className="px-12 py-3 bg-brand-green text-white rounded-lg hover:bg-brand-green/90 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Get
              </button>
            </div>
          </div>
        </div>

        {/* Cart Discount Section */}
        {showCoupon && selectedProduct && (
          <div className="bg-white rounded-lg p-8 max-w-4xl">
            <h3 className="text-xl font-semibold text-[#333448] mb-6" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Cart Discount
            </h3>

            <div className="flex gap-4 items-center mb-4">
              <input
                type="text"
                value={selectedProduct.coupon}
                readOnly
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-[#333448] font-medium"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              />
              <button
                onClick={handleCopyCoupon}
                className="px-12 py-3 bg-brand-green text-white rounded-lg hover:bg-brand-green/90 transition-colors font-semibold"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Copy
              </button>
            </div>

            <p className="text-sm text-gray-600 italic" style={{ fontFamily: 'Nunito, sans-serif' }}>
              <span className="font-semibold">Note:</span> Share this Link/Coupon with your patient. For every purchase someone makes using your Link/Coupon. You get credit.
            </p>
          </div>
        )}
      </div>
    </>
  )
}
