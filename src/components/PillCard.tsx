import React from 'react';

export interface PillCardProps {
  title: string;
  value: string | number;
  suffix?: string;
  icon?: React.ReactNode;
  iconBgColor?: string;
}

const PillCard: React.FC<PillCardProps> = ({ 
  title, 
  value, 
  suffix, 
  icon,
  iconBgColor = '#FDF8E5'
}) => {
  return (
    <div 
      className="bg-white rounded-[12px] px-6 py-5 min-w-[220px]"
      style={{
        border: '1px solid #E2E2E2'
      }}
    >
      <div className="flex flex-col gap-4">
        {/* Title */}
        <h3 
          className="text-[14px]"
          style={{ 
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            color: '#333448',
            lineHeight: '1.4'
          }}
        >
          {title}
        </h3>
        
        {/* Value Row */}
        <div className="flex items-center gap-3">
          {/* Icon */}
          {icon && (
            <div 
              className="w-[44px] h-[44px] rounded-[15px] flex items-center justify-center flex-shrink-0"
              style={{ 
                backgroundColor: iconBgColor,
                border: '1.5px solid #E3E3E3'
              }}
            >
              {icon}
            </div>
          )}
          
          {/* Value */}
          <div className="flex items-baseline gap-1">
            <span 
              className="text-[34px] leading-none"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                color: '#3A643B'
              }}
            >
              {value}
            </span>
            {suffix && (
              <span 
                className="text-[11px]"
                style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  color: '#7D7D7D',
                  lineHeight: '1.4'
                }}
              >
                {suffix}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillCard;