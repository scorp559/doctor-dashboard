interface TopbarProps {
  onMenuClick: () => void
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-[70px] bg-white shadow-sm z-50">
      <div className="flex items-center h-full px-5">
        {/* Left Section: Logo and Hamburger */}
        <div className="flex items-center gap-4 mr-6">
          {/* Logo */}
          <img 
            src="/src/assets/logo/logo.svg" 
            alt="Amrutam" 
            className="h-8"
          />
          
          {/* Hamburger Menu */}
          <button onClick={onMenuClick} className="p-1 hover:bg-gray-100 rounded transition-colors" aria-label="Menu">
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.863 1.3544C17.863 1.0324 17.735 0.723502 17.508 0.495802C17.28 0.268102 16.971 0.140198 16.649 0.140198H2.078C1.756 0.140198 1.447 0.268102 1.219 0.495802C0.991 0.723502 0.863 1.0324 0.863 1.3544C0.863 1.6765 0.991 1.9854 1.219 2.2131C1.447 2.4408 1.756 2.5687 2.078 2.5687H16.649C16.971 2.5687 17.28 2.4408 17.508 2.2131C17.735 1.9854 17.863 1.6765 17.863 1.3544Z" fill="#3A643B"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M17.863 7.4247C17.863 7.1027 17.735 6.7938 17.508 6.5661C17.28 6.3384 16.971 6.2105 16.649 6.2105H2.078C1.756 6.2105 1.447 6.3384 1.219 6.5661C0.991 6.7938 0.863 7.1027 0.863 7.4247C0.863 7.7468 0.991 8.0557 1.219 8.2834C1.447 8.5111 1.756 8.639 2.078 8.639H16.649C16.971 8.639 17.28 8.5111 17.508 8.2834C17.735 8.0557 17.863 7.7468 17.863 7.4247Z" fill="#3A643B"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M17.863 13.4951C17.863 13.1731 17.735 12.8642 17.507 12.6365C17.279 12.4088 16.97 12.2808 16.648 12.2808H9.363C9.041 12.2808 8.732 12.4088 8.504 12.6365C8.276 12.8642 8.148 13.1731 8.148 13.4951C8.148 13.8172 8.276 14.126 8.504 14.3538C8.732 14.5815 9.041 14.7094 9.363 14.7094H16.648C16.97 14.7094 17.279 14.5815 17.507 14.3538C17.735 14.126 17.863 13.8172 17.863 13.4951Z" fill="#3A643B"/>
            </svg>
          </button>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-[600px]">
          <div className="relative flex items-center w-[270px] ">
            <div className="absolute left-3 flex items-center gap-2 pointer-events-none">
              <svg width="16" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M8.49163 15.4329C12.3283 15.4329 15.4386 12.3226 15.4386 8.48596C15.4386 4.64931 12.3283 1.53906 8.49163 1.53906C4.65498 1.53906 1.54474 4.64931 1.54474 8.48596C1.54474 12.3226 4.65498 15.4329 8.49163 15.4329Z" fill="#28643B"/>
                <path d="M16.9586 14.6114C16.7042 14.141 16.1644 13.8789 15.4396 13.8789C14.8922 13.8789 14.4219 14.1025 14.1443 14.4879C13.8667 14.8735 13.805 15.39 13.9747 15.9067C14.3062 16.909 14.8845 17.1326 15.2006 17.1711C15.2469 17.1789 15.2932 17.1789 15.3471 17.1789C15.6864 17.1789 16.2106 17.0323 16.7195 16.269C17.1282 15.6754 17.2053 15.0817 16.9586 14.6114Z" fill="#28643B" fillOpacity="0.5"/>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search here"
              className="w-full h-[45px] pl-10 pr-3 bg-[#2E37A4] bg-opacity-5 rounded-[11px] font-medium text-[13px] leading-none text-[#28643B] text-opacity-50 placeholder:text-[#28643B] placeholder:text-opacity-50 outline-none border-none"
              style={{ fontFamily: 'Poppins' }}
            />
          </div>
        </div>

        {/* Right Section: Icons and User */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Message Icon */}
          <button className="relative" aria-label="Messages">
            <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M15.75 19.5H5.25C2.1 19.5 0 17.9118 0 14.2058V6.7941C0 3.0882 2.1 1.5 5.25 1.5H15.75C18.9 1.5 21 3.0882 21 6.7941V14.2058C21 17.9118 18.9 19.5 15.75 19.5Z" fill="#6B7280"/>
              <path d="M11.004 11.5C10.127 11.5 9.24 11.219 8.562 10.6461L5.295 7.9439C4.961 7.6628 4.898 7.1548 5.17 6.809C5.441 6.4631 5.932 6.3982 6.266 6.6792L9.532 9.3814C10.325 10.0408 11.671 10.0408 12.465 9.3814L15.731 6.6792C16.065 6.3982 16.566 6.4523 16.827 6.809C17.098 7.1548 17.046 7.6737 16.702 7.9439L13.435 10.6461C12.767 11.219 11.88 11.5 11.004 11.5Z" fill="#6B7280"/>
            </svg>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Bell Icon */}
          <button className="relative" aria-label="Notifications">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M19.84 14.3221C19.56 15.0743 18.97 15.646 18.21 15.9068C17.14 16.2678 16.03 16.5386 14.922 16.7292C14.813 16.7493 14.704 16.7693 14.595 16.7794C14.416 16.8094 14.237 16.8295 14.059 16.8496C13.84 16.8796 13.612 16.8997 13.383 16.9198C12.758 16.9699 12.143 17 11.517 17C10.882 17 10.247 16.9699 9.621 16.9097C9.353 16.8897 9.095 16.8596 8.837 16.8195C8.688 16.7994 8.539 16.7794 8.4 16.7593C8.291 16.7392 8.182 16.7292 8.073 16.7091C6.971 16.5286 5.879 16.2578 4.816 15.8968C4.022 15.626 3.417 15.0543 3.149 14.3221C2.881 13.6 2.98 12.7575 3.407 12.0354L4.529 10.1499C4.767 9.7387 4.985 8.9463 4.985 8.4649V6.5994C4.985 2.9587 7.914 0 11.517 0C15.11 0 18.04 2.9587 18.04 6.5994V8.4649C18.04 8.9463 18.26 9.7387 18.51 10.1499L19.63 12.0354C20.03 12.7375 20.11 13.5599 19.84 14.3221Z" fill="#6B7280"/>
              <path d="M12 9C11.447 9 11 8.632 11 8.1775V4.8225C11 4.368 11.447 4 12 4C12.553 4 13 4.368 13 4.8225V8.1775C12.987 8.632 12.539 9 12 9Z" fill="#6B7280"/>
              <path d="M15 18.01C14.554 19.17 13.375 20 11.995 20C11.156 20 10.327 19.68 9.743 19.11C9.404 18.81 9.149 18.41 9 18C9.138 18.02 9.276 18.03 9.425 18.05C9.669 18.08 9.924 18.11 10.179 18.13C10.784 18.18 11.4 18.21 12.016 18.21C12.621 18.21 13.227 18.18 13.821 18.13C14.044 18.11 14.267 18.1 14.48 18.07C14.65 18.05 14.819 18.03 15 18.01Z" fill="#6B7280"/>
            </svg>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Info */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">Dr.Liam Michael</div>
              <div className="text-xs text-gray-500">Doctor</div>
            </div>
            
            {/* User Avatar */}
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop" 
              alt="Dr.Liam Michael" 
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>

          {/* Settings Icon */}
          <button aria-label="Settings">
            <svg width="20" height="20" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M2 10.9323V9.0677C2 7.9659 2.89 7.0547 3.99 7.0547C5.89 7.0547 6.67 5.6986 5.72 3.0353C5.17 3.0818 4.49 1.8423 5.45 1.2914L7.27 0.242504C8.09 -0.255396 9.16 0.0412041 9.66 0.878204L9.77 1.0795C10.72 2.7428 12.27 2.7428 13.23 1.0795L13.34 0.878204C13.84 0.0412041 14.91 -0.255396 15.73 0.242504L17.55 1.2914C18.51 1.8423 18.83 3.0818 18.28 4.0353C17.33 5.6986 18.11 7.0547 20.01 7.0547C21.1 7.0547 22 7.9552 22 9.0677V10.9323C22 12.0342 21.11 12.9453 20.01 12.9453C18.11 12.9453 17.33 14.3013 18.28 15.9646C18.83 16.9288 18.51 18.1577 17.55 18.7087L15.73 19.7575C14.91 20.2554 13.84 19.9588 13.34 19.1218L13.23 18.9205C12.28 17.2572 10.73 17.2572 9.77 18.9205L9.66 19.1218C9.16 19.9588 8.09 20.2554 7.27 19.7575L5.45 18.7087C4.49 18.1577 4.17 16.9181 4.72 15.9646C5.67 14.3013 4.89 12.9453 2.99 12.9453C1.89 12.9453 2 12.0342 2 10.9323Z" fill="#6B7280"/>
              <path d="M12.5 14C14.43 14 16 12.433 16 10.5C16 8.567 14.43 7 12.5 7C10.57 7 9 8.567 9 10.5C9 12.433 10.57 14 12.5 14Z" fill="#6B7280"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
