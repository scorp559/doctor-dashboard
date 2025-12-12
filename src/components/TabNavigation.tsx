import React, { useState } from 'react';

export type TabValue = 'today' | 'week' | 'month' | 'custom';

export interface TabNavigationProps {
  activeTab?: TabValue;
  onTabChange?: (tab: TabValue) => void;
  className?: string;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ 
  activeTab: controlledActiveTab, 
  onTabChange,
  className = ''
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState<TabValue>('month');
  const activeTab = controlledActiveTab ?? internalActiveTab;

  const tabs: Array<{ id: TabValue; label: string }> = [
    { id: 'today', label: 'Today So Far' },
    { id: 'week', label: 'Week So Far' },
    { id: 'month', label: 'Month So Far' },
    { id: 'custom', label: 'Custom' }
  ];

  const handleTabClick = (tabId: TabValue) => {
    if (!controlledActiveTab) {
      setInternalActiveTab(tabId);
    }
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, tabId: TabValue) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTabClick(tabId);
    }
  };

  return (
    <div 
      className={`bg-white rounded-[16px] relative w-full ${className}`}
      style={{
        height: '72px',
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.06)'
      }}
    >
      <div className="flex items-center px-6 md:px-24 py-6 gap-6 md:gap-24">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, tab.id)}
            className="relative pb-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3A643B] focus-visible:ring-offset-2 rounded whitespace-nowrap flex-shrink-0"
            role="tab"
            aria-selected={activeTab === tab.id}
            tabIndex={0}
          >
            <span
              className={`text-[15px] leading-[1.2] transition-all duration-200`}
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontWeight: activeTab === tab.id ? 600 : 400,
                color: activeTab === tab.id ? '#3A643B' : '#333448',
                opacity: activeTab === tab.id ? 1 : 0.5
              }}
            >
              {tab.label}
            </span>
            {activeTab === tab.id && (
              <div 
                className="absolute left-0 right-0 h-[1.5px] bg-[#3A643B] rounded-full transition-all duration-200" 
                style={{ bottom: '4px' }}
                aria-hidden="true"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
