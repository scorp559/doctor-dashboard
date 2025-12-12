import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from '../components/Layout'

// Lazy load pages
const Dashboard = lazy(() => import('../pages/Dashboard'))
const ReferralTool = lazy(() => import('../pages/ReferralTool'))
const Earnings = lazy(() => import('../pages/Earnings'))
const NotFound = lazy(() => import('../pages/NotFound'))

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#3A643B] border-r-transparent"></div>
      <p className="mt-2 text-gray-600">Loading...</p>
    </div>
  </div>
)

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route 
          index 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Dashboard />
            </Suspense>
          } 
        />
        <Route 
          path="referral-tool" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <ReferralTool />
            </Suspense>
          } 
        />
        <Route 
          path="earning-history" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Earnings />
            </Suspense>
          } 
        />
        <Route 
          path="patients" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Dashboard />
            </Suspense>
          } 
        />
        <Route 
          path="schedule" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Dashboard />
            </Suspense>
          } 
        />
        <Route 
          path="appointments" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Dashboard />
            </Suspense>
          } 
        />
        <Route 
          path="consultation" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Dashboard />
            </Suspense>
          } 
        />
        <Route 
          path="wallet" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Dashboard />
            </Suspense>
          } 
        />
        <Route 
          path="*" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <NotFound />
            </Suspense>
          } 
        />
      </Route>
    </Routes>
  )
}
