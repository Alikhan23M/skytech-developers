'use client'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Palette,
  Brain,
  CheckCircle,
  Clock,
  Zap,
} from "lucide-react";

export default function Home() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden ">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0">
          <Image
            src="/images/bg.jpg"
            alt="Hero Image"
            fill
            style={{ objectFit: "cover" }} 
            loading="lazy"
            
          />
        </motion.div>

        {/* add blur  */}
        <div className="absolute inset-0 bg-black bg-opacity-70" />

        {/* add gradient */}
        <div className="absolute inset-0 hero-gradient"/>

        <div className="px-4 md:container relative">
          <div className="md:max-w-3xl mx-auto text-center">

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 gradient-text sm:py-3">

              Transform Your Ideas into Powerful Digital Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl mb-8 text-white">

              We're a team of passionate developers and designers creating
              exceptional software solutions that drive business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="hero-btn flex flex-col sm:flex-row gap-4 justify-center">

              <Button size="lg" asChild className="hover:scale-105 transition-transform duration-300">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild className="hover:scale-105 transition-transform duration-300">
                <Link href="/portfolio">View Our Work</Link>
              </Button>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
            className="text-3xl font-bold text-center mb-12">
           Why Choose Us?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
                title: "High-Quality Development",
                description:
                  "We follow best practices and standards to deliver robust & scalable solutions.",
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "On-Time Delivery",
                description:
                  "We understand the importance of deadlines and ensure timely project completion.",
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Scalable Solutions",
                description:
                  "Our solutions are built to grow with your business and adapt to changing needs.",
              },
            ].map((feature, index) => (

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 * index }}
                key={index}
                viewport={{ once: false }}
              >

                <Card
                  key={index}
                  className="p-6 transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col justify-center"
                >
                  <div className="mb-4  self-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 ">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>

            ))}
          </div>
        </div>
      </section>

      {/*Featured Services Section */}
      <section className="py-20">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0.5, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false }}

            className="text-3xl font-bold text-center mb-12">Our Services</motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code2 className="h-8 w-8" />,
                title: "Web Development",
                description:
                  "Custom web applications built with modern technologies.",
                href: "/services/web-development",
              },
              {
                icon: <Smartphone className="h-8 w-8" />,
                title: "Mobile Development",
                description: "Native and cross-platform mobile applications.",
                href: "/services/mobile-development",
              },
              {
                icon: <Palette className="h-8 w-8" />,
                title: "UI/UX Design",
                description: "User-centered design solutions for digital products.",
                href: "/services/ui-ux-design",
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Artificial Intelligence",
                description: "Comprehensive AI solutions for your business.",
                href: "/services/aritificial-intelligence",
              },
            ].map((service, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 * index }}
                viewport={{ once: false }}
                key={index}
              >
                <Card
                  key={index}
                  className="p-6 transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col justify-center"
                >
                  <div className="mb-4 text-primary self-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="link" className="p-0 self-start" asChild>
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-3xl font-bold text-center mb-12">
            Technologies We Use
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              {
                name: "React",
                logo: "/images/techstack/react.png",
              },
              {
                name: "Next.js",
                logo: "/images/techstack/nextjs.Default",
              },
              {
                name: "Node.js",
                logo: "/images/techstack/nodejs.webp",
              },
              {
                name: "TypeScript",
                logo: "/images/techstack/typescript.png",
              },
              {
                name: "MongoDB",
                logo: "/images/techstack/mongodb.png",
              },
              {
                name: "Firebase",
                logo: "/images/techstack/firebase.png",
              },
            ].map((tech, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 * index }}
                viewport={{ once: false }}
                key={index}
                className="flex items-center justify-center p-4 bg-background rounded-lg shadow-sm"
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="h-12 w-auto object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 ">
        <div className="px-4 md:containerp">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-center bg-muted/50 rounded-lg py-10 px-4 md:max-w-3xl mx-auto ">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Let's discuss how we can help bring your vision to life.
            </p>
            <Button size="lg" asChild className="hover:scale-105 transition-transform duration-300">
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}