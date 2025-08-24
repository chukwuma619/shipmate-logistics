# Toshipper Logistics 🚚

A modern logistics tracking application built with Next.js 15, featuring real-time package tracking, user authentication, and admin management tools.

## ✨ Features

### 🔍 Public Tracking
- **Real-time package tracking** - Anyone can track packages using tracking numbers
- **Beautiful tracking interface** - Modern UI with timeline view of shipment updates
- **Mobile-responsive design** - Works perfectly on all devices

### 🔐 Authentication & User Management
- **Secure authentication** - Built with Better Auth for Next.js
- **Email/password signup & signin** - Traditional authentication flow
- **Session management** - Automatic session handling with cookies
- **Role-based access** - Customer and admin roles

### 📦 Admin Dashboard
- **Order management** - Create and manage shipping orders
- **Shipment tracking** - Real-time updates and status management
- **Customer information** - Store and manage customer details
- **Analytics overview** - Quick stats and insights

### 🎨 Modern UI/UX
- **Shadcn/UI components** - Beautiful, accessible components
- **Dark mode support** - Automatic theme switching
- **Semantic color system** - Consistent theming throughout
- **Responsive design** - Optimized for all screen sizes

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router, SSR, RSC)
- **Authentication**: Better Auth
- **Database**: PostgreSQL (Neon Database)
- **ORM**: Drizzle ORM
- **Styling**: Tailwind CSS + Shadcn/UI
- **Language**: TypeScript
- **Form Handling**: React Hook Form + Zod validation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (Neon Database recommended)
- npm, yarn, or pnpm

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd toshipper-logistics
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@host:port/database"

# Better Auth
BETTER_AUTH_SECRET="your-super-secret-key-here"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 4. Database Setup
```bash
# Generate and apply database migrations
npm run db:generate
npm run db:push

# (Optional) Open Drizzle Studio to view/edit data
npm run db:studio
```

### 5. Generate Better Auth Schema
```bash
npm run auth:generate
```

### 6. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
toshipper-logistics/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── auth/                 # Better Auth endpoints
│   │   ├── orders/               # Order management API
│   │   └── track/                # Public tracking API
│   ├── dashboard/                # Protected admin pages
│   ├── sign-in/                  # Authentication pages
│   ├── sign-up/
│   ├── track/                    # Public tracking pages
│   └── page.tsx                  # Landing page
├── components/                   # Reusable components
│   ├── auth/                     # Authentication components
│   ├── orders/                   # Order management components
│   ├── tracking/                 # Tracking components
│   └── ui/                       # Shadcn/UI components
├── lib/                          # Utility libraries
│   ├── auth.ts                   # Better Auth configuration
│   ├── auth-client.ts            # Client-side auth
│   └── db/                       # Database configuration
├── middleware.ts                 # Route protection
└── drizzle.config.ts             # Drizzle ORM config
```

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Database
npm run db:generate      # Generate Drizzle migrations
npm run db:push          # Push schema to database
npm run db:studio        # Open Drizzle Studio

# Authentication
npm run auth:generate    # Generate Better Auth schema
```

## 🎯 Usage Guide

### For Customers
1. **Track Packages**: Visit the homepage and enter a tracking number
2. **View Updates**: See real-time shipment status and location updates
3. **No Account Required**: Public tracking is available to everyone

### For Admins
1. **Sign Up/In**: Create an account or sign in at `/sign-up` or `/sign-in`
2. **Dashboard**: Access the admin dashboard at `/dashboard`
3. **Create Orders**: Add new shipping orders at `/dashboard/orders/new`
4. **Manage Orders**: View and manage all orders at `/dashboard/orders`

## 🔐 Authentication Flow

The application uses Better Auth with the following features:

- **Email/Password Authentication**: Traditional signup and signin
- **Session Management**: Automatic cookie-based sessions
- **Route Protection**: Middleware-based route protection
- **Server-Side Validation**: Secure session validation on protected routes

### Protected Routes
- `/dashboard/*` - All dashboard pages require authentication
- API routes for order management require valid sessions

### Public Routes
- `/` - Landing page with tracking
- `/track/*` - Public tracking pages
- `/sign-in`, `/sign-up` - Authentication pages
- `/api/track/*` - Public tracking API

## 🎨 Styling & Theming

The application uses Shadcn/UI with a semantic color system:

- **Primary Colors**: Used for main actions and branding
- **Semantic Colors**: Success, warning, error states
- **Dark Mode**: Automatic theme switching
- **Responsive**: Mobile-first design approach

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](../../issues) page for existing solutions
2. Create a new issue with detailed information
3. Include your environment details and error messages

## 🔮 Roadmap

- [ ] Email notifications for shipment updates
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Integration with shipping carriers
- [ ] Real-time chat support

---

Built with ❤️ using Next.js, Better Auth, and Shadcn/UI
