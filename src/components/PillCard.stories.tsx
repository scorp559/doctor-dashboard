import type { Meta, StoryObj } from '@storybook/react';
import PillCard from './PillCard';
import '../components/styles.css';

// Icon components for the stories
const CouponIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="8" width="16" height="8" rx="1" stroke="#3A643B" strokeWidth="1.5" fill="none"/>
    <line x1="12" y1="8" x2="12" y2="16" stroke="#3A643B" strokeWidth="1.5" strokeDasharray="2 2"/>
  </svg>
);

const OrderIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="4" width="14" height="16" rx="2" stroke="#3A643B" strokeWidth="1.5" fill="none"/>
    <line x1="9" y1="9" x2="15" y2="9" stroke="#3A643B" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="9" y1="13" x2="15" y2="13" stroke="#3A643B" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const RevenueIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="8" stroke="#3A643B" strokeWidth="1.5" fill="none"/>
    <path d="M12 8V12L14 14" stroke="#3A643B" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const LinkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M10 13C10.4295 13.5741 10.9774 14.0491 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9403 15.7513 14.6897C16.4231 14.4392 17.0331 14.047 17.54 13.54L20.54 10.54C21.4508 9.59695 21.9548 8.33394 21.9434 7.02296C21.932 5.71198 21.4061 4.45791 20.4791 3.53087C19.5521 2.60383 18.298 2.07799 16.987 2.0666C15.676 2.0552 14.413 2.55918 13.47 3.47L11.75 5.18" stroke="#3A643B" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 11C13.5705 10.4259 13.0226 9.95083 12.3934 9.60704C11.7643 9.26325 11.0685 9.05885 10.3533 9.00766C9.63819 8.95647 8.92037 9.05967 8.24861 9.31025C7.57685 9.56083 6.96689 9.95302 6.46 10.46L3.46 13.46C2.54918 14.403 2.04519 15.6661 2.05659 16.977C2.06798 18.288 2.59382 19.5421 3.52086 20.4691C4.44791 21.3962 5.70197 21.922 7.01296 21.9334C8.32394 21.9448 9.58695 21.4408 10.53 20.53L12.24 18.82" stroke="#3A643B" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const meta: Meta<typeof PillCard> = {
  title: 'Components/PillCard',
  component: PillCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A card component that displays a metric with an optional icon, title, value, and suffix.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title/label of the metric',
    },
    value: {
      control: 'text',
      description: 'The main value to display',
    },
    suffix: {
      control: 'text',
      description: 'Optional suffix text (e.g., "/month")',
    },
    iconBgColor: {
      control: 'color',
      description: 'Background color for the icon container',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PillCard>;

// Total Coupons Clicks
export const TotalCouponsClicks: Story = {
  args: {
    title: 'Total Coupons clicks',
    value: '255',
    suffix: '/month',
    icon: <CouponIcon />,
    iconBgColor: '#FFF9ED',
  },
};

// Total Orders
export const TotalOrders: Story = {
  args: {
    title: 'Total Orders',
    value: '55',
    suffix: '/month',
    icon: <OrderIcon />,
    iconBgColor: '#EDF7EE',
  },
};

// Total Revenue
export const TotalRevenue: Story = {
  args: {
    title: 'Total Revenue',
    value: '5,540',
    suffix: '/month',
    icon: <RevenueIcon />,
    iconBgColor: '#FFF4ED',
  },
};

// Total Link/Coupon
export const TotalLinkCoupon: Story = {
  args: {
    title: 'Total Link/Coupon',
    value: '5',
    suffix: '/month',
    icon: <LinkIcon />,
    iconBgColor: '#F0F7FF',
  },
};

// Without Icon
export const WithoutIcon: Story = {
  args: {
    title: 'Total Users',
    value: '1,234',
    suffix: '/month',
  },
};

// Without Suffix
export const WithoutSuffix: Story = {
  args: {
    title: 'Active Sessions',
    value: '89',
    icon: <CouponIcon />,
    iconBgColor: '#F5F5F5',
  },
};

// Large Number
export const LargeNumber: Story = {
  args: {
    title: 'Total Impressions',
    value: '1,234,567',
    suffix: '/year',
    icon: <RevenueIcon />,
    iconBgColor: '#E8F5E9',
  },
};

// Multiple Cards in a Row
export const MultipleCards: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <PillCard
        title="Total Coupons clicks"
        value="255"
        suffix="/month"
        icon={<CouponIcon />}
        iconBgColor="#FFF9ED"
      />
      <PillCard
        title="Total Orders"
        value="55"
        suffix="/month"
        icon={<OrderIcon />}
        iconBgColor="#EDF7EE"
      />
      <PillCard
        title="Total Revenue"
        value="5,540"
        suffix="/month"
        icon={<RevenueIcon />}
        iconBgColor="#FFF4ED"
      />
      <PillCard
        title="Total Link/Coupon"
        value="5"
        suffix="/month"
        icon={<LinkIcon />}
        iconBgColor="#F0F7FF"
      />
    </div>
  ),
};

// With Background
export const WithBackground: Story = {
  render: () => (
    <div className="p-8 bg-gray-50">
      <PillCard
        title="Total Revenue"
        value="5,540"
        suffix="/month"
        icon={<RevenueIcon />}
        iconBgColor="#FFF4ED"
      />
    </div>
  ),
};
