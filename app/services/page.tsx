'use client';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {motion} from 'framer-motion';
import GenralHero from "@/components/GenralHero";
export default function ServicesPage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const res = await fetch("/services/servicesList.json");
      const data = await res.json();
      setServices(data);
    };

    fetchServices();
  }, []);

  return (
    <>
       {/* Hero Section */}

    <GenralHero heading="Our Services" para=" Explore our professional services designed to help your business grow."/>

    
      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any, index: number) => (
            <motion.div
            initial={{ opacity: 0, scale:0.5 }}
              whileInView={{ opacity: 1, scale:1 }}
              transition={{ duration: 0.8, delay: 0.3 * index }}
              key={index}
              viewport={{ once:false }}
            >
              <Card key={index} className="overflow-hidden hover:shadow-lg">
              <div className="relative aspect-video">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <Button variant="link" asChild>
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </div>
            </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
