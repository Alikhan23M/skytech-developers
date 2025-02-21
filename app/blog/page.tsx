'use client';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import {motion} from 'framer-motion';
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
              Our Blogs
            </motion.h1>

            <motion.p
            initial={{ opacity: 0,y:50 }}
            whileInView={{ opacity: 1,y:0 }}
            viewport={{once:false}}
            transition={{ duration: 0.8,delay:0.8 }}
              className="hero-para text-xl mb-8 text-white">
              Insights, Tutorial and Updates from our Team
            </motion.p>
           
          </div>
          </div>
      </section>


      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 lg-px-20">
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
                <Button variant="link" asChild>
                  <Link href={`/blog/${post.slug}`}>
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
