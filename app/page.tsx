import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, MapPin } from "lucide-react";
import { TrackingSearch } from "@/components/tracking/tracking-search";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-foreground">ShipMate Logistics</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/sign-in">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/sign-up">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">
              Track Your Shipments
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Real-time tracking and updates for all your logistics needs. 
              Get instant updates on your shipments from anywhere in the world.
            </p>
            
            {/* Tracking Form */}
            <div className="mt-10 max-w-md mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Track Your Package</CardTitle>
                  <CardDescription className="text-center">
                    Enter your tracking number to get real-time updates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TrackingSearch />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Why Choose ShipMate Logistics?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We provide comprehensive logistics solutions with real-time tracking
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary/10">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-foreground">
                Package Management
              </h3>
              <p className="mt-2 text-muted-foreground">
                Efficiently manage and track all your packages in one place
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                <Truck className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-foreground">
                Real-time Tracking
              </h3>
              <p className="mt-2 text-muted-foreground">
                Get instant updates on your shipment&apos;s location and status
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
                <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-foreground">
                Global Coverage
              </h3>
              <p className="mt-2 text-muted-foreground">
                Ship and track packages to and from anywhere in the world
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of customers who trust ShipMate Logistics for their shipping needs
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link href="/sign-up">
              <Button size="lg">
                Create Account
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button variant="outline" size="lg">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground">ShipMate Logistics</h3>
              <p className="mt-2 text-muted-foreground">
                Your trusted partner in logistics and shipping solutions.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Services</h4>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>Package Tracking</li>
                <li>Shipping Solutions</li>
                <li>Logistics Management</li>
                <li>Global Shipping</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Support</h4>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Track Package</li>
                <li>Shipping Rates</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 ShipMate Logistics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
