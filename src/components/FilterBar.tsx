import React, { useState } from 'react';

interface FilterBarProps {
  onFilterChange?: (filters: FilterOptions) => void;
}

interface FilterOptions {
  searchQuery: string;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onFilterChange?.({ searchQuery: value });
  };

  return (
    <div className="flex items-center gap-4 flex-wrap">
      <h2 
        className="text-[18px] font-semibold"
        style={{ 
          fontFamily: 'Poppins, sans-serif',
          color: '#000000'
        }}
      >
        Referral Overview
      </h2>

      {/* Search and Refresh Side by Side */}
      <div className="flex items-center gap-2">
        {/* Search Input */}
        <div className="relative flex items-center">
          <div className="absolute left-3 flex items-center gap-2 pointer-events-none">
            <svg width="16" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M8.49163 15.4329C12.3283 15.4329 15.4386 12.3226 15.4386 8.48596C15.4386 4.64931 12.3283 1.53906 8.49163 1.53906C4.65498 1.53906 1.54474 4.64931 1.54474 8.48596C1.54474 12.3226 4.65498 15.4329 8.49163 15.4329Z" fill="#28643B"/>
              <path d="M16.9586 14.6114C16.7042 14.141 16.1644 13.8789 15.4396 13.8789C14.8922 13.8789 14.4219 14.1025 14.1443 14.4879C13.8667 14.8735 13.805 15.39 13.9747 15.9067C14.3062 16.909 14.8845 17.1326 15.2006 17.1711C15.2469 17.1789 15.2932 17.1789 15.3471 17.1789C15.6864 17.1789 16.2106 17.0323 16.7195 16.269C17.1282 15.6754 17.2053 15.0817 16.9586 14.6114Z" fill="#28643B" fillOpacity="0.5"/>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search here"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-[260px] h-[37px] pl-10 pr-3 rounded-[11px] font-medium text-[13px] leading-none outline-none border-none"
            style={{
              fontFamily: 'Poppins',
              backgroundColor: 'rgba(46, 55, 164, 0.05)',
              color: 'rgba(40, 100, 59, 0.5)',
            }}
          />
        </div>

        {/* Refresh Button */}
        <button 
          className="w-[37px] h-[37px] rounded-[12px] flex items-center justify-center transition-opacity hover:opacity-80"
          style={{ backgroundColor: 'rgba(46, 55, 164, 0.05)' }}
          aria-label="Refresh"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_refresh)">
              <g clipPath="url(#clip1_refresh)">
                <g clipPath="url(#clip2_refresh)">
                  <path d="M14.1566 6.68750C13.6906 6.68750 13.3246 7.05391 13.3246 7.52016C13.3136 9.07461 12.7136 10.5291 11.6256 11.6172C10.5266 12.7164 9.06055 13.327 7.50664 13.327C5.95273 13.327 4.48672 12.7164 3.38773 11.6172C3.35391 11.5839 3.33164 11.5506 3.29883 11.5173H4.22031C4.67578 11.5173 5.05273 11.1398 5.05273 10.6846C5.05273 10.2293 4.67578 9.85180 4.22031 9.85180H1.27773C0.822266 9.85180 0.445312 10.2293 0.445312 10.6846V13.6268C0.445312 14.082 0.822266 14.4595 1.27773 14.4595C1.7332 14.4595 2.11016 14.082 2.11016 13.6268V12.6831C2.14336 12.7164 2.17656 12.7608 2.21016 12.8052C3.62031 14.2153 5.50781 15.0036 7.50664 15.0036C9.50547 15.0036 11.393 14.2264 12.8031 12.8052C14.2016 11.4062 14.9789 9.5299 14.9895 7.53125C14.9895 7.06500 14.6125 6.69859 14.1566 6.68750Z" fill="#28643B"/>
                  <path d="M0.832812 8.2162C1.2878 8.2162 1.65468 7.84979 1.66562 7.39448C1.68749 5.87338 2.29843 4.44119 3.36328 3.36416C4.46367 2.26502 5.92929 1.65432 7.48359 1.65432C9.03789 1.65432 10.5039 2.26502 11.6028 3.36416C11.6367 3.39752 11.6589 3.4308 11.6921 3.46416H10.7703C10.3148 3.46416 9.93789 3.84166 9.93789 4.29682C9.93789 4.75213 10.3148 5.12948 10.7703 5.12948H13.7121C14.1675 5.12948 14.5445 4.75213 14.5445 4.29682V1.36572C14.5445 0.910416 14.1675 0.532959 13.7121 0.532959C13.2566 0.532959 12.8796 0.910416 12.8796 1.36572V2.32049C12.8464 2.28713 12.8132 2.24283 12.7796 2.19838C11.3695 0.788252 9.48203 0 7.48359 0C5.48515 0 3.59765 0.77721 2.1878 2.19838C0.799218 3.57512 0.521874 5.41822 0.499999 7.37229C0.489062 7.82759 0.855937 8.20509 1.32218 8.2162C0.832812 8.2162 0.832812 8.2162 0.832812 8.2162Z" fill="#28643B"/>
                </g>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_refresh">
                <rect width="15" height="15" fill="white"/>
              </clipPath>
              <clipPath id="clip1_refresh">
                <rect width="15" height="15" fill="white"/>
              </clipPath>
              <clipPath id="clip2_refresh">
                <rect width="15" height="15" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 ml-auto">
        <button 
          className="w-[37px] h-[37px] rounded-[12px] flex items-center justify-center transition-opacity hover:opacity-80"
          style={{ backgroundColor: 'rgba(46, 55, 164, 0.05)' }}
          aria-label="Sort"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.82 4.431C10.578 4.68971 10.18 4.68971 9.938 4.431L8.328 2.75862V13.8793C8.328 14.2241 8.051 14.5 7.705 14.5C7.359 14.5 7.082 14.2241 7.082 13.8793V2.75862L5.472 4.431C5.23 4.68971 4.832 4.68971 4.59 4.431C4.347 4.17235 4.347 3.75862 4.59 3.5L7.203 0.758625C7.203 0.758625 7.203 0.758625 7.22 0.741379L7.255 0.706897C7.359 0.586207 7.515 0.517241 7.688 0.517241C7.861 0.517241 8.016 0.586207 8.138 0.706897L10.803 3.5C11.063 3.75862 11.063 4.17235 10.82 4.431ZM0.782 14.2414L0.73 14.2931C0.626 14.4138 0.47 14.4828 0.297 14.4828C0.124 14.4828 -0.0320001 14.4138 -0.153 14.2931L-2.818 11.5C-3.061 11.2414 -3.061 10.8276 -2.818 10.569C-2.576 10.3103 -2.178 10.3103 -1.936 10.569L-0.326 12.2414V1.12069C-0.326 0.775862 -0.049 0.5 0.297 0.5C0.643 0.5 0.92 0.775862 0.92 1.12069V12.2414L2.53 10.569C2.772 10.3103 3.17 10.3103 3.413 10.569C3.655 10.8276 3.655 11.2414 3.413 11.5L0.782 14.2414Z" fill="#3A643B"/>
          </svg>
        </button>

        {/* Filter Button */}
        <button 
          className="w-[37px] h-[37px] rounded-[12px] flex items-center justify-center transition-opacity hover:opacity-80"
          style={{ backgroundColor: 'rgba(46, 55, 164, 0.05)' }}
          aria-label="Filter"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00344 -1.25L8.21625 -1.24844C11.8562 -1.20047 15.5031 0.0745313 15.5031 1.99984V2.02747C15.5241 2.33797 15.4491 2.66125 15.2541 2.95219L15.1872 3.04594L13.2012 5.29594C13.5309 5.47016 13.7844 5.76094 13.9119 6.11156C14.0394 6.46219 14.0322 6.84797 13.8909 7.19344L13.8441 7.29547L13.0941 8.79547C12.9791 9.02641 12.8059 9.22359 12.5919 9.36828C12.3779 9.51297 12.1306 9.59969 11.8731 9.62047L11.7531 9.625H10.2522V13.375C10.2522 14.1655 9.89219 14.3853 9.11313 14.8727C8.33344 15.3603 8.08125 15.625 7.25313 15.625C6.87406 15.6251 6.51031 15.4822 6.23219 15.2249C5.95469 14.9676 5.78469 14.6149 5.75594 14.2375L5.75313 14.125V8.63953L0.817812 3.04594C0.590937 2.75906 0.479062 2.39781 0.503437 2.03266L0.503125 1.99984C0.503125 0.0363281 4.29281 -1.25 8.00344 -1.25ZM11.4406 5.55375C10.3566 5.83875 9.16406 6 8.00344 6C6.84094 6 5.64844 5.83797 4.56406 5.55375L7.25313 8.625V14.625L8.75313 13.875V8.625L11.4406 5.55375ZM12.5031 7.125H12.0281L10.7053 8.62434L11.7531 8.625L12.5031 7.125ZM8.00344 0.25C4.6875 0.25 2.00313 1.44781 2.00313 1.99984C2.00313 2.55247 4.6875 4.5 8.00344 4.5C11.3162 4.5 14.0031 2.55247 14.0031 1.99984C14.0031 1.44781 11.3162 0.25 8.00344 0.25Z" fill="#3A643B"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
