'use client';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import {motion} from 'framer-motion';
import GenralHero from "@/components/GenralHero";
export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/blogs/blogList.json");
    
      const data = await res.json();
      setPosts(data);
    };

    fetchBlogs();
  }, []);

  return (
    <>
     {/* Hero Section */}

      <GenralHero heading="Our Blogs" para="Insights, Tutorial and Updates from our Team"/>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-10 md:px-20">
          {posts.map((post:any, index:number) => (
            <motion.div
            initial={{ opacity: 0, scale:0.5 }}
              whileInView={{ opacity: 1, scale:1 }}
              transition={{ duration: 0.8, delay: 0.3 * index }}
              key={index}
              viewport={{ once:false }}
            >
              <Card key={index} className="overflow-hidden hover:shadow-lg">
              <div className="relative aspect-video">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <span className="text-sm text-primary">{post.category}</span>
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <Button variant="link" asChild className="px-0">
                  <Link href={`/blogs/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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
