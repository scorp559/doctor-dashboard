import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import TabNavigation, { TabValue } from './TabNavigation';
import '../components/styles.css';

const meta: Meta<typeof TabNavigation> = {
  title: 'Components/TabNavigation',
  component: TabNavigation,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tab navigation component that displays four time period options with an active underline indicator. Supports keyboard navigation and controlled/uncontrolled modes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    activeTab: {
      control: 'select',
      options: ['today', 'week', 'month', 'custom'],
      description: 'The currently active tab (controlled mode)',
    },
    onTabChange: {
      action: 'tab-changed',
      description: 'Callback fired when a tab is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TabNavigation>;

// Default story - uncontrolled with Month as default
export const Default: Story = {
  args: {},
};

// Controlled story with Today active
export const TodayActive: Story = {
  args: {
    activeTab: 'today',
  },
};

// Controlled story with Week active
export const WeekActive: Story = {
  args: {
    activeTab: 'week',
  },
};

// Controlled story with Month active (default)
export const MonthActive: Story = {
  args: {
    activeTab: 'month',
  },
};

// Controlled story with Custom active
export const CustomActive: Story = {
  args: {
    activeTab: 'custom',
  },
};

// Interactive controlled example
export const ControlledWithState: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState<TabValue>('month');
    
    return (
      <div className="space-y-4">
        <TabNavigation 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        <div 
          className="text-center text-sm mt-4 p-4 bg-gray-100 rounded"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Active Tab: <strong>{activeTab}</strong>
        </div>
      </div>
    );
  },
};

// Uncontrolled example
export const Uncontrolled: Story = {
  render: () => {
    return (
      <div className="space-y-4">
        <TabNavigation 
          onTabChange={(tab) => console.log('Tab changed to:', tab)} 
        />
        <div 
          className="text-center text-xs text-gray-500 mt-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          This tab is uncontrolled. Check the console for changes.
        </div>
      </div>
    );
  },
};

// With background to show shadow
export const WithBackground: Story = {
  render: () => (
    <div className="p-8 bg-gray-50">
      <TabNavigation />
    </div>
  ),
};

// Keyboard navigation demo
export const KeyboardAccessible: Story = {
  render: () => (
    <div className="space-y-4">
      <TabNavigation />
      <div 
        className="text-center text-xs text-gray-600 mt-4 p-4 bg-blue-50 rounded"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        💡 <strong>Keyboard Accessible:</strong> Use Tab to navigate, Enter or Space to select
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This component is fully keyboard accessible. Use Tab to navigate between options and Enter or Space to select.',
      },
    },
  },
};
