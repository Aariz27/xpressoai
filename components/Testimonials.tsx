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

const testimonials = [
  {
    quote: "Before XpressoAI, our operations were bottlenecked by manual processes and fragmented tools. Within the first month, we automated 60% of our most repetitive workflows.",
    author: "Lauren Meyers",
    role: "Growth Strategist",
    stat: "97%",
    statDesc: "Boost in efficiency"
  },
  {
    quote: "XpressoAI changed how we think about scaling. We didn’t need to hire a massive team — the AI agents filled in the gaps and made us operate like a company twice our size.",
    author: "Marcus Lee",
    role: "CTO, Coursa",
    stat: "4x",
    statDesc: "Increase in bottom line"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative z-10 bg-white py-24 border-t border-gray-100">
      <Container>
        <motion.div
            className="mb-16 text-center"
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
               Testimonials
            </motion.h2>
            <motion.h1
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
               className="text-3xl md:text-5xl font-serif font-normal text-gray-900"
            >
               <BlurTypewriter text="Real results. Real teams." />
               <br />
               <BlurTypewriter text="Powered by AI." />
            </motion.h1>
        </motion.div>

        <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
            {testimonials.map((t, i) => (
                <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.7, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                   className="p-10 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col justify-between"
                >
                    <p className="text-xl leading-relaxed text-gray-800 mb-8">“{t.quote}”</p>
                    
                    <div className="flex items-end justify-between">
                        <div>
                            <div className="font-bold text-gray-900">{t.author}</div>
                            <div className="text-gray-500 text-sm">{t.role}</div>
                        </div>
                        <div className="text-right">
                            <div className="text-4xl font-bold text-blue-600">{t.stat}</div>
                            <div className="text-gray-500 text-xs uppercase tracking-wide font-semibold">{t.statDesc}</div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
      </Container>
    </section>
  )
}
