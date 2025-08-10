import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  Truck, 
  MapPin, 
  Globe, 
  Shield, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MessageSquare,
  Zap,
  Award,
  TrendingUp
} from "lucide-react";
import { TrackingSearch } from "@/components/tracking/tracking-search";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Package className="h-5 w-5 text-primary-foreground" />
                </div>
                <h1 className="text-xl font-bold text-foreground">ShipMate Logistics</h1>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
                <Link href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
                <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
                <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/sign-in">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/sign-up">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              <Zap className="h-3 w-3 mr-1" />
              Trusted by 10,000+ businesses worldwide
            </Badge>
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Global Logistics
              <span className="block text-primary-foreground/90">Made Simple</span>
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Experience seamless shipping and real-time tracking across the globe. 
              From local deliveries to international logistics, we&apos;ve got you covered.
            </p>
            
            {/* Tracking Form */}
            <div className="mt-12 max-w-lg mx-auto">
              <Card className="shadow-2xl border-0 bg-background/95 backdrop-blur">
                <CardHeader className="pb-4">
                  <CardTitle className="text-center text-lg">Track Your Package</CardTitle>
                  <CardDescription className="text-center">
                    Enter your tracking number for instant updates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TrackingSearch />
                </CardContent>
              </Card>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">50M+</div>
                <div className="text-sm text-primary-foreground/80">Packages Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">150+</div>
                <div className="text-sm text-primary-foreground/80">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">99.9%</div>
                <div className="text-sm text-primary-foreground/80">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">24/7</div>
                <div className="text-sm text-primary-foreground/80">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Features
            </Badge>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Everything You Need for
              <span className="text-primary"> Seamless Shipping</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools you need to manage your logistics efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Smart Package Management</CardTitle>
                <CardDescription>
                  Organize and track all your shipments in one intuitive dashboard
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-900/30 transition-colors">
                  <Truck className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Real-Time Tracking</CardTitle>
                <CardDescription>
                  Get instant updates on your shipment&apos;s location and status
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-900/30 transition-colors">
                  <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Global Coverage</CardTitle>
                <CardDescription>
                  Ship and track packages to and from anywhere in the world
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/30 transition-colors">
                  <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Secure & Reliable</CardTitle>
                <CardDescription>
                  Enterprise-grade security with 99.9% uptime guarantee
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center group-hover:bg-orange-200 dark:group-hover:bg-orange-900/30 transition-colors">
                  <Clock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>24/7 Support</CardTitle>
                <CardDescription>
                  Round-the-clock customer support in multiple languages
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-900/30 transition-colors">
                  <TrendingUp className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle>Analytics & Insights</CardTitle>
                <CardDescription>
                  Detailed reports and analytics to optimize your shipping
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Services
            </Badge>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Comprehensive
              <span className="text-primary"> Logistics Solutions</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From express delivery to bulk shipping, we offer solutions for every business need
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Express & Standard Shipping
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Express Delivery</h4>
                    <p className="text-sm text-muted-foreground">Same-day and next-day delivery options</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">International Shipping</h4>
                    <p className="text-sm text-muted-foreground">Worldwide delivery with customs handling</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Bulk Shipping</h4>
                    <p className="text-sm text-muted-foreground">Cost-effective solutions for large volumes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Warehouse Management</h4>
                    <p className="text-sm text-muted-foreground">Full-service storage and fulfillment</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Package className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Package Tracking</h4>
                      <p className="text-sm text-muted-foreground">Real-time updates</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                      <Truck className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Fleet Management</h4>
                      <p className="text-sm text-muted-foreground">Optimized routes</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Insurance</h4>
                      <p className="text-sm text-muted-foreground">Full coverage options</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Trusted by
              <span className="text-primary"> Leading Businesses</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our customers say about their experience with ShipMate Logistics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 bg-background/50">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  &quot;ShipMate Logistics has transformed our shipping operations. The real-time tracking and analytics have helped us reduce delivery times by 40%.&quot;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Operations Manager, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/50">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The global coverage and customer support are outstanding. We've expanded to 15 new countries thanks to ShipMate's reliable service."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                    <Globe className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">CEO, GlobalTrade Inc</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/50">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The platform is incredibly user-friendly and the analytics help us make data-driven decisions. Highly recommended!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Emily Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Logistics Director, RetailPlus</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                About Us
              </Badge>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
                Leading the Future of
                <span className="text-primary"> Global Logistics</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2020, ShipMate Logistics has grown from a local startup to a global leader in logistics technology. 
                We're committed to making shipping simple, transparent, and efficient for businesses of all sizes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">50M+</div>
                  <div className="text-sm text-muted-foreground">Packages Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Industry Awards</h4>
                      <p className="text-sm text-muted-foreground">Best Logistics Platform 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Security Certified</h4>
                      <p className="text-sm text-muted-foreground">ISO 27001 & SOC 2 Compliant</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                      <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Global Network</h4>
                      <p className="text-sm text-muted-foreground">Partners in 150+ countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl mb-6">
            Ready to Transform Your
            <span className="block">Logistics Operations?</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Join thousands of businesses that trust ShipMate Logistics for their shipping needs. 
            Get started today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/sign-up">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Contact
            </Badge>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Get in
              <span className="text-primary"> Touch</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? Our team is here to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 bg-background/50 text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Phone Support</h3>
                <p className="text-muted-foreground mb-4">24/7 customer support</p>
                <p className="text-primary font-medium">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/50 text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                <p className="text-muted-foreground mb-4">Get help via email</p>
                <p className="text-primary font-medium">support@shipmate.com</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/50 text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
                <p className="text-muted-foreground mb-4">Instant messaging support</p>
                <p className="text-primary font-medium">Available 24/7</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Package className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">ShipMate Logistics</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Your trusted partner in global logistics and shipping solutions. 
                Making shipping simple, transparent, and efficient.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-medium text-primary">T</span>
                </div>
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-medium text-primary">L</span>
                </div>
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-medium text-primary">F</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Services</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Package Tracking</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Express Delivery</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">International Shipping</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Warehouse Management</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Fleet Management</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Support</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Track Package</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Shipping Rates</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">API Documentation</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Company</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Press</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">
                &copy; 2024 ShipMate Logistics. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookies
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Security
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
