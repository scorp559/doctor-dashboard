import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="w-full h-screen bg-[#F6F6F5]">
      <Topbar onMenuClick={toggleSidebar} />
      <div className="flex pt-[90px]">
        <Sidebar isOpen={isSidebarOpen} />
        <main 
          className="flex-1 overflow-y-auto transition-all duration-300 ease-in-out"
          style={{ marginLeft: isSidebarOpen ? '231px' : '0' }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}
