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

const benefits = [
    { title: "Increased efficiency", desc: "AI agents handle tasks instantly, speeding up delivery across workflows." },
    { title: "Lower Operational Costs", desc: "Automate repetitive work and scale operations without scaling your headcount." },
    { title: "Smarter Decision-Making", desc: "Turn scattered data into actionable insights with AI-powered analysis." },
    { title: "24/7 Workflow Continuity", desc: "Run critical processes nonstop — even outside business hours." },
    { title: "Seamless Integration", desc: "Connect with your current tools and systems in minutes, not months." },
    { title: "Enterprise-Grade Security", desc: "Protect sensitive data with encrypted, compliant, and secure AI operations." },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative z-10 bg-white py-24">
       <Container>
          <motion.div
             className="mb-16"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7, ease: "easeOut" }}
          >
             <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="text-sm font-medium text-blue-600 tracking-wider uppercase mb-2 block"
             >
                Benefits
             </motion.h2>
            <motion.h1
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
               className="text-3xl md:text-5xl font-serif font-normal text-gray-900 max-w-2xl"
            >
               <BlurTypewriter text="Let your team focus on" />
               <br />
               <BlurTypewriter text="what matters most" />
            </motion.h1>
          </motion.div>

          <motion.div
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
             {benefits.map((b, i) => (
                <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.7, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                   className="flex flex-col gap-3"
                >
                   <div className="h-1 w-12 bg-blue-600 mb-2" />
                   <h2 className="text-xl font-medium text-gray-900">{b.title}</h2>
                   <p className="text-gray-600 leading-relaxed">{b.desc}</p>
                </motion.div>
             ))}
          </motion.div>
          
          {/* Visual Divider / Image Placeholder */}
          <div className="mt-24 w-full h-80 bg-gray-100 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-100 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                  Workspace Dashboard Preview
              </div>
          </div>
       </Container>
    </section>
  )
}
