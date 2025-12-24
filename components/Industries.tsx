"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const BlurTypewriter = ({ text }: { text: string }) => {
  const characters = text.split("");

  return (
    <span className="inline-flex items-center">
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: 16, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.04,
            duration: 0.2,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const industries = [
  "Finance", "E-commerce", "Healthcare", "SaaS", "Real Estate", "Logistics", "Legal", "Education"
];

export default function Industries() {
  return (
    <section id="industries" className="relative z-10 bg-black text-white py-24 overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
       
       <Container className="relative">
          <motion.div
             className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7, ease: "easeOut" }}
          >
             <div className="max-w-xl">
                <motion.h2
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                   className="text-sm font-medium text-gray-400 tracking-wider uppercase mb-4 block"
                >
                   Industries
                </motion.h2>
                <motion.h1
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                   className="text-4xl md:text-5xl font-serif font-normal tracking-tight"
                >
                   <BlurTypewriter text="Built for the real world." />
                   <br />
                   <BlurTypewriter text="Across every industry." />
                </motion.h1>
             </div>
             
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="flex flex-wrap gap-2 max-w-lg justify-start md:justify-end"
             >
                {industries.map((ind, i) => (
                    <span key={i} className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white/10 transition-colors cursor-default">
                        {ind}
                    </span>
                ))}
             </motion.div>
          </motion.div>
          
          <motion.div
             className="grid grid-cols-1 md:grid-cols-3 gap-6"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
             {/* Card 1 */}
             <IndustryCard 
                category="Finance"
                description="AI agents generate reports, track market trends, and streamline compliance — all with verifiable audit trails for complete transparency."
             />
             {/* Card 2 */}
             <IndustryCard 
                category="E-commerce"
                description="Automate inventory management, personalize customer journeys at scale, and handle support tickets instantly."
             />
             {/* Card 3 */}
             <IndustryCard 
                category="Healthcare"
                description="Process patient data securely, automate scheduling, and assist with preliminary diagnostics analysis."
             />
          </motion.div>

       </Container>
    </section>
  )
}

function IndustryCard({ category, description }: { category: string, description: string }) {
    return (
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
        >
            <h3 className="text-xl font-bold mb-4">{category}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
            <div className="mt-8 flex items-center text-sm font-medium text-white group cursor-pointer">
                View use cases <span className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
            </div>
        </motion.div>
    )
}
