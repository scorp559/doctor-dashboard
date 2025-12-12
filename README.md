# Amrutam Dashboard

A modern affiliate and referral management dashboard built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Dashboard Overview** - Real-time statistics for coupons, orders, revenue, and links
- **Referral Tool** - Generate and manage affiliate links and coupons
- **Earnings Tracking** - Monitor commission earnings with detailed history
- **Product Management** - Catalog of products with affiliate links
- **Revenue Analytics** - Track clicks, orders, and revenue metrics
- **Responsive Design** - Mobile-friendly interface with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1 with TypeScript 5.3.3
- **Build Tool**: Vite 5.0.8
- **Routing**: React Router DOM 6.20.1
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React
- **SEO**: React Helmet Async
- **Font**: Poppins (Google Fonts)

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd amrutam-dashboard
```

2. Install dependencies:
```bash
npm install
```

## 🚦 Getting Started

### Development Mode

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
amrutam-dashboard/
├── src/
│   ├── assets/          # Images and logos
│   ├── components/      # Reusable UI components
│   │   ├── icons/       # Custom icon components
│   │   └── ...
│   ├── data/           # Sample data
│   ├── pages/          # Page components
│   ├── routes/         # Application routing
│   ├── utils/          # Helper functions
│   ├── types.ts        # TypeScript type definitions
│   ├── App.tsx         # Root component
│   └── main.tsx        # Application entry point
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.cjs # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🎯 Available Routes

- `/` - Dashboard home
- `/referral-tool` - Referral link generation
- `/earning-history` - Earnings and transaction history
- `/patients` - Patient management
- `/profile` - User profile

## 📦 Key Dependencies

- `react` - UI library
- `react-router-dom` - Client-side routing
- `lucide-react` - Icon library
- `clsx` - Utility for constructing className strings
- `react-helmet-async` - SEO management

## 🎨 Styling

This project uses Tailwind CSS for styling with a custom configuration. The primary brand color is `#3A643B`.

## 💡 Features in Detail

### Dashboard
- Overview statistics (coupons, orders, revenue, links)
- Recent referral activity
- Quick access to key metrics

### Referral Tool
- Generate custom affiliate links
- Create and manage coupon codes
- Track link performance

### Earnings History
- Detailed transaction records
- Commission tracking
- Status monitoring (pending/completed/failed)

## 🔒 Environment Variables

Create a `.env` file in the root directory for environment-specific variables (if needed).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Authors

Amrutam Team

## 🐛 Issues

For bug reports and feature requests, please open an issue on the repository.

---

Built with ❤️ using React and TypeScript
