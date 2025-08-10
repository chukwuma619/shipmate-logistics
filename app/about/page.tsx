import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe, Shield, 
  Package, ArrowRight,
  Building2, Target, Zap, Heart
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">ShipMate</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-foreground font-medium">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
            <Link href="/contact">
              <Button>GET A QUOTE</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop"
            alt="Modern corporate headquarters"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Our Story
              <span className="block text-primary-foreground/90">Our Mission</span>
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              We&apos;re revolutionizing global logistics through innovative technology, 
              exceptional service, and unwavering commitment to our customers&apos; success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
              Mission & Vision
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Driving the future of logistics with cutting-edge technology and unparalleled service
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To provide seamless, reliable, and efficient logistics solutions that empower businesses 
                    to reach global markets with confidence. We strive to make international shipping as 
                    simple as local delivery.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To become the world&apos;s most trusted logistics platform, connecting businesses 
                    across continents through innovative technology and exceptional service. We envision 
                    a world where distance is no barrier to commerce.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop"
                  alt="Global logistics network"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Connecting the World</h4>
                  <p className="text-white/90">Building bridges between businesses and markets worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startup to industry leader - our story of innovation and growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 bg-background/50 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
                  alt="Startup team working"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">2018 - The Beginning</CardTitle>
                <CardDescription>
                  Founded with a vision to simplify global logistics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Started as a small team of logistics experts and tech innovators, 
                  determined to solve the complex challenges of international shipping.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/50 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop"
                  alt="Technology development"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">2020 - Technology Breakthrough</CardTitle>
                <CardDescription>
                  Launched our revolutionary tracking platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Developed cutting-edge real-time tracking technology that 
                  transformed how businesses monitor their shipments globally.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/50 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop"
                  alt="Global expansion"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">2024 - Global Leader</CardTitle>
                <CardDescription>
                  Serving businesses in 150+ countries worldwide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expanded to serve millions of customers across the globe, 
                  becoming the trusted partner for international logistics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 bg-background/50 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Customer First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every decision we make starts with our customers&apos; needs and success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/50 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We deliver on our promises with consistent, dependable service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/50 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Constantly pushing boundaries to create better solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/50 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Global Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Making the world smaller by connecting businesses everywhere.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals dedicated to transforming global logistics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 bg-background/50 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=500&fit=crop"
                  alt="CEO - David Chen"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle>David Chen</CardTitle>
                <CardDescription>Chief Executive Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Former VP of Operations at FedEx with 15+ years in logistics. 
                  Passionate about technology and customer experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/50 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=500&fit=crop"
                  alt="CTO - Sarah Rodriguez"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle>Sarah Rodriguez</CardTitle>
                <CardDescription>Chief Technology Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ex-Google engineer with expertise in AI and logistics optimization. 
                  Leading our technology innovation efforts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/50 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop"
                  alt="COO - Michael Johnson"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle>Michael Johnson</CardTitle>
                <CardDescription>Chief Operations Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Former DHL executive with deep expertise in global supply chains. 
                  Ensuring operational excellence across all markets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl mb-6">
              By The Numbers
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Our impact in the global logistics industry
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-foreground mb-2">50M+</div>
              <div className="text-primary-foreground/90">Packages Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-foreground mb-2">150+</div>
              <div className="text-primary-foreground/90">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-foreground mb-2">10K+</div>
              <div className="text-primary-foreground/90">Business Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-foreground mb-2">99.9%</div>
              <div className="text-primary-foreground/90">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
            Ready to Transform Your
            <span className="block">Logistics Operations?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of businesses that trust ShipMate Logistics for their shipping needs.
            Start managing your logistics today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/sign-up">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Package className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">ShipMate</span>
              </div>
              <p className="text-muted-foreground">
                Revolutionizing global logistics through innovative technology and exceptional service.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link href="/press" className="text-muted-foreground hover:text-foreground transition-colors">Press</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link href="/status" className="text-muted-foreground hover:text-foreground transition-colors">Status</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms</Link></li>
                <li><Link href="/security" className="text-muted-foreground hover:text-foreground transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 ShipMate Logistics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
