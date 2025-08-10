# ShipMate Logistics - Setup Guide

## 🚀 Getting Started

This is a logistics tracking application built with Next.js 15, Better Auth, Drizzle ORM, and shadcn/ui.

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL database (Neon recommended)
- npm or yarn

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shipmate-logistics
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@host:port/database"
   
   # Better Auth
   BETTER_AUTH_SECRET="your-secret-key-here"
   
   # App
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   # Generate Better Auth schema
   npm run auth:generate
   
   # Generate and run migrations
   npm run db:generate
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
shipmate-logistics/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Protected dashboard
│   └── track/             # Public tracking pages
├── components/            # React components
│   ├── auth/             # Authentication components
│   └── ui/               # shadcn/ui components
├── lib/                   # Utility libraries
│   ├── auth.ts           # Better Auth configuration
│   ├── auth-client.ts    # Better Auth client
│   └── db/               # Database configuration
└── public/               # Static assets
```

## 🔐 Authentication

The application uses Better Auth for authentication with the following features:

- **Email and password authentication** (as per [Better Auth documentation](https://www.better-auth.com/docs/basic-usage))
- **Drizzle ORM integration** with proper schema mapping
- **Session management** with proper secret configuration
- **Role-based access control** (admin/customer)
- **Protected routes** with middleware using `getSessionCookie()`
- **Server-side authentication** using `auth.api.getSession()`
- **Client-side authentication** using `authClient.useSession()`
- **Server Actions support** with `nextCookies()` plugin
- **Proper database schema** with user, account, session, and verification token tables

### User Roles

- **Admin**: Can create orders, manage shipments, and view all data
- **Customer**: Can view their own orders and track shipments

## 📦 Core Features

### 1. Order Management
- Create new orders with customer information
- Generate unique tracking numbers
- Manage order status and updates

### 2. Shipment Tracking
- Real-time tracking updates
- Location-based status updates
- Timeline view of shipment progress

### 3. Public Tracking
- Public tracking interface for customers
- No authentication required for tracking
- Responsive design for mobile users

### 4. Admin Dashboard
- Overview of all orders and shipments
- Quick statistics and metrics
- Easy access to common actions

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Database Schema

The application uses the following main tables:

**Better Auth Tables:**
- **user**: User accounts and authentication
- **account**: OAuth provider accounts
- **session**: User sessions
- **verification_token**: Email verification tokens

**Application Tables:**
- **orders**: Shipment orders and customer information
- **shipment_updates**: Tracking updates and location history

### API Endpoints

- `GET /api/orders` - List orders (admin only)
- `POST /api/orders` - Create order (admin only)
- `GET /api/track/[tracking_number]` - Public tracking info
- `GET /api/auth/[...all]` - Better Auth endpoints

## 🎨 UI Components

The application uses shadcn/ui for consistent, accessible components:

- Cards, buttons, inputs, and forms
- Responsive design with Tailwind CSS
- **Proper shadcn color theme system** using CSS variables
- Dark mode support with proper color schemes
- Custom tracking timeline component
- All components use semantic color classes (`text-foreground`, `text-muted-foreground`, `bg-background`, etc.)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

Make sure to set these in your production environment:

- `DATABASE_URL` - Your production database URL
- `BETTER_AUTH_SECRET` - A secure random string
- `NEXT_PUBLIC_APP_URL` - Your production domain

## 🔒 Security Considerations

- All API routes are protected with authentication where needed
- Public tracking is available without authentication
- Role-based access control for admin functions
- Input validation with Zod schemas
- CSRF protection through Better Auth

## 📱 Mobile Support

The application is fully responsive and optimized for mobile devices:

- Mobile-first design approach
- Touch-friendly interface
- Optimized tracking interface for mobile users

## 🐛 Troubleshooting

### Common Issues

1. **Database connection errors**
   - Check your `DATABASE_URL` environment variable
   - Ensure your database is accessible

2. **Authentication issues**
   - Verify `BETTER_AUTH_SECRET` is set
   - Check that the auth API routes are working

3. **Build errors**
   - Run `npm run lint` to check for issues
   - Ensure all dependencies are installed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
