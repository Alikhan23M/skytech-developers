'use client'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import {motion} from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center">
     <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{once:false}}
               transition={{ duration: 0.8 }}
               className="absolute inset-0">
               <Image
                 src="/images/bg.jpg"
                 alt="Hero Image"
                 layout="fill"
                 objectFit="cover"
               />
             </motion.div>
             {/* add blur  */}
             <div className="absolute inset-0 bg-black bg-opacity-70" />
             {/* add gradient */}
        <div className="absolute inset-0 hero-gradient" />

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0,y:50 }}
              whileInView={{ opacity: 1,y:0 }}
              viewport={{once:false}}
              transition={{ duration: 0.8,delay:0.2 }}
              
              className="hero-heading text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Contact Us
            </motion.h1>

            <motion.p
            initial={{ opacity: 0,y:50 }}
            whileInView={{ opacity: 1,y:0 }}
            viewport={{once:false}}
            transition={{ duration: 0.8,delay:0.8 }}
              className="hero-para text-xl mb-8 text-white">
             Have a project in mind? Let's discuss how we can help bring your vision to life.
            </motion.p>
           
          </div>
          </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
            initial={{ opacity: 0, x:-40 }}
            whileInView={{ opacity: 1,x:0 }}
            viewport={{once:false}}
            transition={{ duration: 0.8 }}
            >
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    required
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
            initial={{ opacity: 0, x:40 }}
            whileInView={{ opacity: 1,x:0 }}
            viewport={{once:false}}
            transition={{ duration: 0.8 }}
            className="space-y-8">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">
                        123 Tech Street, Silicon Valley
                        <br />
                        CA 94025, United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">
                        contact@skytech.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/company/skytech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://twitter.com/skytech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a
                    href="https://github.com/skytech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}