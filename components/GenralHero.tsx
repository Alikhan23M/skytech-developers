
import Image from "next/image";
import { motion } from "framer-motion"
export default function GenralHero(props:any) {
    return (
      <>
      
        {/* Hero Section */}
        <section
      className=" relative py-20 md:py-32"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0">
        <Image
          src="/images/bg.jpg"
          alt="Hero Image"
          layout="fill"
          style={{ objectFit: "cover" }} 
        />
      </motion.div>
      {/* add blur  */}
      <div className="absolute inset-0 bg-black bg-opacity-70" />
      {/* add gradient */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative container text-center max-w-3xl mx-auto">
        <motion.h1 
         initial={{ opacity: 0,y:50 }}
         whileInView={{ opacity: 1,y:0 }}
         viewport={{once:false}}
         transition={{ duration: 0.8,delay:0.2 }}
        className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
         {props.heading}
        </motion.h1>
        <motion.p 
         initial={{ opacity: 0,y:50 }}
         whileInView={{ opacity: 1,y:0 }}
         viewport={{once:false}}
         transition={{ duration: 0.8,delay:0.8 }}
        className="text-xl mb-8 text-white">
          {props.para}
        </motion.p>
      </div>
    </section>
      
      </>
    )
}
