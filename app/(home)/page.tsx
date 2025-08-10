"use client"
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

import {
  Globe,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { TrackingSearch } from "@/components/tracking/tracking-search";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export default function HomePage() {
  return (
    <>
    
          {/* Hero Section */}
          <motion.section 
            className="relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/image.png"
            alt="Global logistics hub with shipping containers, trucks, and cargo ships"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Global Logistics
              <span className="block text-primary-foreground/90">
                Made Simple
              </span>
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Experience seamless shipping and real-time tracking across the
              globe. From local deliveries to international logistics,
              we&apos;ve got you covered.
            </p>

            {/* Tracking Form */}
            <motion.div 
              className="mt-12 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="shadow-2xl border-0 bg-background/95 backdrop-blur">
                <CardHeader className="pb-4">
                  <CardTitle className="text-center text-lg">
                    Track Your Package
                  </CardTitle>
                  <CardDescription className="text-center">
                    Enter your tracking number for instant updates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TrackingSearch />
                </CardContent>
              </Card>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">
                  50M+
                </div>
                <div className="text-sm text-primary-foreground/80">
                  Packages Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">
                  150+
                </div>
                <div className="text-sm text-primary-foreground/80">
                  Countries Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">
                  99.9%
                </div>
                <div className="text-sm text-primary-foreground/80">
                  On-Time Delivery
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">
                  24/7
                </div>
                <div className="text-sm text-primary-foreground/80">
                  Customer Support
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        id="features" 
        className="py-20 bg-muted/30"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >

            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Everything You Need for
              <span className="text-primary"> Seamless Shipping</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools you need to
              manage your logistics efficiently
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop"
                    alt="Modern warehouse with organized packages"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle>Smart Package Management</CardTitle>
                  <CardDescription>
                    Organize and track all your shipments in one intuitive
                    dashboard
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop"
                    alt="Real-time tracking dashboard"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle>Real-Time Tracking</CardTitle>
                  <CardDescription>
                    Get instant updates on your shipment&apos;s location and
                    status
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop"
                    alt="Global shipping network"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle>Global Coverage</CardTitle>
                  <CardDescription>
                    Ship and track packages to and from anywhere in the world
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop"
                    alt="Secure logistics operations"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle>Secure & Reliable</CardTitle>
                  <CardDescription>
                    Enterprise-grade security with 99.9% uptime guarantee
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
                    alt="24/7 customer support team"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle>24/7 Support</CardTitle>
                  <CardDescription>
                    Round-the-clock customer support in multiple languages
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
                    alt="Data analytics dashboard"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle>Analytics & Insights</CardTitle>
                  <CardDescription>
                    Detailed reports and analytics to optimize your shipping
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        id="services" 
        className="py-20 bg-background"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >

            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Comprehensive
              <span className="text-primary"> Logistics Solutions</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From express delivery to bulk shipping, we offer solutions for
              every business need
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={fadeInUp}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Express & Standard Shipping
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">
                      Express Delivery
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Same-day and next-day delivery options
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">
                      International Shipping
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Worldwide delivery with customs handling
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">
                      Bulk Shipping
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Cost-effective solutions for large volumes
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">
                      Warehouse Management
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Full-service storage and fulfillment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop"
                  alt="Shipping containers and logistics operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">
                    Global Logistics Network
                  </h4>
                  <p className="text-white/90">
                    Connecting businesses worldwide through efficient shipping
                    solutions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="py-20 bg-muted/30"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >

            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Trusted by
              <span className="text-primary"> Leading Businesses</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our customers say about their experience with ShipMate
              Logistics
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn}>
              <Card className="border-0 bg-background/50 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=400&fit=crop"
                    alt="Sarah Johnson - Operations Manager"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    &quot;ShipMate Logistics has transformed our shipping
                    operations. The real-time tracking and analytics have helped
                    us reduce delivery times by 40%.&quot;
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">
                        Operations Manager, TechCorp
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="border-0 bg-background/50 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=400&fit=crop"
                    alt="Michael Chen - CEO"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    &quot;The global coverage and customer support are
                    outstanding. We&apos;ve expanded to 15 new countries thanks to
                    ShipMate&apos;s reliable service.&quot;
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                      <Globe className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Michael Chen</p>
                      <p className="text-sm text-muted-foreground">
                        CEO, GlobalTrade Inc
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="border-0 bg-background/50 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=400&fit=crop"
                    alt="Emily Rodriguez - Logistics Director"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    &quot;The platform is incredibly user-friendly and the
                    analytics help us make data-driven decisions. Highly
                    recommended!&quot;
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        Emily Rodriguez
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Logistics Director, RetailPlus
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-20 bg-background"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>

              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
                Leading the Future of
                <span className="text-primary"> Global Logistics</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2020, ShipMate Logistics has grown from a local
                startup to a global leader in logistics technology. We&apos;re
                committed to making shipping simple, transparent, and efficient
                for businesses of all sizes, with reliable door-to-door delivery
                services.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Team Members
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">50M+</div>
                  <div className="text-sm text-muted-foreground">
                    Packages Delivered
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">
                    Countries Served
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                  alt="Modern corporate office building"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">
                    Leading the Future
                  </h4>
                  <p className="text-white/90">
                    Innovative logistics technology driving global commerce
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-primary to-primary/80"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl mb-6">
            Ready to Transform Your
            <span className="block">Logistics Operations?</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Join thousands of businesses that trust ShipMate Logistics for their
            door-to-door shipping needs. Start managing your logistics today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/sign-up">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-20 bg-muted/30"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >

            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Get in
              <span className="text-primary"> Touch</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? Our team is here to help you succeed
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn}>
              <Card className="border-0 bg-background/50 text-center overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=300&fit=crop"
                    alt="Customer service representative on phone"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Phone Support
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    24/7 customer support
                  </p>
                  <p className="text-primary font-medium">+1 (555) 123-4567</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="border-0 bg-background/50 text-center overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=300&fit=crop"
                    alt="Customer service team working"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Email Support
                  </h3>
                  <p className="text-muted-foreground mb-4">Get help via email</p>
                  <p className="text-primary font-medium">support@shipmate.com</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="border-0 bg-background/50 text-center overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=300&fit=crop"
                    alt="Live chat support interface"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Live Chat
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Instant messaging support
                  </p>
                  <p className="text-primary font-medium">Available 24/7</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

    </>
  );
}
