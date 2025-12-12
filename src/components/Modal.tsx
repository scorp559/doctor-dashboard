import { ReactNode } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  open: boolean
  onClose: () => void
  children?: ReactNode
  title?: string
}

export default function Modal({ open, onClose, children, title }: ModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="relative bg-white rounded-lg shadow-lg max-w-md w-full mx-4"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-6 border-b border-brand-border">
          <h2 className="text-lg font-semibold text-brand-dark">{title}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-brand-light rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-brand-gray" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
