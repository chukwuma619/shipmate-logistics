"use client"
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone, Mail,
  MapPin as LocationIcon, Send
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

export default function ContactPage() {
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
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
            alt="Customer service team working"
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
              Let&apos;s Talk
              <span className="block text-primary-foreground/90">About Your Needs</span>
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your logistics operations? Our team is here to help you 
              find the perfect shipping solution for your business.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Contact Form & Info Section */}
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
              Get Your Custom Quote
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tell us about your shipping needs and we&apos;ll provide you with a personalized solution
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
          >
            {/* Contact Form */}
            <motion.div variants={slideInLeft}>
              <Card className="border-0 bg-background/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Request a Quote</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your Company Inc." />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="express">Express Shipping</SelectItem>
                        <SelectItem value="standard">Standard Shipping</SelectItem>
                        <SelectItem value="international">International Shipping</SelectItem>
                        <SelectItem value="warehouse">Warehouse Management</SelectItem>
                        <SelectItem value="custom">Custom Solution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="volume">Monthly Shipment Volume</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select volume range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-50">1-50 packages</SelectItem>
                        <SelectItem value="51-200">51-200 packages</SelectItem>
                        <SelectItem value="201-500">201-500 packages</SelectItem>
                        <SelectItem value="501-1000">501-1000 packages</SelectItem>
                        <SelectItem value="1000+">1000+ packages</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your specific shipping needs, destinations, or any special requirements..."
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Quote Request
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              variants={slideInRight}
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Get in touch with our logistics experts. We&apos;re here to help you find 
                  the perfect shipping solution for your business needs.
                </p>
              </div>
              
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
              >
                <motion.div variants={scaleIn}>
                  <Card className="border-0 bg-background/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Phone Support</h4>
                          <p className="text-muted-foreground mb-2">24/7 customer support</p>
                          <p className="text-primary font-medium">+1 (555) 123-4567</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={scaleIn}>
                  <Card className="border-0 bg-background/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                          <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Email Support</h4>
                          <p className="text-muted-foreground mb-2">Get help via email</p>
                          <p className="text-primary font-medium">quotes@shipmate.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={scaleIn}>
                  <Card className="border-0 bg-background/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                          <LocationIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Headquarters</h4>
                          <p className="text-muted-foreground mb-2">Visit our main office</p>
                          <p className="text-foreground">123 Logistics Way<br />San Francisco, CA 94105</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
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
              Why Choose ShipMate?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover what makes us the preferred choice for businesses worldwide
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
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop"
                    alt="Real-time tracking technology"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Real-Time Tracking</CardTitle>
                  <CardDescription>
                    Monitor your shipments with precision
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get instant updates on your shipment&apos;s location and status with our 
                    advanced tracking technology.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="border-0 bg-background/50 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=400&fit=crop"
                    alt="Global logistics network"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Global Network</CardTitle>
                  <CardDescription>
                    Reach 150+ countries worldwide
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our extensive network spans across continents, ensuring reliable 
                    delivery to any destination.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="border-0 bg-background/50 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
                    alt="Customer support team"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">24/7 Support</CardTitle>
                  <CardDescription>
                    Expert help whenever you need it
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our dedicated support team is available round-the-clock to assist 
                    you with any questions or concerns.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about our services
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn}>
              <Card className="border-0 bg-background/50">
                <CardHeader>
                  <CardTitle className="text-lg">How quickly can I get a quote?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We typically respond to quote requests within 24 hours during business days. 
                    For urgent requests, please call our support line.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="border-0 bg-background/50">
                <CardHeader>
                  <CardTitle className="text-lg">What information do I need for a quote?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We&apos;ll need details about your shipment volume, destinations, 
                    service requirements, and any special handling needs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="border-0 bg-background/50">
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer custom solutions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! We specialize in creating tailored logistics solutions for businesses 
                    with unique shipping requirements.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="border-0 bg-background/50">
                <CardHeader>
                  <CardTitle className="text-lg">What countries do you serve?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We provide shipping services to over 150 countries worldwide, 
                    with extensive coverage in North America, Europe, and Asia.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Join thousands of businesses that trust ShipMate Logistics for their shipping needs.
            Get your custom quote today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="#">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Request Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="tel:+15551234567">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Call Now
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
   
   </>
  );
}
