"use client"
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Globe, Shield, 
  ArrowRight,
  Target, Zap, Heart
} from "lucide-react";

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

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function AboutPage() {
  return (
   <>
   
   {/* Hero Section */}
   <motion.section 
     className="relative overflow-hidden"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ duration: 0.8 }}
   >
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
        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
        </motion.div>
      </motion.section>

      {/* Mission & Vision Section */}
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
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
              Mission & Vision
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Driving the future of logistics with cutting-edge technology and unparalleled service
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
          >
            <motion.div variants={slideInLeft}>
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
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={slideInRight}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Company History Section */}
      <motion.section 
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
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startup to industry leader - our story of innovation and growth
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
            </motion.div>

            <motion.div variants={scaleIn}>
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
            </motion.div>

            <motion.div variants={scaleIn}>
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
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
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
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn}>
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
            </motion.div>

            <motion.div variants={scaleIn}>
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
            </motion.div>

            <motion.div variants={scaleIn}>
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
            </motion.div>

            <motion.div variants={scaleIn}>
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
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
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
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals dedicated to transforming global logistics
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn}>
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
            </motion.div>

            <motion.div variants={scaleIn}>
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
            </motion.div>

            <motion.div variants={scaleIn}>
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
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-primary to-primary/80"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl mb-6">
              By The Numbers
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Our impact in the global logistics industry
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center"
              variants={scaleIn}
            >
              <div className="text-4xl font-bold text-primary-foreground mb-2">50M+</div>
              <div className="text-primary-foreground/90">Packages Delivered</div>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={scaleIn}
            >
              <div className="text-4xl font-bold text-primary-foreground mb-2">150+</div>
              <div className="text-primary-foreground/90">Countries Served</div>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={scaleIn}
            >
              <div className="text-4xl font-bold text-primary-foreground mb-2">10K+</div>
              <div className="text-primary-foreground/90">Business Customers</div>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={scaleIn}
            >
              <div className="text-4xl font-bold text-primary-foreground mb-2">99.9%</div>
              <div className="text-primary-foreground/90">Uptime Guarantee</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-muted/30"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
            Ready to Transform Your
            <span className="block">Logistics Operations?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of businesses that trust Toshipper Logistics for their shipping needs.
            Start managing your logistics today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Get A Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
   </>
  );
}
