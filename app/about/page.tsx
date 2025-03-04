'use client';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";
import GenralHero from "@/components/GenralHero";

export default function AboutPage() {
  return (
    <>
    {/* Hero section */}
    
     <GenralHero heading="About Sky Tech Developers" para="We're a team of passionate developers and designers dedicated to
          creating exceptional digital experiences that drive business growth."/>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="px-4 sm:container grid md:grid-cols-2 gap-12">
          {[{ title: "Our Mission", icon: Target, text: "To empower businesses with innovative digital solutions." },
          { title: "Our Vision", icon: Heart, text: "To be the leading software development agency." }].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <Card className="py-8 px-6 flex flex-col">
                <item.icon className="h-12 w-12 text-primary mb-6 self-center" />
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <p className="text-muted-foreground">{item.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="px-4 sm:container text-center">
          <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Excellence", "Innovation", "Integrity"].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-6 transition-all hover:shadow-lg hover:-translate-y-1">
                  <h3 className="text-xl font-semibold mb-2">{value}</h3>
                  <p className="text-muted-foreground">Our dedication to {value.toLowerCase()} drives us forward.</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="px-4 sm:container text-center">
          <motion.h2 
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6,}}
          className="text-3xl font-bold mb-12">Our Team</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{ name: "Ali Khan", role: "Founder & CEO", img: "/images/profiles/ali.jpg" },
             { name: "Humais Ali", role: "Co-Founder", img: "/images/profiles/humais.jpg" },
            { name: "Yasir Riaz", role: " Brand Ambassador ", img: "/images/profiles/yasir.JPG" }].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <Card className="overflow-hidden">
                  <div className="aspect-square relative">
                    <Image src={member.img} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 text-center px-4"
        initial={{ opacity: 0, y: 50,scale:0.7 }}
        whileInView={{ opacity: 1, y: 0,scale:1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="container max-w-3xl mx-auto bg-muted/50 rounded-lg py-10">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Let's discuss how we can help bring your vision to life.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
