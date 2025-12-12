import { NavLink } from 'react-router-dom'
import { useState } from 'react'

interface SidebarProps {
  isOpen: boolean
}

interface NavItem {
  label: string
  path: string
  icon: JSX.Element
  badge?: string
  subItems?: { label: string; path: string }[]
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(['Affiliate'])

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    )
  }

  const navItems: NavItem[] = [
    {
      label: 'Affiliate',
      path: '#',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.05"/>
          <g clipPath="url(#clip0_affiliate)">
            <path d="M27.9817 19.0807V13.4141C27.9817 12.1641 27.4484 11.6641 26.1234 11.6641H22.7567C21.4317 11.6641 20.8984 12.1641 20.8984 13.4141V19.0807C20.8984 20.3307 21.4317 20.8307 22.7567 20.8307H26.1234C27.4484 20.8307 27.9817 20.3307 27.9817 19.0807Z" fill="currentColor" fillOpacity="0.75"/>
            <path d="M19.2318 20.9141V26.5807C19.2318 27.8307 18.6984 28.3307 17.3734 28.3307H14.0068C12.6818 28.3307 12.1484 27.8307 12.1484 26.5807V20.9141C12.1484 19.6641 12.6818 19.1641 14.0068 19.1641H17.3734C18.6984 19.1641 19.2318 19.6641 19.2318 20.9141Z" fill="currentColor" fillOpacity="0.75"/>
            <path opacity="0.4" d="M27.9817 26.5833V24.25C27.9817 23 27.4484 22.5 26.1234 22.5H22.7567C21.4317 22.5 20.8984 23 20.8984 24.25V26.5833C20.8984 27.8333 21.4317 28.3333 22.7567 28.3333H26.1234C27.4484 28.3333 27.9817 27.8333 27.9817 26.5833Z" fill="currentColor" fillOpacity="0.75"/>
            <path opacity="0.4" d="M19.2318 15.7474V13.4141C19.2318 12.1641 18.6984 11.6641 17.3734 11.6641H14.0068C12.6818 11.6641 12.1484 12.1641 12.1484 13.4141V15.7474C12.1484 16.9974 12.6818 17.4974 14.0068 17.4974H17.3734C18.6984 17.4974 19.2318 16.9974 19.2318 15.7474Z" fill="currentColor" fillOpacity="0.75"/>
          </g>
          <defs><clipPath id="clip0_affiliate"><rect width="21" height="20" fill="white" transform="translate(9.5 10)"/></clipPath></defs>
        </svg>
      ),
      subItems: [
        { label: 'Dashboard', path: '/' },
        { label: 'Referral Tool', path: '/referral-tool' },
        { label: 'Earning History', path: '/earning-history' },
      ]
    },
    { 
      label: 'Patients', 
      path: '/patients',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.05"/>
          <g clipPath="url(#clip0_patients)">
            <path opacity="0.4" d="M24.9053 16.2987C24.8441 16.29 24.7828 16.29 24.7216 16.2987C23.3653 16.255 22.2891 15.1437 22.2891 13.7787C22.2891 12.3875 23.4178 11.25 24.8178 11.25C26.2091 11.25 27.3466 12.3787 27.3466 13.7787C27.3378 15.1437 26.2616 16.255 24.9053 16.2987Z" fill="currentColor"/>
            <path opacity="0.4" d="M27.7561 22.3638C26.7761 23.0201 25.4023 23.2651 24.1336 23.0988C24.4661 22.3813 24.6411 21.5851 24.6498 20.7451C24.6498 19.8701 24.4573 19.0388 24.0898 18.3126C25.3848 18.1376 26.7586 18.3826 27.7473 19.0388C29.1298 19.9488 29.1298 21.4451 27.7561 22.3638Z" fill="currentColor"/>
            <path opacity="0.4" d="M15.203 16.2987C15.2642 16.29 15.3255 16.29 15.3867 16.2987C16.743 16.255 17.8192 15.1437 17.8192 13.7787C17.8192 12.3875 16.6905 11.25 15.2905 11.25C13.8992 11.25 12.7617 12.3787 12.7617 13.7787C12.7705 15.1437 13.8467 16.255 15.203 16.2987Z" fill="currentColor"/>
            <path opacity="0.4" d="M15.2981 20.7452C15.2981 21.594 15.4819 22.399 15.8144 23.1252C14.5806 23.2565 13.2944 22.994 12.3494 22.3727C10.9669 21.454 10.9669 19.9577 12.3494 19.039C13.2856 18.409 14.6069 18.1552 15.8494 18.2952C15.4906 19.0302 15.2981 19.8615 15.2981 20.7452Z" fill="currentColor"/>
            <path d="M20.1706 23.3862C20.1006 23.3775 20.0219 23.3775 19.9431 23.3862C18.3331 23.3337 17.0469 22.0125 17.0469 20.385C17.0469 18.7225 18.3856 17.375 20.0569 17.375C21.7194 17.375 23.0669 18.7225 23.0669 20.385C23.0669 22.0125 21.7894 23.3337 20.1706 23.3862Z" fill="currentColor"/>
            <path d="M17.3269 25.2C16.0056 26.0837 16.0056 27.5362 17.3269 28.4112C18.8319 29.4175 21.2993 29.4175 22.8043 28.4112C24.1256 27.5275 24.1256 26.075 22.8043 25.2C21.3081 24.1937 18.8406 24.1937 17.3269 25.2Z" fill="currentColor"/>
          </g>
          <defs><clipPath id="clip0_patients"><rect width="22" height="21" fill="white" transform="translate(9 9.5)"/></clipPath></defs>
        </svg>
      )
    },
    { 
      label: 'Doctor Schedule', 
      path: '/schedule',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.05"/>
          <g clipPath="url(#clip0_schedule)">
            <path d="M24.0236 12.964V11.664C24.0236 11.322 23.7403 11.039 23.3986 11.039C23.0569 11.039 22.7736 11.322 22.7736 11.664V12.914H17.357V11.664C17.357 11.322 17.0736 11.039 16.732 11.039C16.3903 11.039 16.107 11.322 16.107 11.664V12.964C13.857 13.172 12.7653 14.514 12.5986 16.506C12.582 16.747 12.782 16.947 13.0153 16.947H27.1153C27.3569 16.947 27.5569 16.739 27.5319 16.506C27.3653 14.514 26.2736 13.172 24.0236 12.964Z" fill="currentColor"/>
            <path opacity="0.4" d="M28 18.831V20.262C28 20.763 27.55 21.15 27.05 21.068C26.8166 21.035 26.575 21.01 26.3333 21.01C23.8083 21.01 21.75 23.041 21.75 25.533C21.75 25.911 21.9 26.438 22.0583 26.915C22.2416 27.449 21.8416 28 21.2666 28H17.1667C14.25 28 13 26.355 13 23.888V18.822C13 18.37 13.375 18 13.8333 18H27.1666C27.625 18.008 28 18.378 28 18.831Z" fill="currentColor"/>
            <path d="M26.5 23C24.5662 23 23 24.566 23 26.5C23 27.156 23.1838 27.777 23.5075 28.302C24.1112 29.318 25.2225 30 26.5 30C27.7775 30 28.8888 29.318 29.4925 28.302C29.8162 27.777 30 27.156 30 26.5C30 24.566 28.4338 23 26.5 23ZM28.3113 26.124L26.4475 27.848C26.325 27.961 26.1587 28.022 26.0012 28.022C25.835 28.022 25.6687 27.961 25.5375 27.83L24.6712 26.964C24.4175 26.71 24.4175 26.29 24.6712 26.036C24.925 25.782 25.345 25.782 25.5988 26.036L26.0187 26.456L27.4188 25.161C27.6813 24.916 28.1013 24.934 28.3462 25.196C28.5913 25.459 28.5738 25.87 28.3113 26.124Z" fill="currentColor"/>
          </g>
          <defs><clipPath id="clip0_schedule"><rect width="21" height="20" fill="white" transform="translate(10 10)"/></clipPath></defs>
        </svg>
      )
    },
    { 
      label: 'Appointments', 
      path: '/appointments',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.05"/>
          <g clipPath="url(#clip0_appointments)">
            <path opacity="0.4" d="M12 21.324V16.242C12 13.896 13.904 12 16.25 12H24.75C27.096 12 29 13.896 29 16.242V22.175C29 24.512 27.096 26.408 24.75 26.408H23.475C23.2115 26.408 22.9565 26.535 22.7949 26.747L21.5199 28.439C20.9589 29.187 20.0409 29.187 19.48 28.439L18.205 26.747C18.069 26.561 17.763 26.408 17.525 26.408H16.25C13.904 26.408 12 24.512 12 22.175V21.324Z" fill="currentColor"/>
            <path d="M20.9999 20C20.44 20 20 19.55 20 19C20 18.45 20.45 18 20.9999 18C21.55 18 22 18.45 22 19C22 19.55 21.56 20 20.9999 20Z" fill="currentColor"/>
            <path d="M24 20C23.4399 20 23 19.55 23 19C23 18.45 23.45 18 24 18C24.55 18 25 18.45 25 19C25 19.55 24.5601 20 24 20Z" fill="currentColor"/>
            <path d="M17 20C16.44 20 16 19.55 16 19C16 18.45 16.45 18 17 18C17.55 18 18 18.45 18 19C18 19.55 17.56 20 17 20Z" fill="currentColor"/>
          </g>
          <defs><clipPath id="clip0_appointments"><rect width="21" height="20" fill="white" transform="translate(10 10)"/></clipPath></defs>
        </svg>
      )
    },
    { 
      label: 'Consultation', 
      path: '/consultation',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.05"/>
          <g clipPath="url(#clip0_consultation)">
            <path opacity="0.4" d="M20.0013 12.417V25.775C19.8596 25.775 19.7096 25.75 19.593 25.683L19.5596 25.667C17.9596 24.792 15.168 23.875 13.3596 23.633L13.118 23.6C12.318 23.5 11.668 22.75 11.668 21.95V11.883C11.668 10.892 12.4763 10.142 13.468 10.225C15.218 10.367 17.868 11.25 19.3513 12.175L19.5596 12.3C19.6846 12.375 19.843 12.417 20.0013 12.417Z" fill="currentColor"/>
            <path d="M28.3333 11.891V21.95C28.3333 22.75 27.6833 23.5 26.8833 23.6L26.6083 23.633C24.7917 23.875 21.9917 24.8 20.3917 25.683C20.2833 25.75 20.15 25.775 20 25.775V12.416C20.1583 12.416 20.3167 12.375 20.4417 12.3L20.5833 12.208C22.0667 11.275 24.725 10.383 26.475 10.233H26.525C27.5167 10.15 28.3333 10.891 28.3333 11.891Z" fill="currentColor"/>
            <path d="M16.457 15.703H14.582C14.2404 15.703 13.957 15.42 13.957 15.078C13.957 14.736 14.2404 14.453 14.582 14.453H16.457C16.7987 14.453 17.082 14.736 17.082 15.078C17.082 15.42 16.7987 15.703 16.457 15.703Z" fill="currentColor"/>
            <path d="M17.082 18.203H14.582C14.2404 18.203 13.957 17.92 13.957 17.578C13.957 17.236 14.2404 16.953 14.582 16.953H17.082C17.4237 16.953 17.707 17.236 17.707 17.578C17.707 17.92 17.4237 18.203 17.082 18.203Z" fill="currentColor"/>
          </g>
          <defs><clipPath id="clip0_consultation"><rect width="20" height="20" fill="white" transform="translate(10 10)"/></clipPath></defs>
        </svg>
      )
    },
    { 
      label: 'Wallet', 
      path: '/wallet',
     
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.05"/>
          <g clipPath="url(#clip0_wallet)">
            <path opacity="0.4" d="M26.2984 20.794H27.9817V19.594C27.9817 17.869 26.5734 16.461 24.8484 16.461H15.2818C13.5568 16.461 12.1484 17.869 12.1484 19.594V22.636C12.8068 22.036 13.6901 21.669 14.6484 21.669C16.7234 21.669 18.3984 23.353 18.3984 25.419C18.3984 25.861 18.3234 26.278 18.1818 26.669C17.9568 27.328 17.5401 27.894 17.0151 28.336H24.8484C26.5734 28.336 27.9817 26.928 27.9817 25.203V24.211H26.3984C25.4984 24.211 24.6734 23.553 24.5984 22.653C24.5484 22.128 24.7484 21.636 25.0984 21.294C25.4067 20.978 25.8317 20.794 26.2984 20.794Z" fill="currentColor"/>
            <path d="M14.6484 21.664C13.6901 21.664 12.8068 22.031 12.1484 22.631C11.9984 22.764 11.8568 22.906 11.7318 23.064C11.2068 23.706 10.8984 24.522 10.8984 25.414C10.8984 27.489 12.5818 29.164 14.6484 29.164C15.5484 29.164 16.3651 28.847 17.0151 28.331C17.5401 27.889 17.9568 27.322 18.1818 26.664C18.3234 26.272 18.3984 25.856 18.3984 25.414C18.3984 23.347 16.7234 21.664 14.6484 21.664Z" fill="currentColor"/>
            <path d="M22.4401 13.295V16.462H15.2818C13.5568 16.462 12.1484 17.87 12.1484 19.595V16.537C12.1484 15.545 12.7568 14.662 13.6818 14.312L20.2984 11.812C21.3317 11.428 22.4401 12.187 22.4401 13.295Z" fill="currentColor"/>
            <path d="M28.8681 21.639V23.356C28.8681 23.814 28.5014 24.189 28.0347 24.206H26.4014C25.5014 24.206 24.6764 23.547 24.6014 22.647C24.5514 22.122 24.7514 21.631 25.1014 21.289C25.4097 20.972 25.8347 20.789 26.3014 20.789H28.0347C28.5014 20.806 28.8681 21.181 28.8681 21.639Z" fill="currentColor"/>
          </g>
          <defs><clipPath id="clip0_wallet"><rect width="21" height="20" fill="white" transform="translate(9.5 10)"/></clipPath></defs>
        </svg>
      )
    },
  ]

  return (
    <aside 
      className={`fixed left-0 top-[90px] w-[231px] h-[calc(100vh-90px)] bg-white shadow-[5px_20px_14px_rgba(46,55,164,0.05)] overflow-y-auto transition-transform duration-300 ease-in-out rounded-tr-[20px] ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <nav className="flex flex-col pt-8 pb-6">
        {navItems.map((item) => (
          <div key={item.label}>
            {item.subItems ? (
              <>
                {/* Parent item with expand/collapse */}
                <button
                  onClick={() => toggleExpand(item.label)}
                  className={`w-full flex items-center justify-between gap-3 px-5 py-4 transition-all duration-200 border-l-4 ${
                    expandedItems.includes(item.label)
                      ? 'bg-[#2E37A4] bg-opacity-5 text-[#3A643B] border-[#3A643B]'
                      : 'text-[#797979] hover:text-[#3A643B] hover:bg-gray-50 border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-[15px] font-normal leading-tight">
                      {item.label}
                    </span>
                  </div>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${expandedItems.includes(item.label) ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Sub items */}
                {expandedItems.includes(item.label) && (
                  <div className="bg-white">
                    {item.subItems.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        end={subItem.path === '/'}
                        className={({ isActive }) =>
                          `flex items-center gap-3 pl-[70px] pr-5 py-3 transition-all duration-200 border-l-4 ${
                            isActive
                              ? 'text-[#3A643B] bg-[#2E37A4] bg-opacity-5 border-[#3A643B]'
                              : 'text-[#797979] hover:text-[#3A643B] hover:bg-gray-50 border-transparent'
                          }`
                        }
                      >
                        <span className="text-[15px] font-normal leading-tight">
                          {subItem.label}
                        </span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            ) : (
              /* Regular nav item without sub-items */
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `flex items-center justify-between gap-3 px-5 py-4 transition-all duration-200 ${
                    isActive
                      ? 'bg-[#2E37A4] bg-opacity-5 text-[#3A643B] border-l-4 border-[#3A643B]'
                      : 'text-[#797979] hover:text-[#3A643B] hover:bg-gray-50 border-l-4 border-transparent'
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-[15px] font-normal leading-tight">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[9px] font-medium text-[#3A643B] bg-white border border-[#3A643B] px-2 py-0.5 rounded whitespace-nowrap">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            )}
          </div>
        ))}
      </nav>
      
      {/* Custom Scrollbar */}
      <style>{`
        aside::-webkit-scrollbar {
          width: 7px;
        }
        aside::-webkit-scrollbar-track {
          background: transparent;
          margin: 0;
        }
        aside::-webkit-scrollbar-thumb {
          background: rgba(204, 204, 204, 0.4);
          border-radius: 3.5px;
        }
        aside::-webkit-scrollbar-thumb:hover {
          background: rgba(204, 204, 204, 0.6);
        }
      `}</style>
    </aside>
  )
}
