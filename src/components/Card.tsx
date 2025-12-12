import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg p-4 shadow-sm border border-brand-border ${className}`}>
      {children}
    </div>
  )
}
