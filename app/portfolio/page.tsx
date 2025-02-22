'use client';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import GenralHero from "@/components/GenralHero";
export default function BlogPage() {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/projects/projectList.json");
      const data = await res.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(projects.map((project: any) => project.category)))];


  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project: any) => project.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}

      <GenralHero heading="Our Projects" para=" Explore our latest work"/>

      
      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-4 my-6 mt-20 flex-wrap">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-10 lg:px-20">
          {filteredProjects.map((project: any, index: number) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 * index }}
              key={index}
              viewport={{ once: false }}
            >
              <Card key={index} className="overflow-hidden hover:shadow-lg">
                <div className="relative aspect-video">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6 gap-2">
                  <span className="text-sm text-primary">{project.category}</span>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <Button variant="link" asChild className="px-0">
                    <Link href={`/portfolio/${project.link}`}>
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
